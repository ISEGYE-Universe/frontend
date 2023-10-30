import Link from 'next/link'
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
        <Link  href="https://www.youtube.com/watch?v=rDFUl2mHIW4">
          <YouTubeIcon />
        </Link>
        <span css={{width: "30px", display: "inline-block"}} />
        <Link href="https://cafe.naver.com/steamindiegame">
          <CafeIcon />
        </Link>
      </div>
    </div>
  )
}

export default BannerDescription