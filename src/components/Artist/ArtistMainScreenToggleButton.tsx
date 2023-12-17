import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import { css } from '@emotion/react'
import { TextMdBold, CaptionMdBold } from '@/styles/Font'

import buttonIcon from '@/data/main-artist/button-icon.json'

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
          ? buttonIcon[id as keyof typeof buttonIcon].color
          : '#C7C7C7',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 11,
        boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15)',
      }}
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
                ? buttonIcon[id as keyof typeof buttonIcon].color
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
            ? buttonIcon[id as keyof typeof buttonIcon].color
            : 'white',
        }}
      >
        <Image
          css={{ filter: isHighlighted ? 'grayscale(0)' : 'grayscale(1)' }}
          src={buttonIcon[id as keyof typeof buttonIcon].imgSrc}
          alt="Icon"
          fill
        />
      </div>
    </button>
  )
}
