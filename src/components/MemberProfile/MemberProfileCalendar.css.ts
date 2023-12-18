import { LineHeight, TitleSmRegular } from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'

export const calendarContentContainer = css`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  padding: 144px 62.5px 170px 8.5px;
`

export const calendarStyle = (dateList: string[]) => {
  return [
    TitleSmRegular,
    LineHeight,
    css`
      display: flex;
      flex-direction: column;
      color: ${MemberProfileColor.scheduleTextWhite};

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
              abbr[aria-label='Saturday'] {
                color: ${MemberProfileColor.scheduleTextBlue};
              }
              abbr[aria-label='Sunday'] {
                color: ${MemberProfileColor.scheduleTextRed};
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
            color: ${MemberProfileColor.scheduleTextGrey};
            cursor: default;

            &.highlight {
              color: ${MemberProfileColor.scheduleTextWhite};
              font-weight: 700;
              cursor: pointer;
            }
          }
          .react-calendar__month-view__days__day--neighboringMonth {
            visibility: hidden;
          }
          // 현재 날짜
          .react-calendar__tile--active {
            abbr {
              position: relative;
              &::after {
                position: absolute;
                content: '';
                width: 100%;
                bottom: -8px;
                left: 0;
                height: 2px;
                background-color: ${MemberProfileColor.scheduleTextWhite};
              }
            }
          }
        }
      }
    `,
  ]
}

export const calendarNavigationMonth = css`
  font-weight: 700;
  margin-left: 20px;
`
