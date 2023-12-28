import { CaptionMdBold, TextMdRegular, TitleLgRegular } from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'
import memberProfileData from '@/data/member-profile.json'
import Image from 'next/image'
import Link from 'next/link'

interface MemberProfileTitleProps {
  title: string
  subTitle: string
  ytLink: string
  ytName: string
}

const titleContainer = css`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding: 58px 0 10.5px;
`
const titleText = [
  css`
    margin-bottom: 12px;
    color: ${MemberProfileColor.youtubeTitleTextGrey};
  `,
  TitleLgRegular,
]
const subTitleText = [
  css`
    color: ${MemberProfileColor.titleTextGrey};
    margin-bottom: 30.5px;
  `,
  TextMdRegular,
]
const ytLinkAnchor = css`
  color: ${MemberProfileColor.youtubeTitleTextGrey};
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 4px;
`
const ytLinkText = [css``, CaptionMdBold]

export const MemberProfileTitle = ({
  title,
  subTitle,
  ytLink,
  ytName,
}: MemberProfileTitleProps) => {
  const { ytIconBlack } = memberProfileData.commonImage
  return (
    <div css={titleContainer}>
      <h1 css={titleText}>{title}</h1>
      <h3 css={subTitleText}>{subTitle}</h3>
      <Link
        css={ytLinkAnchor}
        href={ytLink || ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={ytIconBlack} alt="youtube Icon" width={22} height={16} />
        <span css={ytLinkText}>{ytName}</span>
      </Link>
    </div>
  )
}
