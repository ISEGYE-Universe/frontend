import { css } from '@emotion/react'
import Image from 'next/image'
import Title from './Title'
import RoundedLinkButton from './RoundedLinkButton'
import chartData from '@/data/chart.json'
import { ChartColor } from '@/styles/ChartColor'
import { LineHeight, TextSmLight } from '@/styles/Font'

const Top100Chart = () => {
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
          height: 100%;
          background-color: ${ChartColor.bgWhiteGrey};
        `}
      ></div>
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
        ></div>
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
          ></Image>
          {/* 제목, 아티스트 */}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 23px;
            `}
          >
            <Title color="#fff" mb="6px">
              KIDDING
            </Title>
            <h4
              css={[
                TextSmLight,
                LineHeight,
                css`
                  color: #b9b9b9;
                `,
              ]}
            >
              이세계아이돌
            </h4>
          </div>

          {/* 버튼 */}
          <RoundedLinkButton
            href="#"
            bgColor="#36BF29"
            customCss={css`
              margin-bottom: 9px;
            `}
            shadow
          >
            멜론에서 듣기
          </RoundedLinkButton>
          <RoundedLinkButton href="#" bgColor="#36BF29" shadow>
            종합 스트리밍 가이드
          </RoundedLinkButton>
        </div>
      </div>
    </div>
  )
}

export default Top100Chart
