import { css } from '@emotion/react'
import chartData from '@/data/chart.json'
import { ChartColor } from '@/styles/ChartColor'

const Top100Chart = () => {
  return (
    <div
      css={css`
        width: 750px;
        height: 377px;
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
          background: url('${chartData.image.top100CardBackground}');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          vertical-align: top;
        `}
      >
        {/* overlay */}
        <div
          css={css`
            width: 100%;
            height: 100%;
            backdrop-filter: blur(3px);
            background: rgba(21, 21, 21, 0.7);
          `}
        ></div>
      </div>
    </div>
  )
}

export default Top100Chart
