import ArticleADBanner from '@/components/Chart/ArticleADBanner'
import ChartLeftSection from '@/components/Chart/ChartLeftSection'
import ChartRightSection from '@/components/Chart/ChartRightSection'
import TempLayout from '@/components/TempLayout/TempLayout'
import { css } from '@emotion/react'

const articleStyle = css`
  width: 1060px;
  margin: 0 auto;
  padding: 44px 0 141px 0;
`

const chartSectionContainerStyle = css`
  margin-top: 44px;
`
const LeftSectionContainerStyle = css`
  display: inline-block;
  width: 285px;
  margin-right: 29px;
`
const RightSectionContainerStyle = css`
  display: inline-block;
  width: 745px;
  vertical-align: top;
`

function Chart() {
  return (
    <TempLayout>
      <article css={articleStyle}>
        {/* 배너 */}
        <ArticleADBanner
          title="멜론 2022 MMA 내돌내상 2023"
          desc="시상수 TOP 10 달성시 실물 상패가 수여되고 MMA 메인페이지에 소개됩니다."
          CTAText="참여하러 가기"
          bgImage="https://s3-alpha-sig.figma.com/img/8d82/37bd/d28c3ce5c72d6035ef3cdf9c9d136691?Expires=1699833600&Signature=HqpNmXXiQt4pleTGrBknaB~RtS5TeuwpQzinF-FbQlGanVxTDsWn2eQ2yJLN~o~2a8k7cIF5lNDdmFH49sqj7J6L0R79x2TvIoNlM1xPowW-09Lznvvl8Xs1Zafh8h3-qaM4L3CB-caWPKMrHPHfTrKNEIca~jh8jg85LdidO4s2G~Uy6qSObLb~kj97vWRhgRtMguHMNPFijSJ1cvcwLp3MuCXUhvj~7rfEkLyuVzdttLxy2SlOTe0ZNi9GHEewyFVGPL0Qd0j3bWVi5skrbofVRQepxcnmca5wrEtHAT6GNgSrU~rUL9tk7gKau0fqzYopHFTncZ79vVd-AJ2pjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          bgColor="#EA4476"
        />
        {/* 차트정보 */}
        <div css={chartSectionContainerStyle}>
          <div css={LeftSectionContainerStyle}>
            <ChartLeftSection />
          </div>
          <div css={RightSectionContainerStyle}>
            <ChartRightSection />
          </div>
        </div>
        {/* 역대기록 */}
      </article>
    </TempLayout>
  )
}

export default Chart
