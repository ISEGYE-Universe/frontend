import { LineHeight, TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'

export const calendarContentContainer = css`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  padding: 144px 62.5px 170px 8.5px;
`

export const calendarStyle = [
  TitleSmRegular,
  LineHeight,
  css`
    display: flex;
    flex-direction: column;

    .react-calendar__viewContainer {
      align-self: flex-end;
      width: 542px;

      .react-calendar__month-view__weekdays {
        gap: 32px;
        margin-bottom: 32px;
        .react-calendar__month-view__weekdays__weekday {
          text-align: center;
          flex: 0 0 50px !important;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          abbr {
            text-decoration: none;
          }
        }
      }

      .react-calendar__month-view__days {
        gap: 32px;
        .react-calendar__tile {
          flex: 0 0 50px !important;
          height: 50px;
        }
      }
    }
  `,
]
