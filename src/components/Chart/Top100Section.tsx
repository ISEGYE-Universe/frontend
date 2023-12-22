import { css } from '@emotion/react'
import Image from 'next/image'
import chartData from '@/data/chart.json'
import ChartColor from '@/styles/ChartColor'
import { LineHeight, TextSmLight } from '@/styles/Font'
import { RoundedLinkButton } from './RoundedLinkButton'
import { Title } from './Title'
import { Top100ChartSwitch } from './Top100ChartSwitch'
import { Top100Chart } from './Top100Chart'

const mockData = [
  {
    date: '2023-11-24T04:00:00.000Z',
    rank: 36,
  },
  {
    date: '2023-11-24T05:00:00.000Z',
    rank: 32,
  },
  {
    date: '2023-11-24T06:00:00.000Z',
    rank: 32,
  },
  {
    date: '2023-11-24T07:00:00.000Z',
    rank: 30,
  },
  {
    date: '2023-11-24T08:00:00.000Z',
    rank: 28,
  },
  {
    date: '2023-11-24T09:00:00.000Z',
    rank: 30,
  },
  {
    date: '2023-11-24T10:00:00.000Z',
    rank: 32,
  },
  {
    date: '2023-11-24T11:00:00.000Z',
    rank: 26,
  },
  {
    date: '2023-11-24T12:00:00.000Z',
    rank: 26,
  },
]
export const Top100Section = () => {
  return (
    <div
      css={css`
        width: 750px;
        height: 377px;
        position: relative;
      `}
    >
      {/* 차트 영역 */}
      <div
        css={css`
          display: inline-block;
          width: 517px;
          background-color: ${ChartColor.bgWhiteGrey};
        `}
      >
        <div
          css={css`
            padding: 18px 19px 26px 0;
          `}
        >
          <Top100ChartSwitch />
          <Top100Chart parentHeight={270} parentWidth={500} data={mockData} />
        </div>
      </div>
      {/* 곡 카드 영역 */}
      <div
        css={css`
          display: inline-block;
          width: 233px;
          height: 100%;
          background: url('${chartData.image.top100Thumb}');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          vertical-align: top;
          position: absolute;
        `}
      >
        {/* overlay */}
        <div
          css={css`
            width: 100%;
            height: 100%;
            backdrop-filter: blur(3px);
            background: rgba(21, 21, 21, 0.7);
            position: absolute;
          `}
        />
        {/* 내용 */}
        <div
          css={css`
            padding: 34px 35px 34px 36px;
            height: 100%;
            position: relative;
          `}
        >
          {/* 썸네일 */}
          <Image
            src={chartData.image.top100Thumb}
            width={159}
            height={159}
            alt="top100 thumbnail"
            css={css`
              margin-bottom: 18px;
            `}
          />
          {/* 제목, 아티스트 */}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 23px;
            `}
          >
            <Title color={ChartColor.textWhite} mb="6px">
              KIDDING
            </Title>
            <h4
              css={[
                TextSmLight,
                LineHeight,
                css`
                  color: ${ChartColor.textLightGrey};
                `,
              ]}
            >
              이세계아이돌
            </h4>
          </div>

          {/* 버튼 */}
          <RoundedLinkButton
            href="#"
            bgColor={ChartColor.bgMelonGreen}
            customCss={css`
              margin-bottom: 9px;
            `}
            shadow
          >
            멜론에서 듣기
          </RoundedLinkButton>
          <RoundedLinkButton href="#" bgColor={ChartColor.bgMelonGreen} shadow>
            종합 스트리밍 가이드
          </RoundedLinkButton>
        </div>
      </div>
    </div>
  )
}
