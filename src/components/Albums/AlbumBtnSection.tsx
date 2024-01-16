import { AlbumBtnDiv } from '@/styles/Album/AlbumInfo'
import { PlayerButton } from './AlbumBtn'

type PropType = {
  album: string
}

export const AlbumBtn = ({ album }: PropType) => {
  return (
    <section css={AlbumBtnDiv}>
      <PlayerButton player="Spotify" album={album} />
      <PlayerButton player="Flo" album={album} />
      <PlayerButton player="Youtube" album={album} />
      <PlayerButton player="Vibe" album={album} />
      <PlayerButton player="Melon" album={album} />
      <PlayerButton player="Genie" album={album} />
      <PlayerButton player="Bugs" album={album} />
    </section>
  )
}
