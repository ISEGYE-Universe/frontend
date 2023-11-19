import React, { PropsWithChildren } from 'react'

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const LeftButton = ({ ...restProps }: PropType) => {
  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 301">
          <circle id="Ellipse 48" cx="25" cy="25" r="25" fill="#909090" />
          <path
            id="&#236;&#153;&#188;"
            d="M27.7856 37C27.466 37 27.1624 36.8578 26.9387 36.609L17.3515 25.9463C17.1278 25.6975 17 25.3599 17 25.0044C17 24.649 17.1278 24.3114 17.3515 24.0626L26.9387 13.3999C27.4021 12.8667 28.1691 12.8667 28.6325 13.3999C29.1119 13.9152 29.1119 14.7682 28.6325 15.2836L19.8921 25.0044L28.6485 34.7253C28.8722 34.9741 29 35.3117 29 35.6672C29 36.0226 28.8722 36.3602 28.6485 36.609C28.4248 36.8578 28.1212 37 27.8016 37L27.7856 37Z"
            fill="#FDFDFD"
          />
        </g>
      </svg>
    </button>
  )
}

export const RightButton = ({ ...restProps }: PropType) => {
  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 302">
          <circle
            id="Ellipse 48"
            cx="25"
            cy="25"
            r="25"
            transform="matrix(-1 0 0 1 50 0)"
            fill="#909090"
          />
          <path
            id="&#236;&#153;&#188;"
            d="M22.2144 37C22.534 37 22.8376 36.8578 23.0613 36.609L32.6485 25.9463C32.8722 25.6975 33 25.3599 33 25.0044C33 24.649 32.8722 24.3114 32.6485 24.0626L23.0613 13.3999C22.5979 12.8667 21.8309 12.8667 21.3675 13.3999C20.8881 13.9152 20.8881 14.7682 21.3675 15.2836L30.1079 25.0044L21.3515 34.7253C21.1278 34.9741 21 35.3117 21 35.6672C21 36.0226 21.1278 36.3602 21.3515 36.609C21.5752 36.8578 21.8788 37 22.1984 37L22.2144 37Z"
            fill="#FDFDFD"
          />
        </g>
      </svg>
    </button>
  )
}
