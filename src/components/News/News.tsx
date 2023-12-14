import { NewsThumnailList } from './NewsThumnailList'
import { NewsWeeklyEventBannerList } from './NewsWeeklyEventBannerList'

export const News = () => {
  return (
    <section>
      <span>TITLE</span>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          width: 1300, // temporary
          overflow: 'hidden',
        }}
      >
        <NewsThumnailList />
        <NewsWeeklyEventBannerList />
      </div>
    </section>
  )
}
