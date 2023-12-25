import ChartColor from '@/styles/ChartColor'
import { CaptionMdLight, LineHeight, TextSmBold } from '@/styles/Font'
import { css } from '@emotion/react'

const fontFamily = 'Noto Sans CJK KR'

export const top100ChartContainer = css`
  .axis-line .visx-line {
    display: none;
  }

  .axis-tick text {
    font-family: ${fontFamily};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 13.2px */
    letter-spacing: -0.36px;
    fill: ${ChartColor.chartFontGrey};
  }

  // annotation
  .visx-annotationlabel {
    transition: all 0.2s ease;
    foreignObject {
      width: 70px;
    }
    line {
      display: none;
    }
  }

  .visx-annotationlabel-background {
    fill: ${ChartColor.isedolPink};
    fill-opacity: 1;
    text-align: center;
    pointer-events: none;
    padding: 8px 12px;
    rx: 8px;
    ry: 8px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    &::after {
      background-color: ${ChartColor.isedolPink};
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      transform: rotate(45deg) translateY(-50%);
      top: 50%;
      right: 0px;
    }
  }
`

export const tooltipOuterContainer = (openTooltip: boolean) => css`
  position: absolute;
  background: none;
  pointer-events: none;
  opacity: ${openTooltip ? 1 : 0};
  transition: opacity 0.3s ease;
`

export const tooltipContainer = (annotationOpen: boolean) => css`
  opacity: ${annotationOpen ? 1 : 0};
  background-color: ${ChartColor.isedolPink};
  text-align: center;
  pointer-events: none;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
  &::after {
    background-color: ${ChartColor.isedolPink};
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg) translateY(-50%);
    top: 50%;
    right: 0px;
  }
`

export const tooltipTimeText = [
  CaptionMdLight,
  LineHeight,
  css`
    color: rgba(255, 255, 255, 0.5);
  `,
]

export const tooltipRankText = [
  TextSmBold,
  LineHeight,

  css`
    color: ${ChartColor.textWhite};
  `,
]
