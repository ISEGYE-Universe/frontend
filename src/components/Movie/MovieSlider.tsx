import { css } from '@emotion/react'
import MovieContainer from "./MovieContainer"
import { TitleSmRegular } from "@/styles/Font"
import { MovieListType } from "./type/types"
import { RightArrow, LeftArrow } from "./svg"
import ArrowButton from "./ArrowButton"
import Dot from "./dot"

interface prorps {
  movieList: MovieListType
}

const MovieSlider = ({movieList}: prorps) => {
  return (
    <>
      <ArrowButton position="left">
        <LeftArrow />
      </ArrowButton>
      <div css={{
        display: 'flex',
        overflowX: "scroll",
        overflowY: "hidden",
        width: "1280px",
        height: "720px",
        borderRadius: "20px",
        marginBottom: "10px"
      }}>
        {movieList.map((list: any, idx: number) => (
          <MovieContainer
            link={list.src}
            key={idx}
          />
        ))}
      </div>
      <ArrowButton position="right">
        <RightArrow />
      </ArrowButton>
      <div css={css`
        ${TitleSmRegular} 
        margin-bottom: 20px;
      `}>{movieList[0].title}</div>
      <div css={{
        display: "flex",
        gap: "14px",
        justifyContent: "center"
      }}>
        {movieList.map((_, idx: number) => (
          <Dot key={idx}/>
        ))}
      </div>
    </>
  )
}

export default MovieSlider