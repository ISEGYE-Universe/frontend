import { NewsWeeklyEventBanner } from './NewsWeeklyEventBanner'

const DUMMY_EVENT_BANNER_LIST = [
  {
    id: 1,
    href: '/',
    dummyString: 'Event Banner Inner 1',
  },
  {
    id: 2,
    href: '/',
    dummyString: 'Event Banner Inner 2',
  },
  {
    id: 3,
    href: '/',
    dummyString: 'Event Banner Inner 3',
  },
  {
    id: 4,
    href: '/',
    dummyString: 'Event Banner Inner 4',
  },
  {
    id: 5,
    href: '/',
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
        <NewsWeeklyEventBanner key={eventBanner.id} href={eventBanner.href}>
          <span>{eventBanner.dummyString}</span>
        </NewsWeeklyEventBanner>
      ))}
    </div>
  )
}
