import { create } from 'zustand'

interface ProfileState {
  hoverDefault: boolean
  setHoverDefault: (newState: boolean) => void
  hoverJururu: boolean
  setHoverJururu: (newState: boolean) => void
}

const ProfileStore = create<ProfileState>((set) => ({
  hoverDefault: false,
  setHoverDefault: (newState) => {
    set((state) => ({ hoverDefault: newState }))
  },
  hoverJururu: false,
  setHoverJururu: (newState) => {
    set((state) => ({ hoverJururu: newState }))
  },
}))

export default ProfileStore
