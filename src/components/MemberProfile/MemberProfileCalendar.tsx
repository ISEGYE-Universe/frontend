import Calendar from 'react-calendar'
import { useState } from 'react'
import { NavigationLabelArgs } from 'react-calendar/dist/cjs/shared/types'
import Image from 'next/image'
import {
  calendarContentContainer,
  calendarNavigationMonth,
  calendarStyle,
} from './MemberProfileCalendar.css'
import { MemberProfileCalendarStreamList } from './MemberProfileCalendarStreamList'

// 한 자리 수 앞에 leading zero 붙여주는 함수
const addZero = (num: number) => {
  return num < 10 ? `0${num}` : num
}

// Date 객체 -> yyyy년 mm월으로 변경 해주는 함수
const formatYearMonth = (date: Date) => {
  return `${date.getFullYear()}년 ${addZero(date.getMonth() + 1)}월`
}

// navigation label 스타일링을 위한 ReactNode를 반환
const navigationLabelNode = (prop: NavigationLabelArgs) => {
  const { date } = prop
  return (
    <>
      <span>{date.getFullYear()}</span>
      <span css={calendarNavigationMonth}>{addZero(date.getMonth() + 1)}</span>
    </>
  )
}

export const MemberProfileCalendar = () => {
  const [value] = useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = useState<string>(
    formatYearMonth(value),
  )

  return (
    <div css={calendarContentContainer}>
      <Calendar
        // hydration error 해결
        locale="kr"
        // year click event 제거
        minDetail="month"
        maxDetail="month"
        css={calendarStyle(currentMonth)}
        value={value}
        calendarType="gregory"
        // navigation 연, 월 표시 Label 커스텀
        navigationLabel={(prop) => {
          return navigationLabelNode(prop)
        }}
        // navigation 좌,우 버튼 커스텀
        prevLabel={
          <Image
            src="/images/icon/member-profile/keyboard-arrow-left.svg"
            alt="left icon"
            width={8}
            height={12}
          />
        }
        nextLabel={
          <Image
            src="/images/icon/member-profile/keyboard-arrow-right.svg"
            alt="right icon"
            width={8}
            height={12}
          />
        }
        // 요일 표시 label 커스텀
        formatShortWeekday={(locale, date) =>
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
        }
        // 일 표시 format 커스텀
        formatDay={(locale, date) =>
          new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
          }).format(date)
        }
        onActiveStartDateChange={({ activeStartDate }) => {
          if (activeStartDate) {
            setCurrentMonth(formatYearMonth(activeStartDate))
          }
        }}
      />
      <MemberProfileCalendarStreamList />
    </div>
  )
}
