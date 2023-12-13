import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { EmblaCarouselType } from 'embla-carousel'
import {
  streamListButton,
  streamListCarousel,
  streamListContainer,
  streamListContentListItem,
  streamListContentListItemDateText,
  streamListContentListItemTitleText,
} from './MemberProfileCalendarStreamList.css'

const parseDateString = (date: string) => {
  const dateObj = new Date(date)
  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
  }
}

export const MemberProfileCalendarStreamList = ({
  data,
}: {
  data: MemberProfile.MemberSchedule[]
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      // 중간 index부터 시작
      startIndex: 0,
      // scroll trailing space 제거
      containScroll: 'trimSnaps',
      axis: 'y',
      slidesToScroll: 3,
      // 스크롤의 양이 많을 때 snap되지 않고 자유롭게 움직이게 하기 위함
      skipSnaps: true,
      align: 'start',
    },
    [WheelGesturesPlugin()],
  )
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true)
  // const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  const onSelect = useCallback((emblaApiProp: EmblaCarouselType) => {
    // setSelectedIndex(emblaApiProp.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApiProp.canScrollPrev())
    setNextBtnDisabled(!emblaApiProp.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div css={streamListContainer}>
      {/* <button type="button">
        <Image
          src="/images/icon/member-profile/keyboard-arrow-up.svg"
          alt="up icon"
          width={16}
          height={10}
        />
      </button>
      <ul css={streamListContentList}>
        {data.map((el) => (
          <li css={streamListContentListItem} key={el.date}>
            <span css={streamListContentListItemDateText}>
              {parseDateString(el.date).day}
            </span>
            <span css={streamListContentListItemTitleText}>{el.title}</span>
          </li>
        ))}
      </ul>
      <button type="button">
        <Image
          src="/images/icon/member-profile/keyboard-arrow-down.svg"
          alt="down icon"
          width={16}
          height={10}
        />
      </button> */}
      <button
        type="button"
        css={streamListButton(prevBtnDisabled)}
        onClick={scrollPrev}
      >
        <Image
          src="/images/icon/member-profile/keyboard-arrow-up.svg"
          alt="up icon"
          width={16}
          height={10}
        />
      </button>
      <div className="embla" css={streamListCarousel} ref={emblaRef}>
        <ul className="embla__container">
          {data.map((el) => (
            <li
              css={streamListContentListItem}
              className="embla__slide"
              key={el.date}
            >
              <span css={streamListContentListItemDateText}>
                {parseDateString(el.date).day}
              </span>
              <span css={streamListContentListItemTitleText}>{el.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        css={streamListButton(nextBtnDisabled)}
        onClick={scrollNext}
      >
        <Image
          src="/images/icon/member-profile/keyboard-arrow-down.svg"
          alt="down icon"
          width={16}
          height={10}
        />
      </button>
    </div>
  )
}
