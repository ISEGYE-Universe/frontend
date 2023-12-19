import { useCallback, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import MovieContainer from './MovieContainer'
import MovieTitle from './MovieTitle'
import { MovieSliderProrps, MovieInfoType } from './type/types'
import { RightArrow, LeftArrow } from './svg'
import {
  SliderDiv,
  DotContainer,
  CurrentDot,
  Dot,
  Flex,
  LeftButton,
  RightButton,
  relative,
} from './style/Movie.Style'

const MovieSlider = ({ movieList }: MovieSliderProrps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 0 })
  const [current, setCurrent] = useState<number>(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback((embla: EmblaCarouselType) => {
    setCurrent(embla.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div css={relative}>
      <div css={SliderDiv} ref={emblaRef}>
        <div css={Flex}>
          {movieList.map((list: MovieInfoType) => (
            <MovieContainer link={list.src} key={list.title} />
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="left-arrow"
        css={LeftButton}
        onClick={scrollPrev}
      >
        <LeftArrow />
      </button>
      <button
        type="button"
        aria-label="right-arrow"
        css={RightButton}
        onClick={scrollNext}
      >
        <RightArrow />
      </button>
      <MovieTitle title={movieList[current].title} />
      <div
        css={css`
          ${Flex}
          ${DotContainer}
        `}
      >
        {movieList.map((_, idx: number) => (
          <button
            type="button"
            aria-label={`movie-dot-button-${idx + 1}`}
            key={_.title}
            onClick={() => scrollTo(idx)}
            css={css`
              ${current === idx ? CurrentDot : Dot}
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieSlider
