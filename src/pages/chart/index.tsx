import ArticleADBanner from '@/components/Chart/ArticleADBanner'
import ChartLeftSection from '@/components/Chart/ChartLeftSection'
import ChartRightSection from '@/components/Chart/ChartRightSection'
import TempLayout from '@/components/TempLayout/TempLayout'
import { css } from '@emotion/react'
import chartData from '@/data/chart.json'

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

const Chart = () => {
  return (
    <TempLayout>
      <article css={articleStyle}>
        {/* 배너 */}
        <ArticleADBanner
          title="멜론 MMA 내돌내상 2023"
          desc="시상수 TOP 10 달성시 실물 상패가 수여되고 MMA 메인페이지에 소개됩니다."
          CTAText="참여하러 가기"
          bgImage={chartData.image.adBanner}
          bgColor="#EA4476"
        ></ArticleADBanner>
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
