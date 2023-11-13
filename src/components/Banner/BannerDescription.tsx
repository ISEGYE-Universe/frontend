import Link from 'next/link'
import { TitleMdRegular, TextSmRegular } from '@/styles/Font'
import { YouTubeIcon, CafeIcon } from './svg'

interface props {
  title: string
  desc: string
  youtube: string
  cafe: string
}

function BannerDescription({ title, desc, youtube, cafe }: props) {
  return (
    <div
      css={{
        width: '80%',
        position: 'absolute',
        bottom: '62px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          textAlign: 'left',
        }}
      >
        <h2 css={TitleMdRegular}>{title}</h2>
        <span css={TextSmRegular}>{desc}</span>
      </div>
      <div>
        <Link href={youtube}>
          <YouTubeIcon />
        </Link>
        <span css={{ width: '30px', display: 'inline-block' }} />
        <Link href={cafe}>
          <CafeIcon />
        </Link>
      </div>
    </div>
  )
}

export default BannerDescription
