import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'
import { useState } from 'react'

const bgImageStyle = css`
  transition: opacity 0.15s ease-in-out;
  // width: 100%;
  position: absolute;
  object-fit: cover;
`

const ProfileMainBg = () => {
  const { hoverDefault, hoverJururu } = ProfileStore()

  const defaultBgStyle = css`
    opacity: ${hoverDefault ? 1 : 0};
  `
  const jururuBgStyle = css`
    opacity: ${hoverJururu ? 1 : 0};
  `

  return (
    // 배경 이미지 파일 임시로 설정
    <>
      <img
        src="https://lh3.google.com/u/0/d/1FWLVJkXmbIAJmbNosTYaGLVQjBfmf-u9=w1920-h955-iv1"
        alt=""
        css={[defaultBgStyle, bgImageStyle]}
      />
      <img
        src="https://lh3.google.com/u/0/d/1Gnhj37cKvF90nZaH7DforZtxqDTVEGAd=w1920-h955-iv1"
        alt=""
        css={[jururuBgStyle, bgImageStyle]}
      />
    </>
  )
}
export default ProfileMainBg
