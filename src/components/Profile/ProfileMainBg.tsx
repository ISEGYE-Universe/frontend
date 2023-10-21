import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'
import { useState } from 'react'
import ProfileMainMemberSection from './ProfileMainMemberSection'

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
    transition: opacity 0.15s ease-in-out;
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
      {/* <img
        src="https://lh3.google.com/u/0/d/1FWLVJkXmbIAJmbNosTYaGLVQjBfmf-u9=w1920-h955-iv1"
        alt=""
        css={[defaultBgStyle, bgImageStyle]}
      /> */}
      <img src="" alt="" css={[jrrBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[jbgBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[viiBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[gsgBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[lpaBgStyle, bgImageStyle]} />
      <img src="" alt="" css={[ineBgStyle, bgImageStyle]} />

      <div
        css={css`
          display: flex;
          width: 100%;
          height: 100%;
          position: absolute;
        `}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          width="100%"
          preserveAspectRatio="xMinYMin slice"
        >
          <image
            width="100%"
            href="https://lh3.googleusercontent.com/fife/AK0iWDwdC8rWe9gU8V1mRRKGxzFh96kSlLDgCf_OuaRNGzpn98bQwgizUOUUb9H9divRQGK1j4G603PWViaW7B5U7ssQrdFFaDMdLeS9P-YQaebheuWKPvI5yFkd389iCE621GKjldv6FLM0V-ikOGUOODb6YSWG1hIcis9n-GVQ0rGzng6OOJz4N2m7ZZtEOK7gwTZ1YBkA5NCH95GhcCxCzhIVQb0AsdgiZeuKdsj2z6Blmf5H_HewnJNBaLT8dx8s8SlopMXDWVU_Cwd7bpwp1MTvqtHgMW9x9_kkNer_C32189LEmH7pxJldwAhrghb6iAQDZICHH5Si0hvU7lkkZhCGwNQyPXaxUxsSKW5KLPxus5CP7B2Ztx5XSvLxj-k0W6ufFhBVaX8SxBN2bEcACCbEev-6wFRsoKyktOHzum04aUo8P6QxfH_rKi-pbWOBgBkPyvWvL47E9SQlBsy5CDMLJLu3VUJE99OqOZXUJwvscC9TeNn3T5DI1VnO_FjgD_8ndt9pXrh09lAsMuesCXWBnIvqFVOSYQokrJPZXY1eCC4jvHYlUu33o5NyHGG9nlg1dg8Ret5k1vmbiK1coAgnR66Zz_GF_yddqjB2p1eV-ehrlm9uyXI2hVNCVxsSEtbDrMee2h2zcMfiiLuBijAKPd5ZahgnfNcPI71DOBXRmaiKGE7D1c3Ixg5ny8-dfDbmokZD2QzWNa-XHERzL3dGh_7L3dEFcI1MNCGga1Nr_FtOhRK4wAljavsUPWYaUJxUmJEyr2y6VdkAHdEPPCIeeCsn9y3EXx-UcYyFepHoKb7wX-xTdbbgSHgIEOuMw2HbZk5_Phqlw8J4Fb_8Bjllt4odHBgwOcJOt_MBk7bN3xsb5yRGQgzWh2GP-5TGwYL7u6lKP-ypn-JYXCuqVidiLfQMvwrzJPDKgmYLbySYTIc1aWRDx2t1qS41idUdhE6NDL4aRk6zRublKTSZnLPwqEVeerzzvHDFESNdyX3jZ73YyJQAfQcvVxsobX2uXnJRIpBOYNuYrsAH8CkDouB1mEiUnY0jpqd8KJ3RbMoEDMC2ntCkP6pl293fiWHZ0XvQ_Y8EMjxxL1eviQVbMtK0c0zI0kwNDuh3gnRO2MZVkl0HKjxmjiVP-qe21TeBA_A3XCr2xFXdTG4heuHnytWg_NbjCttr3JQl1NvSfp_t0HzCfnf0GFPhZfhYsR8awvRjCPgQxct0_vNnUl2Sg6DqS1fvefVpZHyS95jPwcXwR6_zDdZseV7KMJQohKweEP43XucHRYaOwr9SiO1MX7yM4Je9YUjXx5E_uCh7JIOar2YoYs6tQV_WpAK-yMHqkTESvDhZkGC8AwN4cqKjwUpcffxfgBDKk8TuY_HE5Af7Dhd05yAuMfBWK9dMJMj2wldbd8mP2edOZ3VFTkuLdj11jYLNh6z-YmpBhAF4ZA8Bv5QwV4_rGFQpx0S9cjnqB32DEjfBs2H2MBVr2U9azbzgIE6wNPGY04Wr2n3i1FeYmlpz8ebxy0OkGFAL6nYC2hRaY9luYiDJso4-kopBx-aAI1cRq92aQUrDtklCtGKK4az3gzDrZLB7vVp0r8oQyvzPFP3okZ0aozO1LyWb=w1920-h955"
            css={[defaultBgStyle]}
          ></image>
          <ProfileMainMemberSection
            memberIndex={0}
            x={33}
            y={40}
            width={214}
            height={907}
          />
          <ProfileMainMemberSection
            memberIndex={1}
            x={320}
            y={37}
            width={297}
            height={915}
          />
          <ProfileMainMemberSection
            memberIndex={2}
            x={693}
            y={71}
            width={240}
            height={880}
          />
          <ProfileMainMemberSection
            memberIndex={3}
            x={1011}
            y={111}
            width={253}
            height={842}
          />
          <ProfileMainMemberSection
            memberIndex={4}
            x={1303}
            y={19}
            width={287}
            height={931}
          />
          <ProfileMainMemberSection
            memberIndex={5}
            x={1647}
            y={48}
            width={224}
            height={896}
          />
        </svg>
      </div>
    </>
  )
}
export default ProfileMainBg
