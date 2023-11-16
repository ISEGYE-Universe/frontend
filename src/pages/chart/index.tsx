import ArticleADBanner from '@/components/Chart/ArticleADBanner'
import TempLayout from '@/components/TempLayout/TempLayout'
import { css } from '@emotion/react'
import chartData from '@/data/chart.json'
import Title from '@/components/Chart/Title'
import TimeBaseSubTitle from '@/components/Chart/TimeBaseSubTitle'
import Top100Chart from '@/components/Chart/Top100Chart'
import HRLine from '@/components/Chart/HRLine'
import ChartMusicCard from '@/components/Chart/ChartMusicCard'
import AlbumNewsCard from '@/components/Chart/AlbumNewsCard'

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
const titleContainer = css`
  margin-bottom: 20px;
`
const musicChartContainer = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
const albumNewsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
        />
        {/* 차트정보 */}
        <div css={chartSectionContainerStyle}>
          <div css={LeftSectionContainerStyle}>
            {/* 멜론 HOT 100 */}
            <section>
              <div css={titleContainer}>
                <Title mb="10px">멜론 HOT 100</Title>
                <TimeBaseSubTitle time="23:00" />
              </div>

              <ul css={musicChartContainer}>
                {chartData.hot100List.map((m) => (
                  <ChartMusicCard
                    key={`hot100-card-${m.title}`}
                    title={m.title}
                    position={m.position}
                    change={m.change}
                    artist={m.artist}
                    thumb={m.thumb}
                  />
                ))}
              </ul>
            </section>

            <HRLine />

            {/* 실시간 차트 */}
            <section>
              <div css={titleContainer}>
                <Title mb="10px">가이섬 실시간 차트</Title>
                <TimeBaseSubTitle time="23:00" />
              </div>
              <ul css={musicChartContainer}>
                {chartData.realTimeChartList.map((m) => (
                  <ChartMusicCard
                    key={`realtime-chart-card-${m.title}`}
                    title={m.title}
                    position={m.position}
                    change={m.change}
                    artist={m.artist}
                    thumb={m.thumb}
                  />
                ))}
              </ul>
            </section>

            <HRLine />

            {/* 음반 관련 소식 */}
            <section>
              <div css={titleContainer}>
                <Title>발매 관련 소식</Title>
              </div>
              <ul css={albumNewsContainer}>
                {chartData.albumNewsList.map((e, i) => (
                  <AlbumNewsCard key={`album-news-${i}`} title={e.title} />
                ))}
              </ul>
            </section>
          </div>
          <div css={RightSectionContainerStyle}>
            {/* 멜론 TOP 100 */}
            <section>
              <div css={titleContainer}>
                <Title mb="10px">현재 타이틀곡의 멜론 TOP 100 순위는?</Title>
                <TimeBaseSubTitle time="23:00" />
              </div>
              <Top100Chart />
            </section>

            <div>
              {/* 멜론 주간인기상 */}
              <section />
              {/* 곡 멜론 정보 */}
              <section />
            </div>

            {/* 최근 명예의 전당 */}
            <section />
          </div>
        </div>
        {/* 역대기록 */}
      </article>
    </TempLayout>
  )
}

export default Chart
