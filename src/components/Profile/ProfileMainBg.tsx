import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'
import ProfileMainMemberSection from './ProfileMainMemberSection'
import profileData from '@/data/profile.json'

const bgImageStyle = css`
  transition: opacity 0.15s ease-in-out;
  width: 100%;
  height: calc(100% - 120px);
  position: absolute;
  object-fit: cover;
`

/**
 * @멤버소개 메인 페이지 뒷배경
 * @author 민타이
 */
const ProfileMainBg = () => {
  const { switchHoverMember } = ProfileStore()

  // 멤버 별 hover 이미지 스타일
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
      <img
        src={profileData.image.mainDefault}
        alt="no-hover"
        css={[bgImageStyle]}
      />
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
          height: calc(100% - 120px);
          position: absolute;
          overflow-y: hidden;
          // 마우스 오버 섹션이 소개글 박스에 가리는 문제
          z-index: 1;
        `}
      >
        {/* svg 이용하여 마우스 오버 섹션 반응형 구현 */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 1920 880"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        >
          <image
            href={profileData.image.mainDefault}
            css={css`
              opacity: 0;
            `}
          ></image>
          <ProfileMainMemberSection
            memberIndex={0}
            x={50}
            y={60}
            width={215}
            height={890}
            url="/profile/jururu"
          />
          <ProfileMainMemberSection
            memberIndex={1}
            x={335}
            y={45}
            width={285}
            height={905}
            url="/profile/jingburger"
          />
          <ProfileMainMemberSection
            memberIndex={2}
            x={695}
            y={80}
            width={250}
            height={870}
            url="/profile/viichan"
          />
          <ProfileMainMemberSection
            memberIndex={3}
            x={1010}
            y={120}
            width={245}
            height={835}
            url="/profile/gosegu"
          />
          <ProfileMainMemberSection
            memberIndex={4}
            x={1300}
            y={35}
            width={287}
            height={910}
            url="/profile/lilpa"
          />
          <ProfileMainMemberSection
            memberIndex={5}
            x={1630}
            y={60}
            width={220}
            height={890}
            url="/profile/ine"
          />
        </svg>
      </div>
    </>
  )
}
export default ProfileMainBg
