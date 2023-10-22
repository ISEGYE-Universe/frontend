import { css } from '@emotion/react'

interface introductionDescriptionType {
  title: string
  desc: string
}
interface ProfileIntroductionBoxProps {
  mainTitle: string
  description: introductionDescriptionType[]
  isShowSns?: boolean
  ytLink?: string
  igLink?: string
  twLink?: string
}

const snsAnchorStyle = css`
  display: inline-block;
`

const iconStyle = css`
  width: 40px;
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
const ProfileIntroductionBox = (props: ProfileIntroductionBoxProps) => {
  const { mainTitle, isShowSns, ytLink, igLink, twLink, description } = props

  return (
    <section
      css={css`
        margin: 0 0 83px 178px;
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
            css={css`
              font-size: 36px;
              font-weight: 700;
            `}
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
                <a href={ytLink} css={snsAnchorStyle} target="_blank">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a0b7/ccd8/679be705335041aa532715f8f3edb87e?Expires=1698624000&Signature=kpJVLJJUIVQhZse45nUIvWGR7Tge7TKYCuWy3PWxXLgCB4QsSG7ZA0OzgqO09~NZRAfqD3iqWFlNN72yfNLhKNtU55DJuvWuDC~ogbuBGUdjwxaMBiOlIkMHXt1mrnCvZhjezQyRxma2qrreiNkqtx3yape~8jaI8uWtmZ3oR~JvEo1s~d1V2YVfsbNAGghUM5ykFlHDSNf933QF3wKP9hKo74tJ3xc682BcH4xp-b8S~mGhIUeyuiV0adYcxx7QltaiaGd-hqxytOnPATveT6P~KPr6pPV58yLuuTVEX7lPX3yC0xkS7kRoYp0R0YTjY-KXmo-9w~2DevKXcnfSAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="icon-yt"
                    css={iconStyle}
                  />
                </a>
              )}
              {igLink && (
                <a href={igLink} css={snsAnchorStyle} target="_blank">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2869/9654/1a064bcf23c1d34dfd1495645fc9fb8f?Expires=1698624000&Signature=dWLvUXhEDanAeRjZUkswO8nHojI5jYQGzQr1dHYT76lvvJpXTKY88O70Ve8J4D9EusQnXTh6nz6A8N0WoR3ruH8gSKeE4Pw-Lxp3EBH2fKA1EK3VT0BMhrhM4RJkyLzL343-zRy0a8myd0jVAmbEq6aBVU6WIPbLbTlhoLA7xxHqBfMARzPlG648Qck3oZjpoyKTQLwLC6tsMBygOgpq4t5mkNcesQmD-vmXb~5Wsgy~q9x4H0syHMzTpfgfrB1MljlJtY6w-meb5bW0n0CQcaVQhyQgisGC78jFYoXger7hCfsEf67uqhb6ikO9-uRvKSLY6XkpNdbOjuOhAFI4MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="icon-ig"
                    css={iconStyle}
                  />
                </a>
              )}
              {twLink && (
                <a href={twLink} css={snsAnchorStyle} target="_blank">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5110/5706/d1b81cf92463a4b04dcfd3193ee11f17?Expires=1698624000&Signature=krGNqDVlwdmD5RhgPrtsxHgYIKDBQH5wmRW3ZhMD1XLnzrlPvrKNdzAtPT0fMzE9hnwOMTy6t0XtiLX80Ti3EgVbS6CwEi~Fmk51zHB5zhf0kaSLgaPqd6~uidgmQ7pCZpVNFd9y8wNvGXOI6sGKPAkVpqUfVrzhDGeXD2Iw5GdmulTZjRsK3b48gWjQ9yh12uEY58cHU9MKzbQtaKeSAiAAnCC-wRSis2W2tnD5H6gsRZpPTZyNkBhTUq2zCXBHXig6jQIwumBAX~s2T5pyR2nfHPVN52yTS9pfkyJp2ApkFdrH1JdvmaDbdUGudtyEGJSqx~tknr0TPWXaN6xLNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="icon-tw"
                    css={iconStyle}
                  />
                </a>
              )}
            </div>
          )}
          {/* E: sns links */}
        </div>
        {/*E: Heading + SNS Link */}

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
            ></div>
            {/* 소개글 */}
            <ul
              css={css`
                display: flex;
                flex-direction: column;
                gap: 35px;
              `}
            >
              {description.map((d) => (
                <li>
                  <div
                    css={css`
                      font-size: 24px;
                      display: flex;
                      gap: 35px;
                    `}
                  >
                    <div
                      css={css`
                        width: 74px;
                        display: flex;
                        justify-content: space-between;
                      `}
                    >
                      {d.title.split('').map((char) => (
                        <span>{char}</span>
                      ))}
                    </div>
                    <div>
                      <span>{d.desc}</span>
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

export default ProfileIntroductionBox
