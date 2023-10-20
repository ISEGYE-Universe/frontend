import { NewsWeeklyEventBanner } from './NewsWeeklyEventBanner'

const DUMMY_EVENT_BANNER_LIST = [
  {
    id: 1,
    dummyString: 'Event Banner Inner 1',
  },
  {
    id: 2,
    dummyString: 'Event Banner Inner 2',
  },
  {
    id: 3,
    dummyString: 'Event Banner Inner 3',
  },
  {
    id: 4,
    dummyString: 'Event Banner Inner 4',
  },
  {
    id: 5,
    dummyString: 'Event Banner Inner 5',
  },
]

export const NewsWeeklyEventBannerList = () => {
  return (
    <div
      css={{
        display: 'flex',
        gap: 10,
      }}
    >
      {DUMMY_EVENT_BANNER_LIST.map((eventBanner) => (
        <NewsWeeklyEventBanner key={eventBanner.id}>
          <span>{eventBanner.dummyString}</span>
        </NewsWeeklyEventBanner>
      ))}
    </div>
  )
}
