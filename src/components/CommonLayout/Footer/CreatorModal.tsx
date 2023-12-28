import Image from 'next/image'
import { css } from '@emotion/react'
import {
  CaptionMdBold,
  TitleSmRegular,
  TextMdRegular,
  TextMdLight,
} from '@/styles/Font'
import { ModalStore } from '@/store/Footer/FooterStore'
import { useEffect } from 'react'

const TopStyle = css`
  margin-top: 40px;
  height: 30px;
  position: relative;
`
const LogoText = css`
  margin-left: 10px;
  top: 8.5px;
  position: absolute;
`
const DirectorStyle = css`
  margin: 24px 0px 0px 497px;
  text-align: center;
  width: 85px;
  height: 54px;
`
const TeamGridStyle = css`
  width: 774px;
  height: 218px;
  margin: 30px 0px 0px 152px;
  display: grid;
  grid-template-columns: repeat(6, auto);
  column-gap: 79px;
`
const MemberMarginFT = css`
  margin-top: 8px;
`
const GridStyle = css`
  text-align: center;
`
const OtherStyle = css`
  margin-top: 60px;
  text-align: center;
`

const LogoStyle = css`
  margin-left: 472px;
`
const CloseBtn = css`
  font-size: 40px;
  margin-left: 485px;
  top: -19px;
  position: absolute;
`

export const CreatorModal = () => {
  const { modalDefault, setState } = ModalStore()

  const modalStyle = css`
    opacity: ${modalDefault ? 1 : 0};
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: #fafafa;
    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.2);
    width: 1080px;
    height: 534px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    visibility: ${modalDefault ? 'visible' : 'hidden'};
    // opacity 트랜지션을 위한 visibility 트랜지션 딜레이 부여
    transition: opacity 0.3s ease-out ${!modalDefault && ', visibility 0s 0.3s'};
  `
  const LayerStyle = css`
    display: ${modalDefault ? 'block' : 'none'};
    height: 100vh;
    width: 100vw;
    z-index: 98;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    opacity: 0.5;
  `

  const preventScroll = () => {
    const currentScrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${currentScrollY}px` // 현재 스크롤 위치
    document.body.style.overflowY = 'scroll'
    document.documentElement.style.scrollBehavior = 'auto'
    return currentScrollY
  }

  const allowScroll = (prevScrollY: number) => {
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.top = ''
    document.body.style.overflowY = ''
    window.scrollTo(0, prevScrollY)
  }

  useEffect(() => {
    if (modalDefault) {
      const prevScrollY = preventScroll()
      return () => {
        allowScroll(prevScrollY)
      }
    }
    return () => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [modalDefault])

  return (
    <>
      <div
        onClick={() =>
          modalDefault === true ? setState(false) : setState(true)
        }
        role="presentation"
        css={LayerStyle}
      />
      <section css={modalStyle}>
        <div css={TopStyle}>
          <Image
            src="/images/logo/isguni_logo.png"
            alt="isg logo"
            width={40}
            height={30}
            css={LogoStyle}
          />
          <span css={[CaptionMdBold, LogoText]}>ISEGYE Universe</span>
          <button type="button" css={CloseBtn} onClick={() => setState(false)}>
            &times;
          </button>
        </div>
        <div css={DirectorStyle}>
          <p css={TitleSmRegular}>Director</p>
          <p css={TextMdRegular}>ENTO</p>
        </div>
        <div css={TeamGridStyle}>
          <div css={GridStyle}>
            <p css={TitleSmRegular}>PM</p>
            <p css={[TextMdLight, MemberMarginFT]}>elpizo</p>
          </div>
          <div css={GridStyle}>
            <p css={TitleSmRegular}>UI/UX</p>
            <p css={[TextMdLight, MemberMarginFT]}>Pading</p>
            <p css={[TextMdLight, MemberMarginFT]}>Zl안</p>
            <p css={[TextMdLight, MemberMarginFT]}>절임배추</p>
            <p css={[TextMdLight, MemberMarginFT]}>디롬</p>
          </div>
          <div css={GridStyle}>
            <p css={TitleSmRegular}>FE</p>
            <p css={[TextMdLight, MemberMarginFT]}>Justiceserv</p>
            <p css={[TextMdLight, MemberMarginFT]}>민타이</p>
            <p css={[TextMdLight, MemberMarginFT]}>stripy</p>
            <p css={[TextMdLight, MemberMarginFT]}>Ayaan</p>
            <p css={[TextMdLight, MemberMarginFT]}>김지훈</p>
            <p css={[TextMdLight, MemberMarginFT]}>Heo0</p>
          </div>
          <div css={GridStyle}>
            <p css={TitleSmRegular}>BE</p>
            <p css={[TextMdLight, MemberMarginFT]}>하두바</p>
            <p css={[TextMdLight, MemberMarginFT]}>뎃홈</p>
            <p css={[TextMdLight, MemberMarginFT]}>코코아</p>
          </div>
          <div css={GridStyle}>
            <p css={TitleSmRegular}>DATA</p>
            <p css={[TextMdLight, MemberMarginFT]}>미식이</p>
            <p css={[TextMdLight, MemberMarginFT]}>캥거</p>
          </div>
          <div css={GridStyle}>
            <p css={TitleSmRegular}>OPERATE</p>
            <p css={[TextMdLight, MemberMarginFT]}>누리달열흘</p>
            <p css={[TextMdLight, MemberMarginFT]}>애애</p>
            <p css={[TextMdLight, MemberMarginFT]}>단이비</p>
            <p css={[TextMdLight, MemberMarginFT]}>윤이나</p>
          </div>
        </div>
        <div css={OtherStyle}>
          <p css={TitleSmRegular}>이외 도움을 주신 많은 분들</p>
        </div>
      </section>
    </>
  )
}
