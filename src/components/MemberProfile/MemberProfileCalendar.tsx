import Calendar from 'react-calendar'
import { useState } from 'react'
import { NavigationLabelArgs } from 'react-calendar/dist/cjs/shared/types'
import Image from 'next/image'
import memberProfileData from '@/data/member-profile.json'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { addZero } from '@/utils/FormatTime'
import {
  calendarContentContainer,
  calendarNavigationMonth,
  calendarStyle,
} from './MemberProfileCalendar.css'
import { MemberProfileCalendarStreamList } from './MemberProfileCalendarStreamList'

const itemsPerView = 7

// Date -> yyyy-mm-dd 포맷으로 변경해주는 함수
const dateToStringDate = (date: Date) => {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate(),
  )}`
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

  // 캐러셀
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      // 중간 index부터 시작
      startIndex: 0,
      // scroll trailing space 제거
      containScroll: 'trimSnaps',
      axis: 'y',
      // 스크롤의 양이 많을 때 snap되지 않고 자유롭게 움직이게 하기 위함
      skipSnaps: true,
      align: 'center',
    },
    [WheelGesturesPlugin()],
  )

  const scrollToHandler = (page: number) => {
    if (emblaApi) {
      const len = calendarData.length - 1
      const boundaryValue = Math.floor(itemsPerView / 2)
      const minPageThld = 0 + Math.floor(itemsPerView / 2)
      const maxPageThld = len - Math.floor(itemsPerView / 2)

      if (page <= minPageThld) {
        emblaApi.scrollTo(0)
      } else if (page >= maxPageThld) {
        emblaApi.scrollTo(maxPageThld)
      } else {
        emblaApi.scrollTo(page - boundaryValue)
      }
    }
  }

  // 강조 표시
  const triggerScheduleAnimation = (index: number) => {
    const targetRef = emblaApi?.slideNodes()[index]
    targetRef?.classList.add('focused')
    setTimeout(() => {
      targetRef?.classList.remove('focused')
    }, 500)
  }

  return (
    <div css={calendarContentContainer}>
      <Calendar
        locale="en"
        // year click event 제거
        minDetail="month"
        maxDetail="month"
        css={calendarStyle}
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
        //
        onClickDay={(date) => {
          const index = calendarData.findIndex(
            (el) => el.date === dateToStringDate(date),
          )
          if (index !== -1) {
            scrollToHandler(index)
            triggerScheduleAnimation(index)
          }
        }}
        // 특정 날짜 강조 클래스
        tileClassName={({ date }) => {
          const index = calendarData.findIndex(
            (el) => el.date === dateToStringDate(date),
          )
          if (index !== -1) {
            return 'highlight'
          }
          return ''
        }}
      />
      <MemberProfileCalendarStreamList
        memberName={memberName as IsedolMember}
        data={calendarData}
        emblaRef={emblaRef}
        emblaApi={emblaApi}
      />
    </div>
  )
}
