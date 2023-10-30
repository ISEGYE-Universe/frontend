import { css } from '@emotion/react'
import ChartMusicCard from './ChartMusicCard'
import SubTitle from './SubTitle'
import Title from './Title'

const titleContainer = css`
  margin-bottom: 22px;
`
const ChartLeftSection = () => {
  return (
    <>
      {/* 멜론 HOT 100 */}
      <section>
        <div css={titleContainer}>
          <SubTitle>오늘 23:00 기준</SubTitle>
          <Title>멜론 HOT 100</Title>
        </div>

        <ChartMusicCard
          title="KIDDING"
          position={18}
          change={1}
          artist="이세계아이돌"
          thumb="https://s3-alpha-sig.figma.com/img/11cf/1bba/400a79b31a645001a270e66d4bd85bcf?Expires=1699833600&Signature=XHq4UyJ3caQ6BRLtJKwmBoeAEhFak8Jnnj0nDZ6tDq3uoyxVxf8nR84fJ41TT2poUxbeTgyLClPbpNHVPAk5WNFy3cvZZSfbf0EO66BeZ2wkpyJPM5wts1QUrHTlu-Xm9kbFyif6froCe3FkMLCtWVrI6tW~SrL2Zhpkk4i5ZXe8Tau2h1n5iIjo5r1ID8fbZ-DJkyZ8pYlR0EkA6aMDDGSrXgaOtdVYdBsV1ZtPwyArGsGG5XU3VLeBHpEXmul-7r5DOnKObMHveSej7V4D3wmfsh1ZAfbYzGVq6gWLY3~cbI7ecrDy-1clL-NW7z2LkJ2bJ9u9~UESkKkmYc6ayg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        ></ChartMusicCard>
      </section>
      {/* 실시간 차트 */}
      {/* 음반 관련 소식 */}
    </>
  )
}

export default ChartLeftSection
