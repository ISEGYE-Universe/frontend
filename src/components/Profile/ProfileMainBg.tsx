import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'
import { useState } from 'react'
import ProfileMainMemberSection from './ProfileMainMemberSection'
import profileData from '@/data/profile.json'

const bgImageStyle = css`
  // transition: opacity 0.15s ease-in-out;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`

/**
 * @멤버소개 메인 페이지 뒷배경
 * @author 민타이
 */
const ProfileMainBg = () => {
  const { hoverDefault, switchHoverMember } = ProfileStore()

  const defaultBgStyle = css`
    opacity: ${hoverDefault ? 1 : 0};
    // transition: opacity 0.15s ease-in-out;
  `
  // 멤버 별 hover 이미지 작업 중, 임시로 퍼스널 컬러 대체
  const jrrBgStyle = css`
    opacity: ${switchHoverMember[0] ? 1 : 0};
  `
  const jbgBgStyle = css`
    opacity: ${switchHoverMember[1] ? 1 : 0};
  `
  const viiBgStyle = css`
    opacity: ${switchHoverMember[2] ? 1 : 0};
  `
  const gsgBgStyle = css`
    opacity: ${switchHoverMember[3] ? 1 : 0};
  `
  const lpaBgStyle = css`
    opacity: ${switchHoverMember[4] ? 1 : 0};
  `
  const ineBgStyle = css`
    opacity: ${switchHoverMember[5] ? 1 : 0};
  `

  return (
    <>
      {/* 멤버 별 hover시 겹쳐질 이미지 */}
      <img
        src={profileData.image.mainJrrHover}
        alt="jrr-hover"
        css={[jrrBgStyle, bgImageStyle]}
      />
      <img
        src={profileData.image.mainJbgHover}
        alt="jbg-hover"
        css={[jbgBgStyle, bgImageStyle]}
      />
      <img
        src={profileData.image.mainViiHover}
        alt="vii-hover"
        css={[viiBgStyle, bgImageStyle]}
      />
      <img
        src={profileData.image.mainGsgHover}
        alt="gsg-hover"
        css={[gsgBgStyle, bgImageStyle]}
      />
      <img
        src={profileData.image.mainLpaHover}
        alt="lpa-hover"
        css={[lpaBgStyle, bgImageStyle]}
      />
      <img
        src={profileData.image.mainIneHover}
        alt="ine-hover"
        css={[ineBgStyle, bgImageStyle]}
      />

      <div
        css={css`
          width: 100%;
          height: 100%;
          position: absolute;
          overflow-y: hidden;
        `}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1834 955"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        >
          <image
            href={profileData.image.mainDefault}
            css={[defaultBgStyle]}
          ></image>
          <ProfileMainMemberSection
            memberIndex={0}
            x={35}
            y={40}
            width={215}
            height={875}
            url="/profile/jururu"
          />
          <ProfileMainMemberSection
            memberIndex={1}
            x={310}
            y={35}
            width={285}
            height={880}
            url="/profile/jingburger"
          />
          <ProfileMainMemberSection
            memberIndex={2}
            x={655}
            y={70}
            width={250}
            height={845}
            url="/profile/viichan"
          />
          <ProfileMainMemberSection
            memberIndex={3}
            x={970}
            y={110}
            width={245}
            height={810}
            url="/profile/gosegu"
          />
          <ProfileMainMemberSection
            memberIndex={4}
            x={1240}
            y={20}
            width={287}
            height={895}
            url="/profile/lilpa"
          />
          <ProfileMainMemberSection
            memberIndex={5}
            x={1570}
            y={35}
            width={220}
            height={880}
            url="/profile/ine"
          />
        </svg>
      </div>
    </>
  )
}
export default ProfileMainBg
