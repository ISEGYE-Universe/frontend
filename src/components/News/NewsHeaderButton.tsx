import Image from 'next/image'
import { color } from './color'

type NewsHeaderButtonProps = {
  iconSrc: string // later change to NodeRequire
  buttonName: string
  href: string
}

export const NewsHeaderButton = ({
  iconSrc,
  buttonName,
  href,
}: NewsHeaderButtonProps) => {
  return (
    <div
      css={{
        width: 220,
        height: 40,
        backgroundColor: color.NewsHeaderButtonWhite,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          position: 'relative',
          marginLeft: 20,
          marginRight: 20,
          width: 20,
          height: 20,
          backgroundColor: 'black',
        }}
      >
        <Image src={iconSrc} alt="icon" fill={true} />
      </div>
      <span css={{ color: color.NewsHeaderButtonText, fontSize: 14 }}>
        {buttonName}
      </span>
      <Image
        css={{
          marginLeft: 'auto',
          marginRight: 20,
        }}
        src="/images/icon/NewsHeaderButtonArrow.svg"
        alt="arrow"
        width={7}
        height={12}
      />
    </div>
  )
}
