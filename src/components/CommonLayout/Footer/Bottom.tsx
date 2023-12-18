import { CaptionMdBold } from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'
import { ModalStore } from '@/store/Footer/FooterStore'
import { CreatorModal } from './CreatorModal'

const LocSection = css`
  margin-top: 30px;
  text-align: center;
`
const FontWhite = css`
  color: #fdfdfd;
`
const hrStyle = css`
  height: 1px;
  margin-top: 30px;
`
const inquiry = css`
  top: 17px;
  left: 150px;
  position: absolute;
`
const LogoStyle = css`
  position: absolute;
  top: 12px;
  left: 1203px;
`
const TeamStyle = css`
  position: absolute;
  top: 17px;
  left: 1253px;
`
const CopyStyle = css`
  position: absolute;
  top: 17px;
  left: 1379px;
`
const InfoStyle = css`
  position: relative;
`

export const Location = () => {
  return (
    <section css={LocSection}>
      <p css={[CaptionMdBold, FontWhite]}>
        인천광역시 송도 왁엔터로 7-24길(왁엔터테인먼트 사옥 18층 이세계 아이돌
        웹사이트 개발부서) &middot; 대표이사 우왁굳
      </p>
      <hr css={hrStyle} />
    </section>
  )
}

export const InfoSection = () => {
  const { modalDefault, setState } = ModalStore()

  return (
    <section css={InfoStyle}>
      <p css={[inquiry, CaptionMdBold, FontWhite]}>제휴문의: </p>
      <button type="button" css={LogoStyle}>
        <Image
          src="/images/logo/isguni_logo.png"
          alt="isg logo"
          width={40}
          height={30}
          onClick={() =>
            modalDefault === true ? setState(false) : setState(true)
          }
        />
      </button>
      <span css={[TeamStyle, CaptionMdBold, FontWhite]}>ISEGYE Universe</span>
      <p css={[CopyStyle, CaptionMdBold, FontWhite]}>
        Copyright &copy; 2024. ISEGYE Universe | WAK Entertainment All Rights
        Reserved.
      </p>
      <CreatorModal />
    </section>
  )
}
