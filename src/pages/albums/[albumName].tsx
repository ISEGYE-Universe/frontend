/*
 * 23.10.17
 * Heo0
 * Album Detail Page
 */
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { DivMargin } from '@/styles/Album/AlbumInfo'
import { EmblaCarousel } from '../../components/Albums/EmblaCarousel'

const albumsList = [
  'rewind',
  'winter-spring',
  'lockdown',
  'another-world',
  'kidding',
  'isegye-festival',
]

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: albumsList.map((album) => {
      return { params: { albumName: album } }
    }),
    fallback: false,
  }
}

interface AlbumNameParams extends ParsedUrlQuery {
  albumName: string
}

export const getStaticProps: GetStaticProps = (context) => {
  const { albumName } = context.params as AlbumNameParams
  return {
    props: {
      albumName,
    },
  }
}

const Detail = ({
  albumName,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className="album-detail-div" css={DivMargin}>
      <EmblaCarousel
        data={[
          'REWIND',
          'WINTERSPRING',
          'LOCKDOWN',
          'ANOTHERWORLD',
          'KIDDING',
          'ISGFESTA',
        ]}
        options={{
          align: 'start',
          loop: true,
          skipSnaps: false,
        }}
        defaultIndex={albumName}
      />
    </main>
  )
}

export default Detail
