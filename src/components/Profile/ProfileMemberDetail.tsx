import ProfileIntroductionBox from '@/components/Profile/ProfileIntroductionBox'
import { css } from '@emotion/react'
import { useState } from 'react'
import profileData from '@/data/profile.json'
import TransitionLayout from '@/components/TransitionLayout/TransitionLayout'
import Image from 'next/image'
import Link from 'next/link'

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
  height: calc(100% - 120px);
  object-fit: cover;
  position: absolute;
  transition: opacity 0.3s ease;
`

const iconStyle = css`
  width: auto;
  height: auto;
  padding: 10px 20px;
`

const ProfileMemberDetail = ({ data }: ProfileMemberDetailProps) => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const galleryLen = profileData.jingburgerIntroduction.galleryImageURL.length
  const navButtonStyle = css`
    position: absolute;
    width: 26px;
    height: 46px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  `

  return (
    <TransitionLayout duration={0.5}>
      <div
        css={css`
          width: 100%;
          height: calc(100vh - 120px);
        `}
      >
        {/* 이미지 슬라이더 */}
        {data.galleryImageURL.map((img, i) => (
          <Image
            src={img}
            alt={`gallery-${i + 1}`}
            key={`gallery-${i}`}
            width={0}
            height={0}
            css={[
              slideImageStyle,
              css`
                opacity: ${pageIndex === i ? 1 : 0};
              `,
            ]}
          />
        ))}

        {/* background */}
        <Link href="/profile">
          <Image
            src={profileData.image.memberGalleryBg}
            alt="Member Gallery Background"
            width={0}
            height={0}
            css={css`
              width: 100%;
              height: calc(100% - 120px);
              object-fit: cover;
              position: absolute;
              opacity: 0.9;
            `}
          />
        </Link>

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
          <Image
            src="/images/icon/left-chevron.svg"
            width={0}
            height={0}
            css={iconStyle}
            alt="left arrow icon"
          ></Image>
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
          <Image
            src="/images/icon/right-chevron.svg"
            width={26}
            height={46}
            css={iconStyle}
            alt="right arrow icon"
          ></Image>
        </button>

        {/* 소개 */}
        <ProfileIntroductionBox
          mainTitle={data.mainTitle}
          isShowSns
          ytLink={data.socialLink.ytLink}
          igLink={data.socialLink.igLink}
          twLink={data.socialLink.twLink}
          description={data.description}
          margin={'0 0 80px 150px'}
        ></ProfileIntroductionBox>
      </div>
    </TransitionLayout>
  )
}

export default ProfileMemberDetail
