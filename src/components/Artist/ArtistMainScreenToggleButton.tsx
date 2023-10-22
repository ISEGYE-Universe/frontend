import { color } from '../News/color'
import { IsedolTwitchInfoType } from './store/ArtistType'

export const ArtistMainScreenToggleButton = ({
  id,
  twitchNickname,
  isBangOn,
}: IsedolTwitchInfoType) => {
  const personalColor =
    id === 'Ine'
      ? color.IneViolet
      : id === 'Jingburger'
      ? color.JingburgerYellow
      : id === 'Lilpa'
      ? color.LilpaNavy
      : id === 'Jururu'
      ? color.JururuPink
      : id === 'Gosegu'
      ? color.GoseguSky
      : color.VIichanGreen

  return (
    <div css={{ display: 'flex', flexDirection: 'row-reverse', gap: 20 }}>
      <div // later using ISD profile common component
        css={{
          width: 50,
          height: 50,
          backgroundColor: color.ElementBackgroundGrey,
        }}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 10,
        }}
      >
        <span
          css={{
            color: isBangOn ? '#151515' : '#909090',
          }}
        >
          {twitchNickname}
        </span>
        <span
          css={{
            color: isBangOn ? personalColor : '#909090',
          }}
        >
          {id}
        </span>
      </div>
    </div>
  )
}
