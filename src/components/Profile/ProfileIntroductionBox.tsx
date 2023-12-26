import {
  LineHeight,
  TitleMdBold,
  TitleSmLight,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import profileData from '@/data/profile.json'

interface ProfileIntroductionBoxProps {
  mainTitle: string
  description: Profile.IntroductionDescription[]
  isShowSns?: boolean
  ytLink?: string
  igLink?: string
  twLink?: string
  margin?: string
}

const snsAnchorStyle = css`
  display: inline-block;
`

const iconStyle = css`
  width: 40px;
  height: auto;
  // anchor 태그와 크기 맞춰주기 위함
  vertical-align: bottom;
`

/**
 * @앨범소개 소개글 섹션
 * @param mainTitle 제목
 * @param isShowSns SNS 아이콘 표시 여부
 * @param ytLink 유튜브 링크
 * @param igLink 인스타 링크
 * @param twLink 트위치 링크
 * @param description 트위치 링크
 * @author 민타이
 */
export const ProfileIntroductionBox = ({
  mainTitle,
  isShowSns,
  ytLink,
  igLink,
  twLink,
  description,
  margin,
}: ProfileIntroductionBoxProps) => {
  return (
    <section
      css={css`
        ${margin ? `margin: ${margin};` : 'margin: 0 0 83px 178px;'};

        position: absolute;
        left: 0;
        bottom: 0;
        cursor: default;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          color: #fff;
          gap: 30px;
        `}
      >
        {/* S: Heading + SNS Link */}
        <div
          css={css`
            display: flex;
            gap: 24px;
          `}
        >
          <span
            css={[
              TitleMdBold,
              LineHeight,
              css`
                letter-spacing: -1.08px;
              `,
            ]}
          >
            {mainTitle}
          </span>
          {/* S: sns links */}
          {isShowSns && (
            <div
              css={css`
                display: flex;
                align-items: center;
                gap: 24px;
              `}
            >
              {ytLink && (
                <Link href={ytLink} css={snsAnchorStyle} target="_blank">
                  <Image
                    src={profileData.image.ytIcon}
                    alt="icon-yt"
                    css={iconStyle}
                    width={0}
                    height={0}
                  />
                </Link>
              )}
              {igLink && (
                <Link href={igLink} css={snsAnchorStyle} target="_blank">
                  <Image
                    src={profileData.image.igIcon}
                    alt="icon-ig"
                    css={iconStyle}
                    width={0}
                    height={0}
                  />
                </Link>
              )}
              {twLink && (
                <Link href={twLink} css={snsAnchorStyle} target="_blank">
                  <Image
                    src={profileData.image.twIcon}
                    alt="icon-tw"
                    css={iconStyle}
                    width={0}
                    height={0}
                  />
                </Link>
              )}
            </div>
          )}
          {/* E: sns links */}
        </div>
        {/* E: Heading + SNS Link */}

        {/* S: Description */}
        {description && (
          <div
            css={css`
              display: flex;
              position: relative;
            `}
          >
            {/* vertical line */}
            <div
              css={css`
                width: 2px;
                height: auto;
                background-color: #5c5c5c;
                position: relative;
                margin: 0 22px 0 6px;
              `}
            />
            {/* 소개글 */}
            <ul
              css={css`
                display: flex;
                flex-direction: column;
                gap: 35px;
              `}
            >
              {description.map((d) => (
                <li key={`intro-desc-${d.title}`}>
                  <div
                    css={css`
                      display: flex;
                      gap: 35px;
                    `}
                  >
                    <div
                      css={css`
                        width: 65px;
                        display: flex;
                        justify-content: space-between;
                      `}
                    >
                      {d.title.split('').map((char) => (
                        <span
                          key={`title-${char}`}
                          css={[TitleSmLight, LineHeight]}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                    <div>
                      <span css={[TitleSmRegular, LineHeight]}>{d.desc}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
