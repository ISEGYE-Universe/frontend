import { MovieContainerProps } from './type/types'

const MovieContainer = ({ link }: MovieContainerProps) => {
  return (
    <div>
      <iframe
        width="1280"
        height="720"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

export default MovieContainer
