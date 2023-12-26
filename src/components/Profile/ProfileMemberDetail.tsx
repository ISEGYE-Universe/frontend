import { ProfileIntroductionBox } from '@/components/Profile/ProfileIntroductionBox'
import { css } from '@emotion/react'
import { useCallback, useEffect } from 'react'
import profileData from '@/data/profile.json'
import { TransitionLayout } from '@/components/TransitionLayout/TransitionLayout'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  emblaContainerStyle,
  emblaSlideStyle,
  emblaStyle,
  fullHeight,
  memberGalleryBackground,
  navButtonIconStyle,
  navButtonNextStyle,
  navButtonPrevStyle,
  navButtonStyle,
  outerContainer,
  slideImageStyle,
} from './ProfileMemberDetail.css'

interface MemberIntroduction {
  mainTitle: string
  description: Profile.IntroductionDescription[]
  socialLink: Profile.SocialLink
  galleryImageURL: Profile.GalleryImage[]
}

interface ProfileMemberDetailProps {
  data: MemberIntroduction
}

export const ProfileMemberDetail = ({ data }: ProfileMemberDetailProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: false,
      loop: true,
      watchResize: (embla) => {
        embla.rootNode().classList.remove('embla--is-ready')
        return true
      },
    },
    [
      ClassNames({
        snapped: 'is-snapped',
      }),
    ],
  )

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  useEffect(() => {
    if (!emblaApi) return

    // 기본 슬라이딩 스타일 제거
    const engine = emblaApi.internalEngine()
    engine.translate.toggleActive(false)
    engine.translate.clear()
  }, [emblaApi])

  return (
    <TransitionLayout duration={0.5}>
      <div css={outerContainer}>
        <div className="embla" css={[emblaStyle, fullHeight]} ref={emblaRef}>
          <div
            className="embla__container"
            css={[emblaContainerStyle, fullHeight]}
          >
            {/* 이미지 슬라이더 */}
            {data.galleryImageURL.map((img, i) => (
              <div
                className="embla__slide"
                css={[emblaSlideStyle(i), fullHeight]}
                key={`history-${img.id}`}
              >
                <Image
                  src={img.url}
                  alt={`gallery-${i + 1}`}
                  width={0}
                  height={0}
                  css={[slideImageStyle]}
                  priority
                />
              </div>
            ))}
          </div>
          {/* background */}
          <Link href="/profile">
            <Image
              src={profileData.image.memberGalleryBg}
              alt="Member Gallery Background"
              width={0}
              height={0}
              css={memberGalleryBackground}
            />
          </Link>
        </div>

        {/* 좌우 버튼 */}
        <button
          type="button"
          css={[navButtonStyle, navButtonPrevStyle]}
          onClick={scrollPrev}
        >
          <Image
            src="/images/icon/left-chevron.svg"
            width={0}
            height={0}
            css={navButtonIconStyle}
            alt="left arrow icon"
          />
        </button>
        <button
          type="button"
          css={[navButtonStyle, navButtonNextStyle]}
          onClick={scrollNext}
        >
          <Image
            src="/images/icon/right-chevron.svg"
            width={26}
            height={46}
            css={navButtonIconStyle}
            alt="right arrow icon"
          />
        </button>

        {/* 소개 */}
        <ProfileIntroductionBox
          mainTitle={data.mainTitle}
          isShowSns
          ytLink={data.socialLink.ytLink}
          igLink={data.socialLink.igLink}
          twLink={data.socialLink.twLink}
          description={data.description}
          margin="0 0 80px 150px"
        />
      </div>
    </TransitionLayout>
  )
}
