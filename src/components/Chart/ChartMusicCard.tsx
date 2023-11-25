import ChartColor from '@/styles/ChartColor'
import {
  CaptionMdLight,
  LineHeight,
  TextMdBold,
  TextMdRegular,
} from '@/styles/Font'
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
  height: 90px;
  gap: 20px;
  padding: 10px;
  border-radius: 14px;
  background: ${ChartColor.bgGrey};
  border: 1px solid ${ChartColor.borderGrey};
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
  color: ${ChartColor.textGrey};
`
const chartIconStyle = css`
  width: 100%;
  height: auto;
`
const metaDataMarginBottom = css`
  margin-bottom: 7px;
`
const chartThumb = css`
  border-radius: 10px;
`

export const ChartMusicCard = ({
  title,
  position,
  change,
  artist,
  thumb,
}: ChartMusicCardProps) => {
  // 등락 아이콘, 색상 정의부
  let upDownIcon = ''
  let upDownColor = ''
  if (change > 0) {
    upDownIcon = '/images/icon/chart-up-icon.svg'
    upDownColor = ChartColor.isedolPink
  } else if (change < 0) {
    upDownIcon = '/images/icon/chart-down-icon.svg'
    upDownColor = ChartColor.textBlue
  } else {
    upDownIcon = '/images/icon/chart-zero-icon.svg'
    upDownColor = ChartColor.textGrey
  }

  return (
    <li css={[mainContainer, flexRowContainer, flexAlignCenter]}>
      <Image
        css={chartThumb}
        src={thumb}
        alt={`${title} thumbnail`}
        width={70}
        height={70}
      />
      <div css={[flexRowContainer, flexAlignCenter, metadataContainer]}>
        {/* 순위, 등락 */}
        <div css={flexColContainer}>
          <h3 css={[TextMdRegular, LineHeight, metaDataMarginBottom]}>
            {position}
          </h3>
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
              src={upDownIcon}
              alt="chart change icon"
              width={0}
              height={0}
              css={chartIconStyle}
            />
            <span
              css={[
                CaptionMdLight,
                changeFontStyle,
                LineHeight,
                css`
                  color: ${upDownColor};
                `,
              ]}
            >
              {change >= 0 ? change : change.toString().replace('-', '')}
            </span>
          </div>
        </div>
        {/* 제목, 아티스트 */}
        <div css={[flexColContainer, flexAlignStart]}>
          <h3 css={[TextMdBold, LineHeight, metaDataMarginBottom]}>{title}</h3>
          <span css={[CaptionMdLight, artistFontStyle, LineHeight]}>
            {artist}
          </span>
        </div>
      </div>
    </li>
  )
}
