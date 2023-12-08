import { LineHeight, TitleSmRegular } from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'
import { calendarMockData } from './MemberProfileCalendarStreamList'

export const calendarContentContainer = css`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  padding: 144px 62.5px 170px 8.5px;
`

export const calendarStyle = (currentMonth: string) => {
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
              abbr[aria-label='토요일'] {
                color: ${MemberProfileColor.scheduleTextBlue};
              }
              abbr[aria-label='일요일'] {
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

            // 스트리밍 진행된 날짜 하이라이트
            ${calendarMockData.map((el) => {
              return `
              abbr[aria-label='${currentMonth} ${el.date}일'] {
                color: ${MemberProfileColor.scheduleTextWhite};
                font-weight: 700;
              }  
            `
            })}
          }
          .react-calendar__month-view__days__day--neighboringMonth {
            visibility: hidden;
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
