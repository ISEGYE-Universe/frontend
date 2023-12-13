import Image from 'next/image'
import {
  streamListContainer,
  streamListContentList,
  streamListContentListItem,
  streamListContentListItemDateText,
  streamListContentListItemTitleText,
} from './MemberProfileCalendarStreamList.css'

const parseDateString = (date: string) => {
  const dateObj = new Date(date)
  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
  }
}

export const MemberProfileCalendarStreamList = ({
  data,
}: {
  data: MemberProfile.MemberSchedule[]
}) => {
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
        {data.map((el) => (
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
