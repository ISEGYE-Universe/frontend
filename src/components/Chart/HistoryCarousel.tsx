import { css } from '@emotion/react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useState, useEffect } from 'react'
import HistoryCard from './HistoryCard'
import { LeftButton, RightButton } from './EmblaHistoryButton'

const dummyData = [
  {
    thumbnail: '/images/chart/history-lockdown.jpg',
    category: '멜론 명예의 전당',
    title: 'LOCKDOWN',
    desc: '1,156,500 Streams',
    date: new Date('2023-06-22'),
  },
  {
    thumbnail: '/images/chart/history-another-world.jpg',
    category: '멜론 명예의 전당',
    title: 'Another World',
    desc: '1,335,900 Streams',
    date: new Date('2023-07-21'),
  },
  {
    thumbnail: '/images/chart/history-kidding.jpg',
    category: '멜론 명예의 전당',
    title: 'KIDDING',
    desc: '2,109,700 Streams',
    date: new Date('2023-08-18'),
  },
  {
    thumbnail: '/images/chart/history-lockdown.jpg',
    category: '멜론 명예의 전당',
    title: 'LOCKDOWN',
    desc: '1,156,500 Streams',
    date: new Date('2023-06-22'),
  },
  {
    thumbnail: '/images/chart/history-another-world.jpg',
    category: '멜론 명예의 전당',
    title: 'Another World',
    desc: '1,335,900 Streams',
    date: new Date('2023-07-21'),
  },
  {
    thumbnail: '/images/chart/history-kidding.jpg',
    category: '멜론 명예의 전당',
    title: 'KIDDING',
    desc: '2,109,700 Streams',
    date: new Date('2023-08-18'),
  },
]

const emblaCss = css`
  &.embla {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    .embla__container {
      display: flex;
      justify-content: space-between;
      .embla__slide {
        flex: 0 0 330px;
        min-width: 0;
        margin-right: 35px;
      }
    }
  }
`
const emblaButtonLeftCss = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &.disabled {
    opacity: 0.3;
  }
`
const emblaButtonRightCss = css`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  &.disabled {
    opacity: 0.3;
  }
`
const HistoryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // 중간 index부터 시작
    startIndex: Math.round((dummyData.length - 1) / 2),
    containScroll: false,
    loop: true,
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div css={{ position: 'relative' }}>
      <div className="embla" css={emblaCss} ref={emblaRef}>
        <div className="embla__container">
          {dummyData.map((data, i) => (
            <div className="embla__slide" key={`history-${i}`}>
              <HistoryCard
                thumbnail={data.thumbnail}
                category={data.category}
                title={data.title}
                desc={data.desc}
                date={data.date}
              ></HistoryCard>
            </div>
          ))}
        </div>
      </div>
      <div>
        <LeftButton
          css={[
            emblaButtonLeftCss,
            {
              opacity: prevBtnDisabled ? '0.3' : '1.0',
              pointerEvents: prevBtnDisabled ? 'none' : 'auto',
              transition: 'opacity 0.2s ease',
            },
          ]}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        />
        <RightButton
          css={[
            emblaButtonRightCss,
            {
              opacity: nextBtnDisabled ? '0.3' : '1.0',
              pointerEvents: nextBtnDisabled ? 'none' : 'auto',
              transition: 'opacity 0.2s ease',
            },
          ]}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  )
}

export default HistoryCarousel
