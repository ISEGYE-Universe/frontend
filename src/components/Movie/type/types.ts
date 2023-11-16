export type MovieListType = {
  title: string
  src: string
}[]

export interface MovieTitleProps {
  title: string
}

export interface MovieSliderProrps {
  movieList: MovieListType
}

export interface MovieInfoType {
  title: string
  src: string
}

export interface MovieContainerProps {
  link: string
}
