import { YouTubeIcon, CafeIcon } from "./svg"

const BannerDescription = () => {
  return (
    <div css={{
      width: '80%',
      position: "absolute",
      bottom: "62px",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div css={{
        textAlign: "left",
      }}>
        <h2>Digital Single Album</h2>
        <span>마법소녀 이세계 아이돌 ost</span>
      </div>
      <div >
        <a href="/">
          <YouTubeIcon />
        </a>
        <span css={{width: "30px", display: "inline-block"}} />
        <a href="/">
          <CafeIcon />
        </a>
      </div>
    </div>
  )
}

export default BannerDescription