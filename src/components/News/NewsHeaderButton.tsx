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
          marginLeft: 20,
          marginRight: 20,
          width: 20,
          height: 20,
          backgroundColor: 'black',
        }}
      >
        <span css={{ color: 'white', fontSize: 10 }}>{iconSrc}</span>
      </div>
      <span css={{ color: color.NewsHeaderButtonText, fontSize: 14 }}>
        {buttonName}
      </span>
    </div>
  )
}
