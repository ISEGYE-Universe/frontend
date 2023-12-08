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
    color: #fafafa;

    .react-calendar__navigation {
      display: flex;
      gap: 20px;
      .react-calendar__navigation__label {
        cursor: default;
        flex-grow: 0 !important;
      }
      .react-calendar__navigation__prev2-button,
      .react-calendar__navigation__next2-button {
        display: none;
      }
      .react-calendar__navigation__prev-button,
      .react-calendar__navigation__next-button {
        display: flex;
        align-items: center;
      }
    }

    .react-calendar__viewContainer {
      align-self: flex-end;
      width: 542px;

      .react-calendar__month-view__weekdays {
        gap: 32px;
        margin-bottom: 32px;
        font-weight: 700;
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
          &.react-calendar__month-view__weekdays__weekday--weekend {
            abbr[aria-label='토요일'] {
              color: #2400ff;
            }
            abbr[aria-label='일요일'] {
              color: #f00;
            }
          }
        }
      }

      .react-calendar__month-view__days {
        gap: 32px;
        &:first-child() {
        }
        .react-calendar__tile {
          flex: 0 0 50px !important;
          height: 50px;
        }
        .react-calendar__month-view__days__day {
          color: #c7c7c7;
          cursor: default;
        }
        .react-calendar__month-view__days__day--neighboringMonth {
          visibility: hidden;
        }
      }
    }
  `,
]

export const calendarNavigationMonth = css`
  font-weight: 700;
  margin-left: 20px;
`
