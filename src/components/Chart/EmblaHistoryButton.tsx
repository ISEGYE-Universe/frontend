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
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none"
      >
        <circle cx="28.5" cy="28.5" r="28.5" fill="#777777" />
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
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none"
      >
        <circle cx="28.5" cy="28.5" r="28.5" fill="#777777" />
      </svg>
    </button>
  )
}
