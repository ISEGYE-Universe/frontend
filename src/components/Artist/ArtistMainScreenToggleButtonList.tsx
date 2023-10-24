import { Dispatch, SetStateAction } from 'react'
import { ArtistMainScreenToggleButton } from './ArtistMainScreenToggleButton'

const DUMMY_ISD_TWITCH_INFO_LIST = [
  {
    id: 'Ine',
    twitchNickname: '아이네_ (vo_ine)',
  },
  {
    id: 'Jingburger',
    twitchNickname: '징버거 (jingburger)',
  },
  {
    id: 'Lilpa',
    twitchNickname: '릴파_ (lilpaaaaaa)',
  },
  {
    id: 'Jururu',
    twitchNickname: '주르르 (cotton__123)',
  },
  {
    id: 'Gosegu',
    twitchNickname: '고세구___ (gosegugosegu)',
  },
  {
    id: 'VIichan',
    twitchNickname: '비챤_ (viichan6)',
  },
]

type ArtistMainScreenToggleButtonListProps = {
  onClickButton: Dispatch<SetStateAction<string>>
  highlightedMember: string
}

export const ArtistMainScreenToggleButtonList = ({
  onClickButton,
  highlightedMember,
}: ArtistMainScreenToggleButtonListProps) => {
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
          isHighlighted={highlightedMember === isedol.id}
          onClick={onClickButton}
        />
      ))}
    </div>
  )
}
