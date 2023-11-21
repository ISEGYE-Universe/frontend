import ChartColor from '@/styles/ChartColor'
import { css } from '@emotion/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
)

export const Top100Chart = () => {
  return (
    <Chart
      type="line"
      width="500px"
      height="300px"
      css={css`
        padding-top: 17px;
      `}
      data={{
        labels: ['15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
          {
            data: [27, 24, 26, 16, 19, 20, 21, 25, 18],
            fill: 'start',
            backgroundColor: ChartColor.chartBgIsedolPink,
            borderColor: ChartColor.isedolPink,
            borderWidth: 1,
            pointBackgroundColor: ChartColor.isedolPink,
            pointBorderColor: ChartColor.isedolPink,
          },
        ],
      }}
      options={{
        // custom width height
        responsive: false,
        // 경계선에서 잘리는 문제
        clip: false,
        scales: {
          // x축
          x: {
            border: {
              color: ChartColor.chartBorderGrey,
            },
            grid: {
              display: true,
              color: ChartColor.chartBorderGrey,
            },
            ticks: {
              color: ChartColor.chartFontGrey,
              font: {
                size: 12,
              },
            },
          },
          // y축
          y: {
            border: {
              color: ChartColor.chartBorderGrey,
            },
            // y축 숫자
            ticks: {
              display: false,
            },
            grid: {
              display: true,
              color: ChartColor.chartBorderGrey,
            },
            // 낮은 숫자가 높기 때문
            reverse: true,
            min: 10,
            max: 30,
            suggestedMin: 1,
            suggestedMax: 100,
          },
        },
      }}
    />
  )
}
