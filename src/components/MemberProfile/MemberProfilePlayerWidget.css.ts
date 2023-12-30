import ChartColor from '@/styles/ChartColor'
import { TextSmBold } from '@/styles/Font'
import { css } from '@emotion/react'

export const widgetContainer = (
  color: string,
  isReady: boolean,
  isHover: boolean,
) => css`
  display: flex;
  background-color: ${ChartColor.textWhite};
  justify-content: center;
  align-items: center;
  position: sticky;
  min-width: 44px;
  height: 44px;
  padding: ${isHover ? '0 12px' : '0 8px'};
  top: calc(100vh - 150px);
  border: 2px solid ${color};
  box-shadow: 1px 1px 6px ${`${color}7d`};
  border-radius: 9999px;
  z-index: 10;

  opacity: ${isReady ? 1 : 0.3};
  ${!isReady ? `pointer-events: none;` : ``}
  transition: opacity 0.2s, padding 0.2s;
`

export const widgetIconContainer = css`
  display: flex;
  align-items: center;
  transition: gap 0.5s;
`

export const widgetIconWrapper = css`
  display: flex;
  align-items: center;
  width: 24px;
  height: 100%;
`

export const widgetText = (color: string) => [
  TextSmBold,
  css`
    color: ${color};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
]
