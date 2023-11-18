import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'
import profileData from '@/data/profile.json'
import Image from 'next/image'
import ProfileMainMemberSection from './ProfileMainMemberSection'

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
      <Image
        src={profileData.image.mainDefault}
        width={0}
        height={0}
        priority
        alt="no-hover"
        css={[bgImageStyle]}
      />
      {/* 멤버 별 hover시 겹쳐질 이미지 */}
      <Image
        src={profileData.image.mainJrrHover}
        width={0}
        height={0}
        priority
        alt="jrr-hover"
        css={[jrrBgStyle, bgImageStyle]}
      />
      <Image
        src={profileData.image.mainJbgHover}
        width={0}
        height={0}
        priority
        alt="jbg-hover"
        css={[jbgBgStyle, bgImageStyle]}
      />
      <Image
        src={profileData.image.mainViiHover}
        width={0}
        height={0}
        priority
        alt="vii-hover"
        css={[viiBgStyle, bgImageStyle]}
      />
      <Image
        src={profileData.image.mainGsgHover}
        width={0}
        height={0}
        priority
        alt="gsg-hover"
        css={[gsgBgStyle, bgImageStyle]}
      />
      <Image
        src={profileData.image.mainLpaHover}
        width={0}
        height={0}
        priority
        alt="lpa-hover"
        css={[lpaBgStyle, bgImageStyle]}
      />
      <Image
        src={profileData.image.mainIneHover}
        width={0}
        height={0}
        priority
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
          viewBox="0 0 1920 803"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        >
          <image
            href={profileData.image.mainDefault}
            css={css`
              opacity: 0;
            `}
          />
          <ProfileMainMemberSection
            memberIndex={0}
            x={165}
            y={160}
            width={145}
            height={585}
            url="/profile/jururu"
          />
          <ProfileMainMemberSection
            memberIndex={1}
            x={415}
            y={150}
            width={205}
            height={595}
            url="/profile/jingburger"
          />
          <ProfileMainMemberSection
            memberIndex={2}
            x={720}
            y={170}
            width={180}
            height={570}
            url="/profile/viichan"
          />
          <ProfileMainMemberSection
            memberIndex={3}
            x={1030}
            y={195}
            width={170}
            height={550}
            url="/profile/gosegu"
          />
          <ProfileMainMemberSection
            memberIndex={4}
            x={1310}
            y={140}
            width={200}
            height={600}
            url="/profile/lilpa"
          />
          <ProfileMainMemberSection
            memberIndex={5}
            x={1615}
            y={150}
            width={165}
            height={595}
            url="/profile/ine"
          />
        </svg>
      </div>
    </>
  )
}
export default ProfileMainBg
