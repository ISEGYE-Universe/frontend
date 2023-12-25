import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Link from 'next/link'
import memberProfileData from '@/data/member-profile.json'
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

interface MemberProfileCalendarStreamListType {
  memberName: IsedolMember
  data: MemberProfile.MemberSchedule[]
  emblaRef: EmblaViewportRefType
  emblaApi: EmblaCarouselType | undefined
}

export const MemberProfileCalendarStreamList = ({
  memberName,
  data,
  emblaRef,
  emblaApi,
}: MemberProfileCalendarStreamListType) => {
  // 다시보기 링크
  const archiveUrl =
    memberProfileData[memberName]?.memberInformation?.socialMedia.youtube
      .archiveUrl

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
            <li className="embla__slide" key={el.date}>
              <Link
                css={streamListContentListItem}
                href={el.link || archiveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span css={streamListContentListItemDateText}>
                  {parseDateString(el.date).day}
                </span>
                <span css={streamListContentListItemTitleText}>{el.title}</span>
              </Link>
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
