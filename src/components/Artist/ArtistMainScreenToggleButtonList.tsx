import { ArtistMainScreenToggleButton } from './ArtistMainScreenToggleButton'
import { IsedolTwitchInfoType } from './store/ArtistType'

const DUMMY_ISD_TWITCH_INFO_LIST: IsedolTwitchInfoType[] = [
  {
    id: 'Ine',
    twitchNickname: '아이네_ (vo_ine)',
    isBangOn: true,
  },
  {
    id: 'Jingburger',
    twitchNickname: '징버거 (jingburger)',
    isBangOn: false,
  },
  {
    id: 'Lilpa',
    twitchNickname: '릴파_ (lilpaaaaaa)',
    isBangOn: true,
  },
  {
    id: 'Jururu',
    twitchNickname: '주르르 (cotton__123)',
    isBangOn: false,
  },
  {
    id: 'Gosegu',
    twitchNickname: '고세구___ (gosegugosegu)',
    isBangOn: true,
  },
  {
    id: 'VIichan',
    twitchNickname: '비챤_ (viichan6)',
    isBangOn: false,
  },
]

export const ArtistMainScreenToggleButtonList = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <ArtistMainScreenToggleButton
        id="Lilpa"
        twitchNickname="릴파_ (lilpaaaaaa)"
        isBangOn={true}
      />
    </div>
  )
}
