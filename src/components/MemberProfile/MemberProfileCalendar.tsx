import Calendar from 'react-calendar'
import { useState } from 'react'
import {
  calendarContentContainer,
  calendarStyle,
} from './MemberProfileCalendar.css'

const addZero = (num: number) => {
  return num < 10 ? `0${num}` : num
}

export const MemberProfileCalendar = () => {
  const [value, setValue] = useState<Date>(new Date())

  return (
    <div css={calendarContentContainer}>
      <Calendar
        // hydration error 해결
        locale="kr"
        // year click event 제거
        minDetail="month"
        maxDetail="month"
        css={calendarStyle}
        value={value}
        calendarType="gregory"
        navigationLabel={({ date, label, locale, view }) =>
          `${date.getFullYear()} ${addZero(date.getMonth() + 1)}`
        }
        // 요일 표시 label 변경
        formatShortWeekday={(locale, date) =>
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
        }
        // 일 표시 format 변경
        formatDay={(locale, date) =>
          new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
          }).format(date)
        }
      />
    </div>
  )
}
