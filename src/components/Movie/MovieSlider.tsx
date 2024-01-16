import { useCallback, useState, useEffect, useRef } from 'react'
import { css } from '@emotion/react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube'
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
} from './style/Movie.Style'

const MovieSlider = ({ movieList }: MovieSliderProrps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 0 })
  const [current, setCurrent] = useState<number>(0)
  const ref = useRef<YouTubePlayer | null>(null)

  const scrollPrev = useCallback(async () => {
    if (emblaApi) emblaApi.scrollPrev()
    // 플레이어가 재생 상태면 1
    if ((await ref.current?.getPlayerState()) === 1) ref.current?.pauseVideo()
  }, [emblaApi])

  const scrollNext = useCallback(async () => {
    if (emblaApi) emblaApi.scrollNext()
    // 플레이어가 재생 상태면 1
    if ((await ref.current?.getPlayerState()) === 1) ref.current?.pauseVideo()
  }, [emblaApi])

  const scrollTo = useCallback(
    async (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
      // 플레이어가 재생 상태면 1
      if ((await ref.current?.getPlayerState()) === 1) ref.current?.pauseVideo()
    },
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

  const onPlayerPlay: YouTubeProps['onPlay'] = (event) => {
    ref.current = event.target
  }

  const opts: YouTubeProps['opts'] = {
    width: '1280',
    height: '720',
  }

  return (
    <div>
      <div css={SliderDiv} ref={emblaRef}>
        <div css={Flex}>
          {movieList.map((list: MovieInfoType) => (
            <YouTube
              videoId={list.src}
              opts={opts}
              onPlay={onPlayerPlay}
              key={list.title}
            />
          ))}
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
      </div>
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
