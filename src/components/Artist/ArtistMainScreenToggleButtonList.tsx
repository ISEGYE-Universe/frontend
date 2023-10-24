import { ArtistMainScreenToggleButton } from './ArtistMainScreenToggleButton'
import { IsedolTwitchInfoType } from './store/ArtistType'

const DUMMY_ISD_TWITCH_INFO_LIST: IsedolTwitchInfoType[] = [
  {
    id: 'Ine',
    twitchNickname: '아이네_ (vo_ine)',
    isHighlighted: true,
  },
  {
    id: 'Jingburger',
    twitchNickname: '징버거 (jingburger)',
    isHighlighted: false,
  },
  {
    id: 'Lilpa',
    twitchNickname: '릴파_ (lilpaaaaaa)',
    isHighlighted: false,
  },
  {
    id: 'Jururu',
    twitchNickname: '주르르 (cotton__123)',
    isHighlighted: false,
  },
  {
    id: 'Gosegu',
    twitchNickname: '고세구___ (gosegugosegu)',
    isHighlighted: false,
  },
  {
    id: 'VIichan',
    twitchNickname: '비챤_ (viichan6)',
    isHighlighted: false,
  },
]

export const ArtistMainScreenToggleButtonList = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        marginTop: 20,
      }}
    >
      {DUMMY_ISD_TWITCH_INFO_LIST.map((isedol) => (
        <ArtistMainScreenToggleButton
          key={isedol.id}
          id={isedol.id}
          twitchNickname={isedol.twitchNickname}
          isHighlighted={isedol.isHighlighted}
        />
      ))}
    </div>
  )
}
