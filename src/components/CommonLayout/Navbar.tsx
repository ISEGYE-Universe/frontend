import { useState } from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
// import { TitleSmRegular } from '@/styles/Font'
import { TextMdBold } from '@/styles/Font'

import SubNav from '@/components/CommonLayout/Navbar/SubNav'

import Image from 'next/image'
import { useRouter } from 'next/router'

// const GNBContainerStyle = css`
//   position: absolute;
//   z-index: 10;
//   top: 0;

//   width: 100%;
//   height: 120px;
//   background-color: #fdfdfd;
//   box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
// `
const GNBContainerStyle = css`
  position: absolute;
  z-index: 99;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #fdfdfd;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`

/**
 * GNB 상단 이세돌 배너 부분
 * @author Ayaan_
 * @since 2023-11-12
 */
// const GNBTopGradient = css`
//   width: 100%;
//   height: 60px;
//   gap: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%);
// `
const GNBTopGradient = css`
  width: 100%;
  height: 50px;
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%);
`

// const GNBTopIsedolText = css`
//   position: relative;
//   z-index: 2;

//   ${TitleSmRegular}
//   ${TextMdBold}
//   color: #fdfdfd;
// `
const GNBTopIsedolText = css`
  position: relative;
  ${TextMdBold}
  color: #fdfdfd;
`

// const GNBTopIsedolTextGap = css`
//   width: 785px;
//   height: 2px;
//   background: #fdfdfd;
// `
const GNBTopIsedolTextGap = css`
  width: 1059px;
  height: 2px;
  background: #fdfdfd;
`

// const GNBTopIsedolLogoWarp = css`
//   position: absolute;
//   z-index: 1;
//   top: 0;

//   width: 100%;
//   height: 120px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `
const GNBTopIsedolLogoWarp = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// const GNBTopIsedolLogo = css`
//   width: 120px;
//   height: 100px;
// `

/**
 * GNB 하단 Navigation 부분
 * @author Ayaan_
 * @since 2023-11-12
 */

// const GNBBottomNavigation = css`
//   width: 100%;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `
const GNBBottomNavigation = css`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// const GNBBottomNavigationArea = css`
//   width: calc(50% - 115px);

//   display: inline-flex;
//   align-items: center;
// `
const GNBBottomNavigationArea = css`
  width: calc(50% - 115px);
  height: 100%;
  display: inline-flex;
  align-items: center;
`

// const GNBBottomNavigationLink = css`
//   position: relative;
//   z-index: 2;

//   display: inline-flex;
//   flex-direction: column;
//   justify-content: center;

//   ${TitleSmRegular}
//   color: #151515;

//   cursor: pointer;

//   &:not(:first-child) {
//     padding-left: 32px;
//   }

//   &:not(:last-child) {
//     padding-right: 32px;
//   }
// `
// const GNBBottomNavigationLink = css`
//   position: relative;
//   z-index: 2;
//   height: 100%
//   display: inline-flex;
//   flex-direction: column;
//   justify-content: center;
//   ${TextMdBold}
//   color: #151515;
//   cursor: pointer;
//   &:not(:first-child) {
//     padding-left: 32px;
//   }
//   &:not(:last-child) {
//     padding-right: 32px;
//   }
// `
const GNBBottomNavigationLink = css`
  position: relative;
  z-index: 2;
  height: 100%
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  ${TextMdBold}
  color: #151515;
  cursor: pointer;
  padding: 0px 32px;
  &:hover > span{
    border-image: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%) 1;
  }
`

// const GNBActiveSubNavController = css`
//   height: 46px;

//   display: inline-flex;
//   flex-direction: column;
//   justify-content: center;

//   border-width: 0 0 1px 0;
//   border-style: solid;

//   border-color: transparent;
// `
const GNBActiveSubNavController = css`
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: transparent;
`
// const GNBActiveSubNavBorder = css`
//   border-image: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%) 1;
// `

// const GNBBottomNavigationActive = css`
//   width: 100%;
//   height: 50px;
// `
const GNBBottomNavigationActive = css`
  width: 100%;
  height: 50px;
  border-top: 1px solid #d9d9d9;
`

const GNBUserProfileIcon = css`
  position: relative;
  z-index: 2;

  margin-left: 150px;
`
const NavHeight = css`
  height: 100%;
`
const Showing = css`
  & > span {
    border-image: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%) 1;
  }
`

const Navbar = () => {
  const [isSubNavActive, setIsSubNavActive] = useState<boolean>(false)
  const [isSubNavActiveByClick, setIsSubNavActiveByClick] =
    useState<boolean>(false)
  const [subNav, setSubNav] = useState<string>('null')

  const activeSubNavigation = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLSpanElement
    const realTarget = target.dataset.page
      ? target
      : (target.parentElement as HTMLButtonElement)

    if (!realTarget || realTarget?.dataset.page === 'null') return

    setIsSubNavActive(true)
  }

  // const inactiveSubNavigation = () => {
  //   if (isSubNavActiveByClick) return
  //   setIsSubNavActive(false)
  // }
  const inactiveSubNavigation = () => {
    if (isSubNavActiveByClick) return
    setIsSubNavActive(false)
    setSubNav('null')
  }

  // const toggleActiveSubNavigationWithClick = (
  //   e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  // ) => {
  //   setIsSubNavActiveByClick(!isSubNavActiveByClick)

  //   activeSubNavigation(e)
  // }

  const setSubNavigation = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLSpanElement
    const realTarget = target.dataset.page
      ? target
      : (target.parentElement as HTMLButtonElement)

    if (!realTarget || realTarget?.dataset.page === 'null') {
      setSubNav('null')
      setIsSubNavActiveByClick(false)
      setIsSubNavActive(false)
      return
    }
    setSubNav('null')
    setIsSubNavActive(true)
    setIsSubNavActiveByClick(false)
    setSubNav(realTarget.dataset.page as string)
  }
  const route = useRouter()

  return (
    // <header
    //   // css={[
    //   //   GNBContainerStyle,
    //   //   isSubNavActive ? css`
    //   //         height: 200px;
    //   //       `
    //   //     : css`
    //   //         height: 120px;
    //   //       `,
    //   // ]}
    //   css={GNBContainerStyle}
    // >
    <header
      // css={[
      //   GNBContainerStyle,
      //   isSubNavActive ? css`
      //         height: 200px;
      //       `
      //     : css`
      //         height: 120px;
      //       `,
      // ]}
      css={GNBContainerStyle}
      onMouseLeave={inactiveSubNavigation}
    >
      {/* <div css={GNBTopIsedolLogoWarp}>
        <Link href="/">
          <Image
            // css={GNBTopIsedolLogo}
            src="/images/logo/isedol.png"
            width={96}
            height={80}
            alt="이세계아이돌 로고"
          />
        </Link>
      </div> */}
      <Link href="/" css={GNBTopIsedolLogoWarp}>
        <Image
          // css={GNBTopIsedolLogo}
          src="/images/logo/isedol.png"
          width={96}
          height={80}
          alt="이세계아이돌 로고"
        />
      </Link>
      <div css={GNBTopGradient} onMouseEnter={inactiveSubNavigation}>
        <span css={GNBTopIsedolText}>차원을 넘어</span>
        <div css={GNBTopIsedolTextGap} />
        <span css={GNBTopIsedolText}>이세계아이돌</span>
      </div>

      <nav css={GNBBottomNavigation}>
        {/* <div
          css={[
            GNBBottomNavigationArea,
            css`
              justify-content: flex-end;
            `,
          ]}
          onMouseEnter={activeSubNavigation}
          onMouseLeave={inactiveSubNavigation}
        > */}
        <div
          css={[
            GNBBottomNavigationArea,
            css`
              justify-content: flex-end;
            `,
          ]}
          onMouseEnter={activeSubNavigation}
        >
          <div css={NavHeight}>
            {/* <button
              type="button"
              css={GNBBottomNavigationLink}
              onClick={toggleActiveSubNavigationWithClick}
              onMouseEnter={setSubNavigation}
              data-page="profile"
            >
              <span
                css={[
                  GNBActiveSubNavController,
                  isSubNavActive && subNav === 'profile'
                    ? GNBActiveSubNavBorder
                    : null,
                ]}
              >
                프로필
              </span>
            </button> */}
            <Link
              href="/profile"
              css={[
                GNBBottomNavigationLink,
                route.asPath.split('/')[1] === 'profile' ? Showing : null,
                subNav === 'profile' ? Showing : null,
              ]}
              onMouseEnter={setSubNavigation}
              data-page="profile"
            >
              <span css={GNBActiveSubNavController}>프로필</span>
            </Link>
            {/* <button
              type="button"
              css={GNBBottomNavigationLink}
              onClick={toggleActiveSubNavigationWithClick}
              onMouseEnter={setSubNavigation}
              data-page="album"
            >
              <span
                css={[
                  GNBActiveSubNavController,
                  isSubNavActive && subNav === 'album'
                    ? GNBActiveSubNavBorder
                    : null,
                ]}
              >
                음반
              </span>
            </button> */}
            <Link
              href={{ pathname: '/albums/detail', query: { default: 0 } }}
              css={[
                GNBBottomNavigationLink,
                route.asPath.split('/')[1] === 'albums' ? Showing : null,
                subNav === 'album' ? Showing : null,
              ]}
              onMouseEnter={setSubNavigation}
              data-page="album"
            >
              <span css={GNBActiveSubNavController}>음반</span>
            </Link>
            {/* <button
              type="button"
              css={GNBBottomNavigationLink}
              onClick={toggleActiveSubNavigationWithClick}
              onMouseEnter={setSubNavigation}
              data-page="news"
            >
              <span
                css={[
                  GNBActiveSubNavController,
                  isSubNavActive && subNav === 'news'
                    ? GNBActiveSubNavBorder
                    : null,
                ]}
              >
                소식
              </span>
            </button> */}
            <Link
              href="/chart"
              css={[
                GNBBottomNavigationLink,
                route.asPath.split('/')[1] === 'chart' ? Showing : null,
                subNav === 'chart' ? Showing : null,
              ]}
              onMouseEnter={setSubNavigation}
              data-page="null"
            >
              <span css={GNBActiveSubNavController}>차트</span>
            </Link>
          </div>
        </div>
        {/* <div
          css={[
            GNBBottomNavigationArea,
            css`
              justify-content: flex-start;
            `,
          ]}
          onMouseEnter={activeSubNavigation}
          onMouseLeave={inactiveSubNavigation}
        > */}
        <div
          css={[
            GNBBottomNavigationArea,
            css`
              justify-content: flex-start;
            `,
          ]}
          onMouseEnter={activeSubNavigation}
        >
          <div css={NavHeight}>
            {/* <button
              type="button"
              css={GNBBottomNavigationLink}
              onClick={toggleActiveSubNavigationWithClick}
              onMouseEnter={setSubNavigation}
              data-page="memberProfile"
            >
              <span
                css={[
                  GNBActiveSubNavController,
                  isSubNavActive && subNav === 'memberProfile'
                    ? GNBActiveSubNavBorder
                    : null,
                ]}
              >
                멤버 프로필
              </span>
            </button> */}
            <Link
              href="/chart"
              css={[
                GNBBottomNavigationLink,
                route.asPath.split('/')[1] === 'memberProfile' ? Showing : null,
                subNav === 'memberProfile' ? Showing : null,
              ]}
              onMouseEnter={setSubNavigation}
              data-page="memberProfile"
            >
              <span css={GNBActiveSubNavController}>활동</span>
            </Link>
            <Link
              href="/bangon"
              css={[
                GNBBottomNavigationLink,
                route.asPath.split('/')[1] === 'bangon' ? Showing : null,
                subNav === 'bangon' ? Showing : null,
              ]}
              onMouseEnter={setSubNavigation}
              data-page="null"
            >
              <span css={GNBActiveSubNavController}>뱅온정보</span>
            </Link>
            {/* <button
              type="button"
              css={GNBBottomNavigationLink}
              onClick={toggleActiveSubNavigationWithClick}
              onMouseEnter={setSubNavigation}
              data-page="entryGuide"
            >
              <span
                css={[
                  GNBActiveSubNavController,
                  isSubNavActive && subNav === 'entryGuide'
                    ? GNBActiveSubNavBorder
                    : null,
                ]}
              >
                유입가이드
              </span>
            </button> */}
            <Link
              href="/chart"
              css={[
                GNBBottomNavigationLink,
                route.asPath.split('/')[1] === 'entryGuide' ? Showing : null,
                subNav === 'entryGuid' ? Showing : null,
              ]}
              onMouseEnter={setSubNavigation}
              data-page="entryGuide"
            >
              <span css={GNBActiveSubNavController}>유입가이드</span>
            </Link>
          </div>
          <Image
            css={GNBUserProfileIcon}
            src="/images/icon/user-profile-icon.svg"
            width={18}
            height={20}
            alt="유저 프로필"
            data-page="null"
          />
        </div>
      </nav>

      <nav
        css={[
          GNBBottomNavigationActive,
          isSubNavActive
            ? css`
                display: block;
              `
            : css`
                display: none;
              `,
        ]}
      >
        <SubNav page={subNav} />
      </nav>
    </header>
  )
}

export default Navbar
