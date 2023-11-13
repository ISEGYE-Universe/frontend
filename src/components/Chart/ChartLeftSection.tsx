import { css } from '@emotion/react'
import ChartMusicCard from './ChartMusicCard'
import Title from './Title'
import chartData from '@/data/chart.json'
import TimeBaseSubTitle from './TimeBaseSubTitle'
import AlbumNewsCard from './AlbumNewsCard'
import HRLine from './HRLine'

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

const ChartLeftSection = () => {
  return (
    <>
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
            ></ChartMusicCard>
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
            ></ChartMusicCard>
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
            <AlbumNewsCard
              key={`album-news-${i}`}
              title={e.title}
            ></AlbumNewsCard>
          ))}
        </ul>
      </section>
    </>
  )
}

export default ChartLeftSection
