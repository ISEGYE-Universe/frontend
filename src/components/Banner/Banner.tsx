import Image from 'next/image'
import BannerTitle from './BannerTitle'
import BannerDescription from './BannerDescription'
import mock_banner from './mock_up/mock_banner.png'

const Banner = () => {
  return (
    <section
      css={{
        height: '960px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        color: '#FDFDFD',
      }}
    >
      <Image src={mock_banner} alt="banner Img" fill />
      <BannerTitle title="LOCK DOWN" desc="2023 . 06 . 22 6pm open" />
      <BannerDescription
        title="Digital Single Album"
        desc="마법소녀 이세계 아이돌 ost"
        youtube="https://www.youtube.com/watch?v=rDFUl2mHIW4"
        cafe="https://cafe.naver.com/steamindiegame"
      />
    </section>
  )
}

export default Banner
