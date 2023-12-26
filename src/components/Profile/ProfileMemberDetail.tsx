import { ProfileIntroductionBox } from '@/components/Profile/ProfileIntroductionBox'
import { css } from '@emotion/react'
import { useCallback, useEffect } from 'react'
import profileData from '@/data/profile.json'
import { TransitionLayout } from '@/components/TransitionLayout/TransitionLayout'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

interface MemberIntroduction {
  mainTitle: string
  description: Profile.IntroductionDescription[]
  socialLink: Profile.SocialLink
  galleryImageURL: Profile.GalleryImage[]
}

interface ProfileMemberDetailProps {
  data: MemberIntroduction
}

const slideImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

const iconStyle = css`
  width: auto;
  height: auto;
  padding: 10px 20px;
`

const emblaCss = css`
  &.embla {
    position: relative;
    overflow: hidden;

    .embla__container {
      display: flex;
      width: 100%;
      height: 100%;
      .embla__slide {
        flex: 0 0 auto;
        top: 0;
        height: 100%;
        opacity: 0;
        transition: opacity 0.3s;
        position: absolute;
        transform: none !important;
        &.is-snapped {
          opacity: 1;
        }
      }
    }
  }
`

const fullHeight = css`
  height: 100%;
`

export const ProfileMemberDetail = ({ data }: ProfileMemberDetailProps) => {
  const navButtonStyle = css`
    position: absolute;
    width: 26px;
    height: 46px;
    top: 44%;
    transform: translateY(-50%);
    cursor: pointer;

    &: hover;
  `

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
      <div
        css={css`
          width: 100%;
          height: calc(100vh - 120px);
        `}
      >
        <div className="embla" css={[emblaCss, fullHeight]} ref={emblaRef}>
          <div className="embla__container" css={fullHeight}>
            {/* 이미지 슬라이더 */}
            {data.galleryImageURL.map((img, i) => (
              <div
                className="embla__slide"
                css={[
                  fullHeight,
                  css`
                    // 정확히 동일한 위치에 존재하면 하나의 슬라이드로 인식되어 추가한 workaround
                    left: -${i / 10}px;
                    width: calc(100% + ${i / 10}px);
                  `,
                ]}
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
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                top: 0;
                opacity: 0.9;
              `}
            />
          </Link>
        </div>

        {/* 좌우 버튼 */}
        <button
          type="button"
          css={[
            navButtonStyle,
            css`
              left: 130px;
            `,
          ]}
          onClick={scrollPrev}
        >
          <Image
            src="/images/icon/left-chevron.svg"
            width={0}
            height={0}
            css={iconStyle}
            alt="left arrow icon"
          />
        </button>
        <button
          type="button"
          css={[
            navButtonStyle,
            css`
              right: 130px;
            `,
          ]}
          onClick={scrollNext}
        >
          <Image
            src="/images/icon/right-chevron.svg"
            width={26}
            height={46}
            css={iconStyle}
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
