import { NewsThumnailList } from './NewsThumnailList'
import { NewsWeeklyEventBannerList } from './NewsWeeklyEventBannerList'
import MainTitle from '../MainTitle'

export const News = () => {
  return (
    <section>
      <MainTitle width="200" title="ISEGYE IDOL NEWS" />
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
