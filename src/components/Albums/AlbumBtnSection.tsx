import { AlbumBtnDiv } from '@/styles/Album/AlbumInfo'
import {
  SpotButton,
  GOButton,
  YTButton,
  VBButton,
  BGButton,
  MLButton,
  GNButton,
} from './AlbumBtn'

type PropType = {
  album: string
}

export const AlbumBtn = ({ album }: PropType) => {
  return (
    <section css={AlbumBtnDiv}>
      <SpotButton player="Spotify" width={35} height={35} album={album} />
      <GOButton player="Gaon" width={35} height={13} album={album} />
      <YTButton player="Youtube" width={27} height={27} album={album} />
      <VBButton player="Vibe" width={27} height={27} album={album} />
      <MLButton player="Melon" width={27} height={27} album={album} />
      <GNButton player="Genie" width={27} height={27} album={album} />
      <BGButton player="Bugs" width={30} height={18} album={album} />
    </section>
  )
}
