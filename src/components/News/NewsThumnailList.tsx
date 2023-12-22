import Image from 'next/image'

import { useCallback } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import mainBanner from '@/data/main-news/main-event-banner.json'

import { RightArrow, LeftArrow } from '@/components/Movie/svg'

import { NewsThumnail } from './NewsThumnail'

export const NewsThumnailList = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 1 })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div
      css={{
        position: 'relative',
      }}
    >
      <div
        css={{
          position: 'absolute',
          width: 1300,
          height: 500,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 60,
          paddingRight: 60,
          zIndex: 10,
        }}
      >
        <button
          type="button"
          aria-label="left-arrow"
          css={{
            width: 50,
            height: 50,
            backgroundColor: '#252525',
            borderRadius: 50,
            justifyContent: 'flex-end',
          }}
          onClick={scrollPrev}
        >
          <LeftArrow />
        </button>
        <button
          type="button"
          aria-label="right-arrow"
          css={{
            width: 50,
            height: 50,
            backgroundColor: '#252525',
            borderRadius: 50,
          }}
          onClick={scrollNext}
        >
          <RightArrow />
        </button>
      </div>
      <div
        css={{
          overflow: 'hidden',
        }}
        ref={emblaRef}
      >
        <div
          css={{
            display: 'flex',
          }}
        >
          {mainBanner.map((thumnail) => (
            <NewsThumnail key={thumnail.id}>
              <Image
                src={thumnail.ImageSrc}
                alt="Main Event Banner"
                width={500}
                height={500}
              />
            </NewsThumnail>
          ))}
          {mainBanner.map((thumnail) => (
            <NewsThumnail key={thumnail.id * 2}>
              <Image
                src={thumnail.ImageSrc}
                alt="Main Event Banner"
                width={500}
                height={500}
              />
            </NewsThumnail>
          ))}
        </div>
      </div>
    </div>
  )
}
