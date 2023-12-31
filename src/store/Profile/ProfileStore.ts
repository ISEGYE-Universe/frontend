import { create } from 'zustand'

interface ProfileState {
  hoverDefault: boolean
  setHoverDefault: (newState: boolean) => void
  switchHoverMember: boolean[]
  setSwitchHoverMember: (memberIndex: number, hover: boolean) => void
}

const ProfileStore = create<ProfileState>((set) => ({
  hoverDefault: true,
  setHoverDefault: (newState) => {
    set((state) => ({ hoverDefault: newState }))
  },
  switchHoverMember: new Array(6).fill(false),
  setSwitchHoverMember: (memberIndex, hover) => {
    set((state) => ({
      switchHoverMember: state.switchHoverMember.map((e, i) => {
        if (i === memberIndex) {
          return hover
        }
        return false
      }),
    }))
  },
}))

export default ProfileStore
