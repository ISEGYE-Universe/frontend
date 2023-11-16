import { create } from 'zustand'

interface ChartState {
  currentTop100ChartType: Chart.Top100ChartType
  setCurrentTop100ChartType: (newState: Chart.Top100ChartType) => void
}

const ChartStore = create<ChartState>((set) => ({
  currentTop100ChartType: 'daily',
  setCurrentTop100ChartType: (newState) => {
    set(() => ({ currentTop100ChartType: newState }))
  },
}))

export default ChartStore
