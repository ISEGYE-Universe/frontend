import { NewsHeader } from './NewsHeader'
import { NewsThumnailList } from './NewsThumnailList'
import { NewsWeeklyEventBannerList } from './NewsWeeklyEventBannerList'

export function News() {
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
        <NewsHeader />
        <NewsThumnailList />
        <NewsWeeklyEventBannerList />
      </div>
    </section>
  )
}
