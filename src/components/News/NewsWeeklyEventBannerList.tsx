import Image from 'next/image'

import weeklyBanner from '@/data/main-news/weekly-event-banner.json'

import { NewsWeeklyEventBanner } from './NewsWeeklyEventBanner'

export const NewsWeeklyEventBannerList = () => {
  return (
    <div
      css={{
        display: 'flex',
        gap: 10,
      }}
    >
      {weeklyBanner.map((eventBanner) => (
        <NewsWeeklyEventBanner key={eventBanner.id} href={eventBanner.href}>
          <Image
            src={eventBanner.ImageSrc}
            alt="Weekly Event Banner"
            width={252}
            height={380}
          />
        </NewsWeeklyEventBanner>
      ))}
    </div>
  )
}
