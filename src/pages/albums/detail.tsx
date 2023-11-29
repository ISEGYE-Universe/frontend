/*
 * 23.10.17
 * Heo0
 * Album Detail Page
 */
import { DivMargin } from '@/styles/Album/AlbumInfo'
import { EmblaCarousel } from '../../components/Albums/EmblaCarousel'

const Detail = () => {
  return (
    <main className="album-detail-div" css={DivMargin}>
      <EmblaCarousel
        data={['REWIND', 'WINTERSPRING', 'LOCKDOWN', 'ANOTHERWORLD', 'KIDDING']}
        options={{
          align: 'start',
          loop: true,
          skipSnaps: false,
        }}
        defaultIndex={0}
      />
    </main>
  )
}

export default Detail
