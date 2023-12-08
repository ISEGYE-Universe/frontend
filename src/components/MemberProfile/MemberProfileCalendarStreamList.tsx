import Image from 'next/image'
import {
  streamListContainer,
  streamListContentList,
  streamListContentListItem,
  streamListContentListItemDateText,
  streamListContentListItemTitleText,
} from './MemberProfileCalendarStreamList.css'

export const calendarMockData = [
  { date: '1', title: '잔잔뱅' },
  { date: '3', title: '잔잔뱅' },
  { date: '8', title: '짧뱅' },
  { date: '10', title: '버추얼르르 뱅온즈' },
  { date: '12', title: '버추얼르르 뱅온즈' },
  { date: '15', title: '잔잔뱅' },
]

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
            <span css={streamListContentListItemDateText}>{el.date}</span>
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
