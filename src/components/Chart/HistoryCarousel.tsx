import { css } from '@emotion/react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useState, useEffect } from 'react'
import HistoryCard from './HistoryCard'
import { LeftButton, RightButton } from './EmblaHistoryButton'

const dummyData = [
  {
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/925a/41b7/10ed984efee532bda66c68d8a201b0c0?Expires=1699833600&Signature=MkvP1In2hlZjc5FNVg-betXqkzQ6PtyX9SLgyHBW9NoA3tFgCZ5OaVNkM6iG1RXlcjTwF0Jg3nXppfZC8NOEfhMNkoyydQAod0WuOfwhTTzyiTGCfphpjzdYdJ642mIi7fIxyD70Ux5TQfHC-oqGXlcMJMMdgwtAK9A0Rt8zupOoyal5GLUhRYwaGGD-8SVhr7hCh5z6KfZrthML749RTQlSpalu80GwpuEQ7CGJi9cKPjR24vwPgIhng-~68~E3iYcqu1ovxACW-cWBEW02Tf7kuhsLxYCeAMr~8rrfU1ZkOW54nH4nzSH9OkMlVKawflnLewtCQIzN5KF~8P6UUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    category: '멜론 명예의 전당',
    title: 'LOCKDOWN',
    desc: '1,156,500 Streams',
    date: new Date('2023-06-22'),
  },
  {
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/676a/b97f/2b9a0172dd0c636c3a84a9a5ca48d9b8?Expires=1699833600&Signature=RRuzkcpkjPvTEZz45wNZgNR2w-uqLil86wZh7gl2CIKEGLj0ArNnTedK9kA5p-w6fywRauW-ijAT4ldSE-4Me9Cm~m0u4Fcs1BcHLZwM1AqDjc-0M5XdSfQXtXfgHzzQHaztPngqfGHnJbVFFd6AnEy8aTef6m44CYZRqh7f9lFyhf2BVjgOWlkJ~ieMifnuQ~pF3SyS-tIhVU0P58wfBM8MEly9xVNxId4DDGaQgb-lqUnTeNcYDr73ocFM4njl5DnvlnnjnZdjBnbcBHT~lxsUF~S7gYVlUbPF1pPlV4zyLduPyXDAI5CARoCA3MF2unV9G4hPr4ijMK~aCIIPKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    category: '멜론 명예의 전당',
    title: 'Another World',
    desc: '1,335,900 Streams',
    date: new Date('2023-07-21'),
  },
  {
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/37de/77c9/9bbbd4f02b074f2d4a470e922fb7c776?Expires=1699833600&Signature=U3A2oLDDYq8PjZzTrktFBM-o17~HvRhBvACJa~somnKCn8bzGe7vYRcFc7G9MggDhVbPwszYw2x5lCdrITvzTKHH7~EshPY04YWIObCyDgxa~U-jyhrOaavNPTt6oSrhcTstFxfK0QGb~SnF~~zGqp3a5Lh3qnW35TO2730rIEU7NLUmg~utdvP5jHvfYpj6bSKK2CN7tcR-XE4swGxI571g1ek2bw61-bk8O~0CFdzT6QSZ7flKElLhC-exDzomMdll6KVCQQNt3oEhNNIHBHT7Ka6z8Knt9XgpdwMGzYbYAahbCHsqYD2qmmQ9ICq32fCkQApdEqHn3UB0ocjogA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
    background: #f6f6f6;
    padding: 40px 42px 48px;
    overflow: hidden;
    .embla__container {
      display: flex;
      .embla__slide {
        flex: 0 0 35%;
        min-width: 0;
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
