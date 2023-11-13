import { NewsHeaderButton } from './NewsHeaderButton'

export function NewsHeaderButtonList() {
  return (
    <div
      css={{ margin: 20, display: 'flex', flexDirection: 'column', gap: 20 }}
    >
      <NewsHeaderButton
        iconSrc="/images/icon/KakaoPageIcon.svg"
        buttonName="카카오 페이지"
        href="https://page.kakao.com/content/62016104"
      />
      <NewsHeaderButton
        iconSrc="/images/icon/KakaoWebtoonIcon.svg"
        buttonName="카카오 웹툰"
        href="https://webtoon.kakao.com/content/%EB%A7%88%EB%B2%95%EC%86%8C%EB%85%80-%EC%9D%B4%EC%84%B8%EA%B3%84%EC%95%84%EC%9D%B4%EB%8F%8C/3574"
      />
    </div>
  )
}
