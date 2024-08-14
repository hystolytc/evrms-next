import { create } from 'zustand'
import { getProducts } from '@/services/products'
import { IProduct, IProductPagination } from '@/types/product'

interface IProductStore {
  loading: boolean
  data: IProduct[]
  pagination: IProductPagination
  error?: string
  actions: {
    fetchProducts: (nextCursor?: string) => void
  }
}

const initialState = {
  loading: false,
  data: [],
  pagination: {
    next_cursor: null,
    has_next: false
  },
  error: ''
}

const store = create<IProductStore>((set) => ({
  ...initialState,
  actions: {
    fetchProducts: async (nextCursor = '') => {
      set(({ loading: true }))
      try {
        const {data, pagination} = await getProducts(nextCursor)
        set(prevState => ({
          data: [...prevState.data, ...data], 
          pagination,
          loading: false
        }))
      } catch(ex) {
        set({loading: false, error: 'Failed to get products'})
      }
    }
  }
}))

export default store
