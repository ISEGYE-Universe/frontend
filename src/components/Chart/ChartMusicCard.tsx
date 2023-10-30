import { CaptionMdLight, CaptionMdRegular, TextMdBold } from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'

interface ChartMusicCardProps {
  title: string
  position: number
  change: number
  artist: string
  thumb: string
}

const mainContainer = css`
  gap: 22px;
  padding: 10px;
  border-radius: 14px;
  background: #f6f6f6;
`

const metadataContainer = css`
  display: flex;
  align-items: center;
  gap: 12px;
`
const flexColContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const flexRowContainer = css`
  display: flex;
  align-items: center;
`
const changeFontStyle = css`
  font-weight: 200;
`
const artistFontStyle = css`
  font-weight: 100;
  color: #777;
`

const chartIconStyle = css`
  width: 100%;
  height: auto;
`

const ChartMusicCard = ({
  title,
  position,
  change,
  artist,
  thumb,
}: ChartMusicCardProps) => {
  return (
    <div css={[mainContainer, flexRowContainer]}>
      <Image
        src={thumb}
        alt={`${title} thumbnail`}
        width={70}
        height={70}
      ></Image>
      <div css={[flexRowContainer, metadataContainer]}>
        {/* 순위, 제목 */}
        <div css={flexColContainer}>
          <h3 css={TextMdBold}>{position}</h3>
          <div
            css={[
              flexRowContainer,
              css`
                gap: 3px;
              `,
            ]}
          >
            <Image
              src={
                change > 0
                  ? '/images/icon/chart-up-icon.svg'
                  : change < 0
                  ? '/images/icon/chart-down-icon.svg'
                  : '/images/icon/chart-zero-icon.svg'
              }
              alt="chart change icon"
              width={0}
              height={0}
              css={chartIconStyle}
            ></Image>
            <span
              css={[
                CaptionMdRegular,
                changeFontStyle,
                css`
                  color: ${change > 0
                    ? '#ea4476'
                    : change < 0
                    ? '#69A1F8'
                    : '#777'};
                `,
              ]}
            >
              {change >= 0 ? change : change.toString().replace('-', '')}
            </span>
          </div>
        </div>
        {/* 등락, 아티스트 */}
        <div css={flexColContainer}>
          <h3 css={TextMdBold}>{title}</h3>
          <span css={[CaptionMdLight, artistFontStyle]}>{artist}</span>
        </div>
      </div>
    </div>
  )
}

export default ChartMusicCard
