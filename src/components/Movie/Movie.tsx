import MovieSlider from './MovieSlider'
import { MovieListType } from './type/types'
import { MovieContainer } from './style/Movie.Style'
import MainTitle from '../MainTitle'

/** 임시 데이터 */
const MovieList: MovieListType = [
  {
    title: 'The 1st Single - 리와인드 (RE:WIND)',
    src: 'fgSXAKsq-Vo',
  },
  {
    title: 'The 2nd Single - 겨울봄',
    src: 'JY-gJkMuJ94',
  },
  {
    title: 'OST - LOCKDOWN (락다운)',
    src: 'QgMFpuos4Rg',
  },
  {
    title: 'OST - Another World (어나더 월드)',
    src: '8KTFf2X-ago',
  },
  {
    title: 'The 3rd Single - KIDDING (키딩)',
    src: 'rDFUl2mHIW4',
  },
  {
    title: 'ETC - OVER (오버)',
    src: 'i4SRH9jfUMQ',
  },
  {
    title: 'ETC - Superhero (슈퍼히어로)',
    src: 'wyhwJnNpVJI',
  },
]

const Movie = () => {
  return (
    <section css={MovieContainer}>
      <MainTitle width="80" title="MOVIE" />
      <MovieSlider movieList={MovieList} />
    </section>
  )
}

export default Movie
