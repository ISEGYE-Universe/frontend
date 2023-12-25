import { create } from 'zustand'

interface MemberProfileState {
  isPlaying: boolean
  setIsPlaying: (newState: boolean) => void
}

const MemberProfileStore = create<MemberProfileState>((set) => ({
  isPlaying: false,
  setIsPlaying: (newState) => {
    set(() => ({ isPlaying: newState }))
  },
}))

export default MemberProfileStore
