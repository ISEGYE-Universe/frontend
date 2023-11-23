import { useEffect } from 'react'
import { css } from '@emotion/react'
import memberProfileData from '@/data/member-profile.json'
import Image from 'next/image'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { LineHeight, TextSmLight, TitleSmBold } from '@/styles/Font'

interface MemberProfileTopBannerProp {
  memberName: IsedolMember
}

const layoutContainer = css`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`
const memberInformationContainer = css`
  width: 100%;
`
const memberInformationProfileContainer = css`
  gap: 20px;
`
const profileImageStyle = css`
  border-radius: 80px;
`
const socialMediaContainer = css`
  min-width: 152px;
  min-height: 80px;
  border-radius: 20px;
  background: rgba(37, 37, 37, 0.3);
  margin-right: 68px;
`
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

const MemberProfileTopBanner = (prop: MemberProfileTopBannerProp) => {
  const { memberName } = prop

  // Cannot destructure property as it is undefined 오류 방지를 위해 빈 객체 할당
  const memberInformation =
    memberProfileData[memberName]?.memberInformation || {}
  const { profileImage, krName, enName, groupName, birthDate, twLink, ytLink } =
    memberInformation

  const topBannerContainer = css`
    height: 388px;
    background-repeat: no-repeat;
    background-position: center top;
    margin-bottom: 32px;
  `

  return (
    <section
      css={[
        css`
          background: url('${memberProfileData[memberName]?.topBannerImage}');
        `,
        topBannerContainer,
      ]}
    >
      <div css={[layoutContainer, flexRow, alignFlexEnd]}>
        {/* 멤버 기본 정보 영역 */}
        <div
          css={[
            memberInformationContainer,
            justifySpaceBetween,
            flexRow,
            alignCenter,
          ]}
        >
          <div css={[memberInformationProfileContainer, flexRow, alignCenter]}>
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
          <div css={socialMediaContainer} />
        </div>
      </div>
    </section>
  )
}

export default MemberProfileTopBanner
