import BannerTitle from "./BannerTitle"
import BannerDescription from "./BannerDescription"
import Image from 'next/image'
import mock_banner from "./mock_up/mock_banner.png"

const Banner = () => {
  return (
    <>
      <section css={{
        width: "100%",
        height: "960px",
        display: "flex",
        justifyContent: "center"
      }}>
        <Image
          src={mock_banner}
          alt="Picture of the author"
          fill
        />
        <BannerTitle />
        <BannerDescription />
      </section>
    </>
  )
}

export default Banner