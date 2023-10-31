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
`
const flexRowContainer = css`
  display: flex;
`
const flexAlignCenter = css`
  align-items: center;
`
const flexAlignStart = css`
  align-items: flex-start;
`
const changeFontStyle = css`
  font-weight: 200;
`
const artistFontStyle = css`
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
    <li css={[mainContainer, flexRowContainer, flexAlignCenter]}>
      <Image
        src={thumb}
        alt={`${title} thumbnail`}
        width={70}
        height={70}
      ></Image>
      <div css={[flexRowContainer, flexAlignCenter, metadataContainer]}>
        {/* 순위, 제목 */}
        <div css={flexColContainer}>
          <h3 css={TextMdBold}>{position}</h3>
          <div
            css={[
              flexRowContainer,
              flexAlignCenter,
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
        <div css={[flexColContainer, flexAlignStart]}>
          <h3 css={TextMdBold}>{title}</h3>
          <span css={[CaptionMdLight, artistFontStyle]}>{artist}</span>
        </div>
      </div>
    </li>
  )
}

export default ChartMusicCard
