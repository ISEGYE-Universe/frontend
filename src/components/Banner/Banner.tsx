import BannerTitle from "./BannerTitle"
import BannerDescription from "./BannerDescription"
import Image from 'next/image'
import mock_banner from "./mock_up/mock_banner.png"

const Banner = () => {
  return (
    <>
      <section css={{
        height: "960px",
        display: "flex",
        justifyContent: "center",
        position: "relative"
      }}>
        <Image
          src={mock_banner}
          alt="banner Img"
          fill
        />
        <BannerTitle />
        <BannerDescription />
      </section>
    </>
  )
}

export default Banner