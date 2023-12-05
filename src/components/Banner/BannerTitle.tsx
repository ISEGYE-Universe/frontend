import { MainTitleLight, TextMdRegular } from '@/styles/Font'

interface BannerTitleProps {
  title: string
  desc: string
}

const BannerTitle = ({ title, desc }: BannerTitleProps) => {
  return (
    <div
      css={{
        position: 'absolute',
        bottom: '200px',
        textAlign: 'center',
      }}
    >
      <h2 css={MainTitleLight}>{title}</h2>
      <div css={TextMdRegular}>{desc}</div>
    </div>
  )
}

export default BannerTitle
