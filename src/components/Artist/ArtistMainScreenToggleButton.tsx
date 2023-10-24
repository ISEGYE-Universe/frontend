import Image from 'next/image'
import { IsedolTwitchInfoType } from './store/ArtistType'

const TOGGLE_MAP = {
  Ine: {
    imgSrc: require('assets/main-artist/맴버프로필=INE.png'),
    color: '#8A2BE2',
  },
  Jingburger: {
    imgSrc: require('assets/main-artist/맴버프로필=JINGBURGER.png'),
    color: '#F0A957',
  },
  Lilpa: {
    imgSrc: require('assets/main-artist/맴버프로필=LILPA.png'),
    color: '#443965',
  },
  Jururu: {
    imgSrc: require('assets/main-artist/맴버프로필=JURURU.png'),
    color: '#FF008C',
  },
  Gosegu: {
    imgSrc: require('assets/main-artist/맴버프로필=GOSEGU.png'),
    color: '#467EC6',
  },
  VIichan: {
    imgSrc: require('assets/main-artist/맴버프로필=VIICHAN.png'),
    color: '#95C100',
  },
}

export const ArtistMainScreenToggleButton = ({
  id,
  twitchNickname,
  isHighlighted,
}: IsedolTwitchInfoType) => {
  return (
    <div css={{ display: 'flex', flexDirection: 'row-reverse', gap: 20 }}>
      <div // later using ISD profile common component
        css={{
          position: 'relative',
          width: 50,
          height: 50,
          borderRadius: 75,
          border: '1px solid',
          borderColor: isHighlighted
            ? TOGGLE_MAP[id as keyof typeof TOGGLE_MAP].color
            : 'white',
        }}
      >
        <Image
          css={{ filter: isHighlighted ? 'grayscale(0)' : 'grayscale(1)' }}
          src={TOGGLE_MAP[id as keyof typeof TOGGLE_MAP].imgSrc}
          alt="Icon"
          fill={true}
        />
      </div>
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
            color: isHighlighted ? '#151515' : '#909090',
          }}
        >
          {twitchNickname}
        </span>
        <span
          css={{
            color: isHighlighted
              ? TOGGLE_MAP[id as keyof typeof TOGGLE_MAP].color
              : '#909090',
          }}
        >
          {id}
        </span>
      </div>
    </div>
  )
}
