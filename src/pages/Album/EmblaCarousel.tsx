/*
 * 23.10.17
 * Heo0
 * EmblaCarousel Library
 */
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { DotButton } from './EmblaCarouselArrowsDots'
import { css } from '@emotion/react'

type PropType = {
  slides: ReactNode[]
  options?: EmblaOptionsType
}

//* css
const viewport = css`
  overflow: hidden;
`
const container = css`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
`
const emblaCSS = css`
  padding: 1.6rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;
  --slide-height: 19rem;
  --background-site: rgb(0, 0, 0);
  --brand-primary: rgb(138, 180, 248);
  --brand-secondary: rgb(193, 168, 226);
`
const emblaDotDiv = css`
  z-index: 1;
  bottom: 1.6rem;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const albums = css`
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
`

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props //* props options and slides
  const [emblaRef, embla] = useEmblaCarousel(options, [ClassNames()])
  //* zustand로 변환 필요
  const [selectedIndex, setSelectedindex] = useState(0) //* Showing Index
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]) //* Scroll snap Point

  const ScrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla],
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedindex(embla.selectedScrollSnap())
  }, [embla, setSelectedindex])

  //* 변환 필요?
  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div className="embla" css={emblaCSS}>
      <div className="embla__viewport" ref={emblaRef} css={viewport}>
        <div className="embla__container" css={container}>
          {slides.map((slide, index) => (
            <div
              key={index}
              css={albums}
              className="embla__slide embla__class-names"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots" css={emblaDotDiv}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => ScrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : '',
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
