import { css } from '@emotion/react'

export const outerContainer = css`
  width: 100%;
  height: calc(100vh - 100px);
`
export const slideImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`
export const navButtonStyle = css`
  position: absolute;
  width: 26px;
  height: 46px;
  top: 44%;
  transform: translateY(-50%);
  cursor: pointer;
`
export const navButtonPrevStyle = css`
  left: 130px;
`
export const navButtonNextStyle = css`
  right: 130px;
`
export const navButtonIconStyle = css`
  width: auto;
  height: auto;
  padding: 10px 20px;
  opacity: 0.4;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`
export const emblaStyle = css`
  position: relative;
  overflow: hidden;
`
export const emblaContainerStyle = css`
  display: flex;
  width: 100%;
  height: 100%;
`
export const emblaSlideStyle = (index: number) => css`
  flex: 0 0 auto;
  top: 0;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s;
  position: absolute;
  transform: none !important;
  // 정확히 동일한 위치에 존재하면 하나의 슬라이드로 인식되어 추가한 workaround
  left: -${index / 10}px;
  width: calc(100% + ${index / 10}px);
  &.is-snapped {
    opacity: 1;
  }
`
export const fullHeight = css`
  height: 100%;
`
export const memberGalleryBackground = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  opacity: 0.9;
`
