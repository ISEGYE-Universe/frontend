import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'

import { useCallback } from 'react'
import { NewsThumnail } from './NewsThumnail'

const DUMMY_THUMNAIL_LIST = [
  {
    id: 1,
    dummyString: 'Thumnail Inner 1',
  },
  {
    id: 2,
    dummyString: 'Thumnail Inner 2',
  },
  {
    id: 3,
    dummyString: 'Thumnail Inner 3',
  },
]

export function NewsThumnailList() {
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
          css={{
            width: 50,
            height: 50,
            backgroundColor: '#252525',
            borderRadius: 50,
          }}
          onClick={scrollPrev}
        >
          <Image
            src="images/icon/banner-button-left-arrow.svg"
            alt="left-arrow"
            width={14}
            height={24}
          />
        </button>
        <button
          css={{
            width: 50,
            height: 50,
            backgroundColor: '#252525',
            borderRadius: 50,
          }}
          onClick={scrollNext}
        >
          <Image
            src="images/icon/banner-button-right-arrow.svg"
            alt="right-arrow"
            width={14}
            height={24}
          />
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
          {DUMMY_THUMNAIL_LIST.map((thumnail) => (
            <NewsThumnail key={thumnail.id}>
              <span>{thumnail.dummyString}</span>
            </NewsThumnail>
          ))}
          {DUMMY_THUMNAIL_LIST.map((thumnail) => (
            <NewsThumnail key={thumnail.id * 2}>
              <span>{thumnail.dummyString}</span>
            </NewsThumnail>
          ))}
        </div>
      </div>
    </div>
  )
}
