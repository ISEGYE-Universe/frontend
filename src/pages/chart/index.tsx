import AlbumNewsCard from '@/components/Chart/AlbumNewsCard'
import ArticleADBanner from '@/components/Chart/ArticleADBanner'
import TempLayout from '@/components/TempLayout/TempLayout'
import { css } from '@emotion/react'
import chartData from '@/data/chart.json'
import Title from '@/components/Chart/Title'
import TimeBaseSubTitle from '@/components/Chart/TimeBaseSubTitle'
import Top100Chart from '@/components/Chart/Top100Chart'
import HRLine from '@/components/Chart/HRLine'
import ChartMusicCard from '@/components/Chart/ChartMusicCard'
import SubTitle from '@/components/Chart/SubTitle'
import WeeklyAward from '@/components/Chart/WeeklyAward'
import MelonInfo from '@/components/Chart/MelonInfo'
import HallOfFame from '@/components/Chart/HallOfFame'
import HistoryCarousel from '@/components/Chart/HistoryCarousel'

const articleStyle = css`
  width: 1060px;
  margin: 0 auto;
  padding: 44px 0 106px 0;
`

const chartSectionContainerStyle = css`
  margin-top: 44px;
`
const LeftSectionContainerStyle = css`
  display: inline-block;
  width: 284px;
  margin-right: 28px;
`
const RightSectionContainerStyle = css`
  display: inline-block;
  width: 748px;
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
const weeklyAwardMainContainer = css`
  display: inline-block;
  width: 314px;
  margin-right: 20px;
`
const weeklyAwardTitleContainer = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`
const top100SectionContainer = css`
  margin-bottom: 30px;
`
const melonInfoMainContainer = css`
  display: inline-block;
  width: 414px;
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
                {chartData.albumNewsList.map((e) => (
                  <AlbumNewsCard key={`album-news-${e.id}`} title={e.title} />
                ))}
              </ul>
            </section>
          </div>
          <div css={RightSectionContainerStyle}>
            {/* 멜론 TOP 100 */}
            <section css={top100SectionContainer}>
              <div css={titleContainer}>
                <Title mb="10px">현재 타이틀곡의 멜론 TOP 100 순위는?</Title>
                <TimeBaseSubTitle time="23:00" />
              </div>
              <Top100Chart />
            </section>

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
              <section css={melonInfoMainContainer}>
                <MelonInfo
                  musicTitle="OVER"
                  dailyListenerNum={22798}
                  dailyChartPosition={308}
                />
              </section>
            </div>

            <HRLine />

            {/* 최근 명예의 전당 */}
            <section>
              <Title mb="20px">최근 명예의 전당</Title>
              {/* 명예의 전당 본문 */}
              <HallOfFame
                musicTitle="이세계 페스티벌"
                artist="이세계아이돌"
                releasedAt={new Date('2023-10-05 12:00')}
              />
            </section>
          </div>
        </div>

        <HRLine margin="38px 0 30px 0" />
        {/* 역대기록 */}
        <section>
          <Title mb="20px">역대 기록 한눈에 보기</Title>
          {/* 캐러셀 구역 */}
          <HistoryCarousel />
        </section>
      </article>
    </TempLayout>
  )
}

export default Chart
