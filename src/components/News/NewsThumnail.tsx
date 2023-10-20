import { color } from './color'

type NewsThumnailProps = {
  children: JSX.Element
}

export const NewsThumnail = ({ children }: NewsThumnailProps) => {
  return (
    <div
      css={{
        width: 500,
        height: 500,
        borderRadius: 20,
        backgroundColor: color.ElementBackgroundGrey,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  )
}
