import MovieSlider from "./MovieSlider"
import { MovieListType } from "./type/types"

/** 임시 데이터 */
const MovieList: MovieListType = [
  { title: "키딩", src: "https://www.youtube.com/embed/rDFUl2mHIW4?si=u-LS5UhmVzZCc9Zk" },
  { title: "어쩌구", src: "https://www.youtube.com/embed/JY-gJkMuJ94?si=7pXjsRq3MIn5nZC2" },
  { title: "저쩌구", src: "https://www.youtube.com/embed/fgSXAKsq-Vo?si=RWCIxW4dIlX_n0r8" },
  { title: "ㅇㅇㅇ", src: "https://www.youtube.com/embed/i4SRH9jfUMQ?si=RTDntVz_SxqoRjwK" } 
]

const Movie = () => {

  return (
    <section css={{
      margin: "0 auto",
      width: "1280px",
      textAlign: "center",
      position: "relative"
    }}>
      <MovieSlider movieList={MovieList} />
    </section>
  )
}

export default Movie