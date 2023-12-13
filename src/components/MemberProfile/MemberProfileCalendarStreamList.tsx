import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
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

type EmblaViewportRefType = <ViewportElement extends HTMLElement>(
  instance: ViewportElement | null,
) => void

export const MemberProfileCalendarStreamList = ({
  data,
  emblaRef,
  emblaApi,
}: {
  data: MemberProfile.MemberSchedule[]
  emblaRef: EmblaViewportRefType
  emblaApi: EmblaCarouselType | undefined
}) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true)
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  const onSelect = useCallback((emblaApiProp: EmblaCarouselType) => {
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
