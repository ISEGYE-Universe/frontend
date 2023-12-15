import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import { css } from '@emotion/react'
import { TextMdBold, CaptionMdBold } from '@/styles/Font'

const TOGGLE_MAP = {
  Ine: {
    imgSrc: 'images/main-artist/맴버프로필=INE.png',
    color: '#8A2BE2',
  },
  Jingburger: {
    imgSrc: 'images/main-artist/맴버프로필=JINGBURGER.png',
    color: '#F0A957',
  },
  Lilpa: {
    imgSrc: 'images/main-artist/맴버프로필=LILPA.png',
    color: '#443965',
  },
  Jururu: {
    imgSrc: 'images/main-artist/맴버프로필=JURURU.png',
    color: '#FF008C',
  },
  Gosegu: {
    imgSrc: 'images/main-artist/맴버프로필=GOSEGU.png',
    color: '#467EC6',
  },
  VIichan: {
    imgSrc: 'images/main-artist/맴버프로필=VIICHAN.png',
    color: '#95C100',
  },
}

type ArtistMainScreenToggleButtonProps = {
  id: string
  twitchNickname: string
  isHighlighted: boolean
  onClick: Dispatch<SetStateAction<string>>
}

export const ArtistMainScreenToggleButton = ({
  id,
  twitchNickname,
  isHighlighted,
  onClick,
}: ArtistMainScreenToggleButtonProps) => {
  return (
    <button
      type="button"
      css={{
        display: 'flex',
        backgroundColor: '#ffffff',
        width: 286,
        height: 70,
        borderLeft: '4px solid',
        borderColor: isHighlighted
          ? TOGGLE_MAP[id as keyof typeof TOGGLE_MAP].color
          : '#C7C7C7',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 11,
        boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15)',
      }}
      // css={css`
      //   display: flex;
      //   width: 286px;
      //   height: 70px;
      //   border-left: 4px solid;
      //   border-color: #c7c7c7;
      //   justify-content: space-between;
      //   align-items: center;
      //   padding-left: 24px;
      //   padding-right: 11px;
      //   box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
      // `}
      onClick={() => onClick(id)}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <span
          css={[
            TextMdBold,
            css`
              color: ${isHighlighted ? '#151515' : '#909090'};
            `,
          ]}
        >
          {twitchNickname}
        </span>
        <span
          css={[
            CaptionMdBold,
            css`
              color: ${isHighlighted
                ? TOGGLE_MAP[id as keyof typeof TOGGLE_MAP].color
                : '#909090'};
            `,
          ]}
        >
          {id}
        </span>
      </div>
      <div
        css={{
          position: 'relative',
          width: 40,
          height: 40,
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
          fill
        />
      </div>
    </button>
  )
}
