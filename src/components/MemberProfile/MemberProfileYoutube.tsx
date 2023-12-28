import { css } from '@emotion/react'
import memberProfileData from '@/data/member-profile.json'
import Link from 'next/link'
import Image from 'next/image'
import { CaptionMdRegular } from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { MemberProfileTitle } from './MemberProfileTitle'

const mainContainer = css`
  margin-bottom: 100px;
`
const youtubeContainer = css`
  display: flex;
  gap: 20px;
  height: 214px;
`
const youtubeListItem = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const youtubeListItemText = [
  css`
    color: ${MemberProfileColor.youtubeTitleTextGrey};
  `,
  CaptionMdRegular,
]

export const MemberProfileYoutube = ({
  memberName,
}: {
  memberName: IsedolMember
}) => {
  const memberInformation =
    memberProfileData[memberName]?.memberInformation || {}
  const recentYoutubeVideo = memberProfileData[memberName]?.recentYoutubeVideo
  const memberYoutubeInfo = memberInformation?.socialMedia?.youtube
  return (
    <section css={mainContainer}>
      {/* 제목 */}
      <MemberProfileTitle
        title="Youtube"
        subTitle={`${memberInformation.groupName} ${memberInformation.krName}의 유튜브를 확인해보세요.`}
        ytLink={memberYoutubeInfo?.url}
        ytName={memberYoutubeInfo?.name}
      />
      {/* 영상 */}
      <ul css={youtubeContainer}>
        {recentYoutubeVideo?.map((v) => (
          <li key={v.id}>
            <Link
              css={youtubeListItem}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={v.thumbUrl}
                width={310}
                height={174}
                alt={`${v.title} thumbnail`}
              />
              <span css={youtubeListItemText}>{v.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
