import { css } from '@emotion/react'
import memberProfileData from '@/data/member-profile.json'
import Image from 'next/image'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import {
  CaptionMdBold,
  LineHeight,
  TextSmLight,
  TitleSmBold,
} from '@/styles/Font'
import Link from 'next/link'

interface MemberProfileTopBannerProp {
  memberName: IsedolMember
}

const flexRow = css`
  display: flex;
  flex-direction: row;
`
const flexCol = css`
  display: flex;
  flex-direction: column;
`
const justifySpaceBetween = css`
  justify-content: space-between;
`
const alignCenter = css`
  align-items: center;
`
const alignFlexEnd = css`
  align-items: flex-end;
`
const textWhite = css`
  color: ${MemberProfileColor.textWhite};
`
const layoutContainer = [
  flexRow,
  alignFlexEnd,
  css`
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  `,
]
const memberInformationContainer = [
  justifySpaceBetween,
  flexRow,
  alignCenter,
  css`
    width: 100%;
  `,
]
const memberInformationProfileContainer = [
  flexRow,
  alignCenter,
  css`
    gap: 20px;
  `,
]
const profileImageStyle = css`
  border-radius: 80px;
`
const memberNameText = [
  TitleSmBold,
  textWhite,
  LineHeight,
  css`
    margin-bottom: 8px;
  `,
]
const groupNameText = [
  TextSmLight,
  LineHeight,
  textWhite,
  css`
    margin-bottom: 16px;
  `,
]
const birthDateText = [TextSmLight, LineHeight, textWhite]
const socialMediaContainer = [
  flexCol,
  css`
    min-width: 152px;
    min-height: 80px;
    padding: 14px 20px;
    border-radius: 20px;
    background: rgba(37, 37, 37, 0.3);
    margin-right: 68px;
    gap: 12px;
  `,
]
const socialMediaIconStyle = css`
  margin-right: 8px;
  // anchor 태그와 크기 맞춰주기 위함
  vertical-align: bottom;
`
const socialMediaLinkStyle = [flexRow, alignCenter]
const socialMediaTextStyle = [textWhite, LineHeight, CaptionMdBold]

const MemberProfileTopBanner = (prop: MemberProfileTopBannerProp) => {
  const { memberName } = prop

  const { twIcon, ytIcon } = memberProfileData.commonImage
  const topBannerImage = memberProfileData[memberName]?.topBannerImage
  // Cannot destructure property as it is undefined 오류 방지를 위해 빈 객체 할당

  const { profileImage, krName, enName, groupName, birthDate, socialMedia } =
    memberProfileData[memberName]?.memberInformation || {}
  const twInfo = socialMedia?.twitter
  const ytInfo = socialMedia?.youtube

  const topBannerContainer = css`
    background: url('${topBannerImage}');
    height: 388px;
    background-repeat: no-repeat;
    background-position: center top;
    margin-bottom: 32px;
  `

  return (
    <section css={topBannerContainer}>
      <div css={layoutContainer}>
        {/* 멤버 기본 정보 영역 */}
        <div css={memberInformationContainer}>
          <div css={memberInformationProfileContainer}>
            <Image
              src={profileImage}
              css={profileImageStyle}
              width={160}
              height={160}
              alt={`${memberName} profile image`}
            />
            <div css={flexCol}>
              <h3 css={memberNameText}>
                {krName} ( {enName} )
              </h3>
              <span css={groupNameText}>{groupName}</span>
              <span css={birthDateText}>{birthDate}</span>
            </div>
          </div>
          {/* 트위치 유튜브 링크 영역 */}
          <div css={socialMediaContainer}>
            {twInfo && (
              <Link href={twInfo.url} css={socialMediaLinkStyle}>
                <Image
                  src={twIcon}
                  alt="twitter icon"
                  css={socialMediaIconStyle}
                  width={22}
                  height={24}
                />
                <span css={socialMediaTextStyle}>{twInfo.name}</span>
              </Link>
            )}
            {ytInfo && (
              <Link
                href={ytInfo.url}
                css={socialMediaLinkStyle}
                target="_blank"
              >
                <Image
                  src={ytIcon}
                  alt="youtube icon"
                  css={socialMediaIconStyle}
                  width={22}
                  height={16}
                />
                <span css={socialMediaTextStyle}>{ytInfo.name}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberProfileTopBanner
