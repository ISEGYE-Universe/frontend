import ChartColor from '@/styles/ChartColor'
import { css } from '@emotion/react'

export const widgetContainer = (color: string, isReady: boolean) => css`
  display: flex;
  background-color: ${ChartColor.textWhite};
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 44px;
  height: 44px;
  top: calc(100vh - 150px);
  border: 2px solid ${color};
  box-shadow: 1px 1px 6px rgba(255, 108, 153, 0.7);
  border-radius: 9999px;
  z-index: 10;

  opacity: ${isReady ? 1 : 0.3};
  ${!isReady ? `pointer-events: none;` : ``}
  transition: opacity 0.2s ease;
`
