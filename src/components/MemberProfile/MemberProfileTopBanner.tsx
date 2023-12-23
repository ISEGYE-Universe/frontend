import memberProfileData from '@/data/member-profile.json'
import Image from 'next/image'

import Link from 'next/link'
import {
  birthDateText,
  flexCol,
  groupNameText,
  layoutContainer,
  memberInformationContainer,
  memberInformationProfileContainer,
  memberNameText,
  profileImageStyle,
  socialMediaContainer,
  socialMediaIconStyle,
  socialMediaLinkStyle,
  socialMediaTextStyle,
  topBannerContainer,
} from './MemberProfileTopBanner.css'
import { fullWidthContainer } from './MemberProfile.css'

interface MemberProfileTopBannerProp {
  memberName: IsedolMember
}

export const MemberProfileTopBanner = (prop: MemberProfileTopBannerProp) => {
  const { memberName } = prop

  const { twIcon, ytIcon } = memberProfileData.commonImage
  const topBannerImage = memberProfileData[memberName]?.topBannerImage
  // Cannot destructure property as it is undefined 오류 방지를 위해 빈 객체 할당

  const { profileImage, krName, enName, groupName, birthDate, socialMedia } =
    memberProfileData[memberName]?.memberInformation || {}
  const twInfo = socialMedia?.twitch
  const ytInfo = socialMedia?.youtube

  return (
    <section css={[fullWidthContainer, topBannerContainer(topBannerImage)]}>
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
              <Link
                href={twInfo.url}
                css={socialMediaLinkStyle}
                target="_blank"
              >
                <Image
                  src={twIcon}
                  alt="twitch icon"
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
