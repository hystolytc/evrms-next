import { create } from 'zustand'

interface IChartStore {
  data: Record<string, any>[]
  total: number,
  isOpen?: boolean 
  actions: {
    add: (item: Record<string, any>) => void
    remove: (itemId: string) => void
    hasItem: (itemId: string) => boolean
    openCart: () => void
  }
}

const initialState = {
  data: [],
  total: 0
}

const store = create<IChartStore>((set, getState) => ({
  ...initialState,
  actions: {
    add: (item: Record<string, any>) => {
      set(prevState => ({
        data: [...prevState.data, item],
        total: prevState.total + 1
      }))
    },
    remove: (itemId: string) => {
      const data = getState().data.filter(item => item.id !== itemId)
      set(prevState => ({
        data,
        total: prevState.total - 1
      }))
    },
    hasItem: (itemId: string) => {
      const item = getState().data.find(item => item.id === itemId)
      if (!item) return false
      return true
    },
    openCart: () => {
      set(prevState => ({isOpen: !prevState.isOpen}))
    }
  }
}))

export default store