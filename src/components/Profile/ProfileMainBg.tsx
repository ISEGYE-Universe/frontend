import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'
import { useState } from 'react'

const HOVEROPACITY = 0.5

const bgImageStyle = css`
  transition: opacity 0.15s ease-in-out;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`

const ProfileMainBg = () => {
  const {
    hoverDefault,
    setHoverDefault,
    switchHoverMember,
    setSwitchHoverMember,
  } = ProfileStore()

  const defaultBgStyle = css`
    opacity: ${hoverDefault ? 1 : HOVEROPACITY};
  `
  // 멤버 별 hover 이미지 작업 중, 임시로 퍼스널 컬러 대체
  const jrrBgStyle = css`
    opacity: ${switchHoverMember[0] ? HOVEROPACITY : 0};
    background-color: #ff008c;
  `
  const jbgBgStyle = css`
    opacity: ${switchHoverMember[1] ? HOVEROPACITY : 0};
    background-color: #f0a957;
  `
  const viiBgStyle = css`
    opacity: ${switchHoverMember[2] ? HOVEROPACITY : 0};
    background-color: #95c100;
  `
  const gsgBgStyle = css`
    opacity: ${switchHoverMember[3] ? HOVEROPACITY : 0};
    background-color: #467ec6;
  `
  const lpaBgStyle = css`
    opacity: ${switchHoverMember[4] ? HOVEROPACITY : 0};
    background-color: #443965;
  `
  const ineBgStyle = css`
    opacity: ${switchHoverMember[5] ? HOVEROPACITY : 0};
    background-color: #8a2be2;
  `

  return (
    // 배경 이미지 파일 임시로 설정
    <>
      <img
        src="https://lh3.google.com/u/0/d/1FWLVJkXmbIAJmbNosTYaGLVQjBfmf-u9=w1920-h955-iv1"
        alt=""
        css={[defaultBgStyle, bgImageStyle]}
      />
      <img src="" alt="" css={[jrrBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[jbgBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[viiBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[gsgBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[lpaBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[ineBgStyle, bgImageStyle]} />
    </>
  )
}
export default ProfileMainBg
