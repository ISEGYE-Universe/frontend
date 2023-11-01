import AlbumNewsCard from '@/components/Chart/AlbumNewsCard'
import ArticleADBanner from '@/components/Chart/ArticleADBanner'
import ChartMusicCard from '@/components/Chart/ChartMusicCard'
import HRLine from '@/components/Chart/HRLine'
import SubTitle from '@/components/Chart/SubTitle'
import TimeBaseSubTitle from '@/components/Chart/TimeBaseSubTitle'
import Title from '@/components/Chart/Title'
import Top100Chart from '@/components/Chart/Top100Chart'
import WeeklyAward from '@/components/Chart/WeeklyAward'
import TempLayout from '@/components/TempLayout/TempLayout'
import chartData from '@/data/chart.json'
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
const titleContainer = css`
  margin-bottom: 22px;
`
const musicChartContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const albumNewsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const weeklyAwardMainContainer = css`
  width: 315px;
`
const weeklyAwardTitleContainer = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`

const Chart = () => {
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
        ></ArticleADBanner>
        {/* 차트정보 */}
        <div css={chartSectionContainerStyle}>
          <div css={LeftSectionContainerStyle}>
            {/* 멜론 HOT 100 */}
            <section>
              <div css={titleContainer}>
                <TimeBaseSubTitle time="23:00" mb="6px" />
                <Title>멜론 HOT 100</Title>
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
                  ></ChartMusicCard>
                ))}
              </ul>
            </section>
            <HRLine />
            {/* 실시간 차트 */}
            <section>
              <div css={titleContainer}>
                <TimeBaseSubTitle time="23:00" mb="6px" />
                <Title>가이섬 실시간 차트</Title>
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
                  ></ChartMusicCard>
                ))}
              </ul>
            </section>
            <HRLine />
            {/* 음반 관련 소식 */}
            <section>
              <div css={titleContainer}>
                <Title>음반 관련 소식</Title>
              </div>
              <ul css={albumNewsContainer}>
                {chartData.albumNewsList.map((e, i) => (
                  <AlbumNewsCard
                    key={`album-news-${i}`}
                    title={e.title}
                  ></AlbumNewsCard>
                ))}
              </ul>
            </section>
          </div>
          <div css={RightSectionContainerStyle}>
            {/* 멜론 TOP 100 */}
            <section>
              <div css={titleContainer}>
                <Title mb="6px">현재 멜론 TOP 100 순위는?</Title>
                <TimeBaseSubTitle time="23:00"></TimeBaseSubTitle>
              </div>
              <Top100Chart />
            </section>

            <HRLine margin="35px 0 17px 0" />

            <div>
              {/* 멜론 주간인기상 */}
              <section css={weeklyAwardMainContainer}>
                <div css={weeklyAwardTitleContainer}>
                  <Title>멜론 주간 인기상</Title>
                  <SubTitle>10월 1주차</SubTitle>
                </div>
                <WeeklyAward
                  position={3}
                  voteNum={24673}
                  voteRatio={14.33}
                  endDate={new Date('2024.01.01 00:00:00')}
                />
              </section>
              {/* 곡 멜론 정보 */}
              <section></section>
            </div>

            {/* 최근 명예의 전당 */}
            <section></section>
          </div>
        </div>

        <HRLine margin="40px 0 60px 0" />
        {/* 역대기록 */}
      </article>
    </TempLayout>
  )
}

export default Chart
