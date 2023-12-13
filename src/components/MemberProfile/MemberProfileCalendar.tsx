import Calendar from 'react-calendar'
import { useState } from 'react'
import { NavigationLabelArgs } from 'react-calendar/dist/cjs/shared/types'
import Image from 'next/image'
import memberProfileData from '@/data/member-profile.json'
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

export const MemberProfileCalendar = ({
  memberName,
}: {
  memberName: IsedolMember
}) => {
  const [todayDate] = useState<Date>(new Date())
  const calendarData = memberProfileData[memberName].schedule
  // date만 추출한 List
  const dateList = Object.values(calendarData).map((el) => el.date)

  return (
    <div css={calendarContentContainer}>
      <Calendar
        // hydration error 해결
        locale="kr"
        // year click event 제거
        minDetail="month"
        maxDetail="month"
        css={calendarStyle(dateList)}
        value={todayDate}
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
      />
      <MemberProfileCalendarStreamList data={calendarData} />
    </div>
  )
}
