/*
 * 23.10.17
 * Heo0
 * Album Detail Page
 */
import EmblaCarousel from '../../components/Albums/EmblaCarousel'
import Album from '../../components/Albums/AlbumInfo'
import { DivMargin } from '@/styles/Album/AlbumInfo'

const Detail = () => {
  return (
    <main className="album-detail-div" css={DivMargin}>
      <EmblaCarousel
        slides={[
          <Album ident="REWIND" />,
          <Album ident="WINTERSPRING" />,
          <Album ident="LOCKDOWN" />,
          <Album ident="AnotherWorld" />,
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
