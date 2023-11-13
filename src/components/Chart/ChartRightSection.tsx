import { css } from '@emotion/react'
import HRLine from './HRLine'
import TimeBaseSubTitle from './TimeBaseSubTitle'
import Title from './Title'
import Top100Chart from './Top100Chart'

const titleContainer = css`
  margin-bottom: 22px;
`

const ChartRightSection = () => {
  return (
    <>
      {/* 멜론 TOP 100 */}
      <section>
        <div css={titleContainer}>
          <Title mb="10px">현재 타이틀곡의 멜론 TOP 100 순위는?</Title>
          <TimeBaseSubTitle time="23:00"></TimeBaseSubTitle>
        </div>
        <Top100Chart />
      </section>

      <HRLine margin="35px 0 17px 0" />

      <div>
        {/* 멜론 주간인기상 */}
        <section></section>
        {/* 곡 멜론 정보 */}
        <section></section>
      </div>

      {/* 최근 명예의 전당 */}
      <section></section>
    </>
  )
}

export default ChartRightSection
