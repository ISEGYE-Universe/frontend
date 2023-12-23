import { create } from 'zustand'
import { YouTubePlayer } from 'react-youtube'

interface MemberProfileState {
  isPlaying: boolean
  setIsPlaying: (newState: boolean) => void
  youTubePlayerReady: boolean
  setYouTubePlayerReady: (newState: boolean) => void
  // youtube 플레이어 객체
  youTubeVideoPlayer: YouTubePlayer
  setYoutubeVideoPlayer: (newState: YouTubePlayer) => void
  // 현재 재생중인 커버곡
  currentYoutubeId: string
  setCurrentYoutubeId: (newState: string) => void
}

const MemberProfileStore = create<MemberProfileState>((set) => ({
  isPlaying: false,
  setIsPlaying: (newState) => {
    set(() => ({ isPlaying: newState }))
  },
  youTubePlayerReady: false,
  setYouTubePlayerReady: (newState) => {
    set(() => ({ youTubePlayerReady: newState }))
  },
  youTubeVideoPlayer: null,
  setYoutubeVideoPlayer: (newState) => {
    set(() => ({ youTubeVideoPlayer: newState }))
  },
  currentYoutubeId: '',
  setCurrentYoutubeId: (newState) => {
    set(() => ({ currentYoutubeId: newState }))
  },
}))

export default MemberProfileStore
