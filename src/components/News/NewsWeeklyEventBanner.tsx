import { color } from './color'

type NewsThumnailProps = {
  children: JSX.Element
}

export const NewsWeeklyEventBanner = ({ children }: NewsThumnailProps) => {
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
