import Image from 'next/image'
import {
  streamListContainer,
  streamListContentList,
  streamListContentListItem,
  streamListContentListItemDateText,
  streamListContentListItemTitleText,
} from './MemberProfileCalendarStreamList.css'

export const calendarMockData = [
  { date: '2023-12-01', title: '잔잔뱅' },
  { date: '2023-12-03', title: '잔잔뱅' },
  { date: '2023-12-08', title: '짧뱅' },
  { date: '2023-12-10', title: '버추얼르르 뱅온즈' },
  { date: '2023-12-12', title: '버추얼르르 뱅온즈' },
  { date: '2023-12-15', title: '잔잔뱅' },
]

const parseDateString = (date: string) => {
  const dateObj = new Date(date)
  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
  }
}

export const MemberProfileCalendarStreamList = () => {
  return (
    <div css={streamListContainer}>
      <button type="button">
        <Image
          src="/images/icon/member-profile/keyboard-arrow-up.svg"
          alt="up icon"
          width={16}
          height={10}
        />
      </button>
      <ul css={streamListContentList}>
        {calendarMockData.map((el) => (
          <li css={streamListContentListItem} key={el.date}>
            <span css={streamListContentListItemDateText}>
              {parseDateString(el.date).day}
            </span>
            <span css={streamListContentListItemTitleText}>{el.title}</span>
          </li>
        ))}
      </ul>
      <button type="button">
        <Image
          src="/images/icon/member-profile/keyboard-arrow-down.svg"
          alt="down icon"
          width={16}
          height={10}
        />
      </button>
    </div>
  )
}
