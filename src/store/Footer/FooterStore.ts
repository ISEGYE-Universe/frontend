import { create } from 'zustand'

interface ModalState {
  modalDefault: boolean
  setState: (State: boolean) => void
}

export const ModalStore = create<ModalState>((set) => ({
  modalDefault: false,
  setState: (State) => {
    set(() => ({ modalDefault: State }))
  },
}))
