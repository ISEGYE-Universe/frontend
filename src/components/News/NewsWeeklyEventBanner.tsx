import { color } from './color'

type NewsThumnailProps = {
  children: JSX.Element
  href: string
}

export function NewsWeeklyEventBanner({ children, href }: NewsThumnailProps) {
  return (
    <div
      css={{
        height: 380,
        borderRadius: 10,
        backgroundColor: color.ElementBackgroundGrey,
        flex: '1 0 auto',
      }}
    >
      {children}
    </div>
  )
}
