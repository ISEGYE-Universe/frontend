import { NewsHeaderButton } from './NewsHeaderButton'

export const NewsHeaderButtonList = () => {
  return (
    <div
      css={{ margin: 20, display: 'flex', flexDirection: 'column', gap: 20 }}
    >
      <NewsHeaderButton
        iconSrc="/images/icon/KakaoPageIcon.svg"
        buttonName="카카오 페이지"
        href="/"
      />
      <NewsHeaderButton
        iconSrc="/images/icon/KakaoWebtoonIcon.svg"
        buttonName="카카오 웹툰"
        href="/"
      />
    </div>
  )
}
