import { create } from 'zustand'

interface IChartStore {
  data: Record<string, any>[]
  total: number
  actions: {
    add: (item: Record<string, any>) => void
    remove: (itemId: string) => void
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
      set(prevState => ({data: [...prevState.data, item]}))
    },
    remove: (itemId: string) => {
      const data = getState().data.filter(item => item.id !== itemId)
      set({data})
    }
  }
}))

export default store