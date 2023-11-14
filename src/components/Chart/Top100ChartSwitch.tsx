import ChartStore from '@/store/Chart/ChartStore'
import { ChartColor } from '@/styles/ChartColor'
import { TextMdBold } from '@/styles/Font'
import { css } from '@emotion/react'

const chartSwitchContainer = css`
  position: relative;
  width: 105px;
  height: 30px;
  border-radius: 30px;
  background: ${ChartColor.bgDisabledGrey};
  margin: 0 auto;
`

const Top100ChartSwitch = () => {
  const { currentTop100ChartType, setCurrentTop100ChartType } = ChartStore()

  const chartSwitchButtonStyle = [
    css`
      position: absolute;
      width: 55px;
      height: 100%;
      border-radius: 30px;
      color: ${ChartColor.textWhite};
      cursor: pointer;
    `,
    TextMdBold,
  ]

  return (
    <div css={chartSwitchContainer}>
      <button
        css={[
          chartSwitchButtonStyle,
          {
            background:
              currentTop100ChartType === 'daily'
                ? ChartColor.isedolPink
                : 'none',
            left: 0,
          },
        ]}
        onClick={() => {
          setCurrentTop100ChartType('daily')
        }}
      >
        일간
      </button>
      <button
        css={[
          chartSwitchButtonStyle,
          {
            background:
              currentTop100ChartType === 'weekly'
                ? ChartColor.isedolPink
                : 'none',
            right: 0,
          },
        ]}
        onClick={() => {
          setCurrentTop100ChartType('weekly')
        }}
      >
        주간
      </button>
    </div>
  )
}

export default Top100ChartSwitch
