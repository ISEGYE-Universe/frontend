
interface props {
  link: string;
}

const MovieContainer = ({link}: props) => {
  return (
    <div>
      <iframe
        width="1280"
        height="720"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

export default MovieContainer