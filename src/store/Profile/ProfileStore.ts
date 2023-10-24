import { create } from 'zustand'

interface ProfileState {
  hoverDefault: boolean
  setHoverDefault: (newState: boolean) => void
  switchHoverMember: boolean[]
  setSwitchHoverMember: (memberIndex: number, hover: boolean) => void
  currentMember: Profile.CurrentMember
  setCurrentMember: (target: Profile.CurrentMember) => void
}

const ProfileStore = create<ProfileState>((set) => ({
  hoverDefault: true,
  setHoverDefault: (newState) => {
    set(() => ({ hoverDefault: newState }))
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
  currentMember: undefined,
  setCurrentMember: (target) => {
    set(() => ({ currentMember: target }))
  },
}))

export default ProfileStore
