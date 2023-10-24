import ProfileIntroductionBox from '@/components/Profile/ProfileIntroductionBox'
import { css } from '@emotion/react'
import { useState } from 'react'
import profileData from '@/data/profile.json'

interface MemberIntroduction {
  mainTitle: string
  description: Profile.IntroductionDescription[]
  socialLink: Profile.SocialLink
  galleryImageURL: string[]
}

interface ProfileMemberDetailProps {
  data: MemberIntroduction
}

const slideImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.3s ease;
`

const iconStyle = css`
  padding: 10px 20px;
`

const ProfileMemberDetail = ({ data }: ProfileMemberDetailProps) => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const galleryLen = profileData.jingburgerIntroduction.galleryImageURL.length
  const navButtonStyle = css`
    position: absolute;
    top: 41%;
    transform: translateY(-50%);
    cursor: pointer;
  `

  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
      `}
    >
      {/* 이미지 슬라이더 */}
      {data.galleryImageURL.map((img, i) => (
        <img
          src={img}
          alt={`gallery-${i + 1}`}
          key={`gallery-${i}`}
          css={[
            slideImageStyle,
            css`
              opacity: ${pageIndex === i ? 1 : 0};
            `,
          ]}
        />
      ))}

      {/* background */}
      <a href="/profile">
        <img
          src={profileData.image.memberGalleryBg}
          alt=""
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            opacity: 0.9;
          `}
        />
      </a>

      {/* 좌우 버튼 */}
      <button
        css={[
          navButtonStyle,
          css`
            left: 130px;
          `,
        ]}
        onClick={() => {
          if (pageIndex === 0) {
            setPageIndex(galleryLen - 1)
          } else {
            setPageIndex(pageIndex - 1)
          }
        }}
      >
        <img src="/image/icon/left-chevron.svg" css={iconStyle}></img>
      </button>
      <button
        css={[
          navButtonStyle,
          css`
            right: 130px;
          `,
        ]}
        onClick={() => {
          if (pageIndex === galleryLen - 1) {
            setPageIndex(0)
          } else {
            setPageIndex(pageIndex + 1)
          }
        }}
      >
        <img src="/image/icon/right-chevron.svg" css={iconStyle}></img>
      </button>

      {/* 소개 */}
      <ProfileIntroductionBox
        mainTitle={data.mainTitle}
        isShowSns
        ytLink={data.socialLink.ytLink}
        igLink={data.socialLink.igLink}
        twLink={data.socialLink.twLink}
        description={data.description}
        margin={'0 0 168px 150px'}
      ></ProfileIntroductionBox>
    </div>
  )
}

export default ProfileMemberDetail
