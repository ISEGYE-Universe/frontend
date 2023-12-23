import ChartColor from '@/styles/ChartColor'
import { css } from '@emotion/react'

export const widgetContainer = (color: string) => css`
  display: flex;
  background-color: ${ChartColor.textWhite};
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 44px;
  height: 44px;
  top: calc(100vh - 150px);
  border: 2px solid ${color};
  border-radius: 9999px;
  z-index: 10;
`
