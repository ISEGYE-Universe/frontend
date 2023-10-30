import { NewsHeader } from './NewsHeader'
import { NewsThumnailList } from './NewsThumnailList'
import { NewsWeeklyEventBannerList } from './NewsWeeklyEventBannerList'

export const News = () => {
  return (
    <div>
      <span>TITLE</span>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          width: 1300, // temporary
        }}
      >
        <NewsHeader />
        <NewsThumnailList />
        <NewsWeeklyEventBannerList />
      </div>
    </div>
  )
}
