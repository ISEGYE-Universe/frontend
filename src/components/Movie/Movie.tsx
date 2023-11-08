import MovieSlider from './MovieSlider'
import { MovieListType } from './type/types'

/** 임시 데이터 */
const MovieList: MovieListType = [
  {
    title: 'The 1st Single - 리와인드 (RE:WIND)',
    src: 'https://www.youtube.com/embed/fgSXAKsq-Vo?si=sWt4P_hUeyISCtCm',
  },
  {
    title: 'The 2nd Single - 겨울봄',
    src: 'https://www.youtube.com/embed/JY-gJkMuJ94?si=7pXjsRq3MIn5nZC2',
  },
  {
    title: 'OST - LOCKDOWN (락다운)',
    src: 'https://www.youtube.com/embed/QgMFpuos4Rg?si=DXiy2xN3oPBpTPUY',
  },
  {
    title: 'OST - Another World (어나더 월드)',
    src: 'https://www.youtube.com/embed/8KTFf2X-ago?si=uA1il-de4NToZqae',
  },
  {
    title: 'The 3rd Single - KIDDING (키딩)',
    src: 'https://www.youtube.com/embed/rDFUl2mHIW4?si=N76Z7HzkjDmHT1d9',
  },
  {
    title: 'ETC - OVER (오버)',
    src: 'https://www.youtube.com/embed/i4SRH9jfUMQ?si=CCYt9Q6Ai1zjwm8w',
  },
  {
    title: 'ETC - Superhero (슈퍼히어로)',
    src: 'https://www.youtube.com/embed/wyhwJnNpVJI?si=u3XNIlKDcV5MsYYg',
  },
]

const Movie = () => {
  return (
    <section
      css={{
        margin: '0 auto',
        width: '1280px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <MovieSlider movieList={MovieList} />
    </section>
  )
}

export default Movie
