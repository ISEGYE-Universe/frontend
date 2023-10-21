import { color } from '../News/color'
import { IsedolTwitchInfoType } from './store/ArtistType'

export const ArtistMainScreenToggleButton = ({
  id,
  twitchNickname,
  isBangOn,
}: IsedolTwitchInfoType) => {
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
        <span>{twitchNickname}</span>
        <span>{id}</span>
      </div>
    </div>
  )
}
