import { css } from '@emotion/react'

type ArrowButtonProps = {
  children: JSX.Element
  position: string
}

const ArrowButton = ({ children, position }: ArrowButtonProps) => {
  const buttonPosition = css`
    ${position === 'right' ? 'right: 40px;' : 'left: 40px;'}
  `

  return (
    <button
      css={css`
        position: absolute;
        top: 335px;
        ${buttonPosition}
      `}
    >
      {children}
    </button>
  )
}

export default ArrowButton
