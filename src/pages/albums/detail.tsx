/*
 * 23.10.17
 * Heo0
 * Album Detail Page
 */
import { DivMargin } from '@/styles/Album/AlbumInfo'
import EmblaCarousel from '../../components/Albums/EmblaCarousel'
import Album from '../../components/Albums/AlbumInfo'

const Detail = () => {
  return (
    <main className="album-detail-div" css={DivMargin}>
      <EmblaCarousel
        slides={[
          <Album ident="REWIND" />,
          <Album ident="WINTER_SPRING" />,
          <Album ident="LOCKDOWN" />,
          <Album ident="ANOTHER_WORLD" />,
          <Album ident="KIDDING" />,
        ]}
        options={{
          align: 'start',
          loop: true,
          skipSnaps: false,
        }}
        default={0}
      />
    </main>
  )
}

export default Detail
