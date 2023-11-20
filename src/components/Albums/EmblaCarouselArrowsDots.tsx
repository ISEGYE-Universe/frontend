import React, { PropsWithChildren } from 'react'

interface PropInterface
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  onClick: () => void
  className: string
}

export const DotButton: React.FC<PropInterface> = (props: PropInterface) => {
  const { children, onClick, className } = props

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}
