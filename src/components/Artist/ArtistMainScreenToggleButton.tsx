import Image from 'next/image'
import { color } from '../News/color'
import { IsedolTwitchInfoType } from './store/ArtistType'

const TOGGLE_MAP = {
  Ine: {
    imgSrc: require('./assets/맴버프로필=INE.png'),
    color: color.IneViolet,
  },
  Jingburger: {
    imgSrc: require('./assets/맴버프로필=JINGBURGER.png'),
    color: color.JingburgerYellow,
  },
  Lilpa: {
    imgSrc: require('./assets/맴버프로필=LILPA.png'),
    color: color.LilpaNavy,
  },
  Jururu: {
    imgSrc: require('./assets/맴버프로필=JURURU.png'),
    color: color.JururuPink,
  },
  Gosegu: {
    imgSrc: require('./assets/맴버프로필=GOSEGU.png'),
    color: color.GoseguSky,
  },
  VIichan: {
    imgSrc: require('./assets/맴버프로필=VIICHAN.png'),
    color: color.VIichanGreen,
  },
}

export const ArtistMainScreenToggleButton = ({
  id,
  twitchNickname,
  isBangOn,
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
          borderColor: isBangOn
            ? TOGGLE_MAP[id as keyof typeof TOGGLE_MAP].color
            : 'white',
        }}
      >
        <Image
          css={{ filter: isBangOn ? 'grayscale(0)' : 'grayscale(1)' }}
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
            color: isBangOn ? '#151515' : '#909090',
          }}
        >
          {twitchNickname}
        </span>
        <span
          css={{
            color: isBangOn
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
