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
  registerables,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(...registerables)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
)

const fontFamily = 'Noto Sans CJK KR'

const mockdata = [
  { time: '15', rank: 27 },
  { time: '16', rank: 24 },
  { time: '17', rank: 26 },
  { time: '18', rank: 16 },
  { time: '19', rank: 19 },
  { time: '20', rank: 20 },
  { time: '21', rank: 21 },
  { time: '22', rank: 25 },
  { time: '23', rank: 18 },
]

export const Top100Chart = () => {
  return (
    <Chart
      type="line"
      plugins={[ChartDataLabels]}
      width="500px"
      height="300px"
      css={css`
        padding-top: 17px;
      `}
      data={{
        labels: mockdata.map((el) => el.time),
        datasets: [
          {
            data: mockdata.map((el) => el.rank),
            fill: 'start',
            backgroundColor: ChartColor.chartBgIsedolPink,
            borderColor: ChartColor.isedolPink,
            borderWidth: 1,
            pointBackgroundColor: ChartColor.isedolPink,
            pointBorderColor: ChartColor.isedolPink,
            datalabels: {
              display: (ctx) => {
                if (ctx.dataIndex === ctx.dataset.data.length - 1) {
                  return true
                }
                return false
              },
            },
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
                family: fontFamily,
                weight: '500',
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
        // 툴팁 스타일
        plugins: {
          tooltip: {
            position: 'average',
            // style
            backgroundColor: ChartColor.isedolPink,
            // 폰트
            titleFont: {
              family: fontFamily,
              weight: '400',
              size: 14,
            },
            padding: {
              top: 8,
              bottom: 8,
              left: 9,
              right: 9,
            },
            titleAlign: 'center',
            titleMarginBottom: 0,
            callbacks: {
              title: (context) => {
                // 툴팁 정보 안넘어오는 경우 제외
                if (context.length !== 0) {
                  const { parsed } = context[0]
                  let result = `${parsed.y}`
                  result += '위'
                  return result
                }
                return ''
              },
              label: () => {
                return ''
              },
            },
            // 마지막 툴팁 필터링
            filter: (context) => {
              if (context.dataIndex === context.dataset.data.length - 1) {
                return false
              }
              return true
            },
          },
          legend: { display: false },
          datalabels: {
            align: 'left',
            backgroundColor: ChartColor.isedolPink,
            color: ChartColor.textWhite,
            labels: {
              title: {
                font: { family: fontFamily, size: 12 },
                formatter: () => {
                  return `    `
                },
                textAlign: 'center',
                anchor: 'center',
                rotation: 45,
                offset: 10,
              },
              value: {
                borderRadius: 10,
                font: { family: fontFamily, size: 14, lineHeight: 1.5 },
                formatter: (value) => {
                  return `현재 순위\n${value}위!`
                },
                textAlign: 'center',
                padding: {
                  left: 10,
                  right: 10,
                },
                anchor: 'center',
                offset: 15,
              },
            },
          },
        },
      }}
    />
  )
}
