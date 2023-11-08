import { useCallback, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import MovieContainer from './MovieContainer'
import MovieTitle from './MovieTitle'
import { MovieListType } from './type/types'
import { RightArrow, LeftArrow } from './svg'

interface prorps {
  movieList: MovieListType
}

const MovieSlider = ({ movieList }: prorps) => {
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

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCurrent(emblaApi.selectedScrollSnap())
  }, [])
  console.log(current)
  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
      <div className="embla">
        <div
          css={{
            overflow: 'hidden',
            width: '1280px',
            height: '720px',
            borderRadius: '20px',
            marginBottom: '10px',
          }}
          ref={emblaRef}
        >
          <div
            css={{
              display: 'flex',
              width: '1280px',
              height: '720px',
            }}
          >
            {movieList.map((list: any, idx: number) => (
              <MovieContainer link={list.src} key={idx} />
            ))}
          </div>
        </div>
        <button
          css={{ position: 'absolute', top: '335px', left: '40px' }}
          onClick={scrollPrev}
        >
          <LeftArrow />
        </button>
        <button
          css={{ position: 'absolute', top: '335px', right: '40px' }}
          onClick={scrollNext}
        >
          <RightArrow />
        </button>
        <MovieTitle title={movieList[current].title} />
        <div
          css={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
          }}
        >
          {movieList.map((_, idx: number) => (
            <div
              key={idx}
              onClick={() => scrollTo(idx)}
              css={css`
                ${current === idx
                  ? 'background-color: #8D8D8D; width: 20px;'
                  : 'background-color: #D1D1D1; width: 10px;'}
                height: 10px;
                border-radius: 5px;
              `}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieSlider
