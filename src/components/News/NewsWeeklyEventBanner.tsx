import Link from 'next/link'
import color from './color'

type NewsThumnailProps = {
  children: JSX.Element
  href: string
}

export const NewsWeeklyEventBanner = ({
  children,
  href,
}: NewsThumnailProps) => {
  return (
    <div
      css={{
        width: 252,
        height: 380,
        borderRadius: 10,
        backgroundColor: color.ElementBackgroundGrey,
        flex: '1 0 auto',
      }}
    >
      <Link href={href}>{children}</Link>
    </div>
  )
}
