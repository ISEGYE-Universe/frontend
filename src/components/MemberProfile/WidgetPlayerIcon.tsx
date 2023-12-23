import { css, keyframes } from '@emotion/react'

const pulseAnimation = keyframes`
0% {
  transform: scale(1, 1);
  transform-origin: 50% 50%;
}

50% {
  transform: scale(0.93, 0.7);
  transform-origin: 50% 50%;
}

100% {
  transform: scale(1, 1);
  transform-origin: 50% 50%;
}
`

export const WidgetPlayerIcon = ({
  color,
  animate,
}: {
  color: string
  animate: boolean
}) => {
  const pulseStyle = (index: number) => {
    return css`
      ${animate
        ? css`
            animation: ${pulseAnimation} 1.25s infinite;
            animation-delay: calc(${index} * 0.15s);
          `
        : css`
            animation: none;
          `}
    `
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
    >
      <g clip-path="url(#clip0_3571_8587)">
        <path
          d="M21.332 11.7168C21.332 10.9801 21.9293 10.3828 22.666 10.3828V10.3828C23.4028 10.3828 24 10.9801 24 11.7168V14.4863C24 15.2231 23.4028 15.8203 22.666 15.8203V15.8203C21.9293 15.8203 21.332 15.2231 21.332 14.4863V11.7168Z"
          fill={color}
          css={pulseStyle(1)}
        />
        <path
          d="M0 11.7278C0 10.9915 0.596934 10.3945 1.33329 10.3945V10.3945C2.06965 10.3945 2.66658 10.9915 2.66658 11.7278V14.2704C2.66658 15.0067 2.06965 15.6037 1.33329 15.6037V15.6037C0.596934 15.6037 0 15.0067 0 14.2704V11.7278Z"
          fill={color}
          css={pulseStyle(2)}
        />
        <path
          d="M16 6.52327C16 5.7877 16.5963 5.19141 17.3319 5.19141V5.19141C18.0674 5.19141 18.6637 5.7877 18.6637 6.52327V19.4755C18.6637 20.2111 18.0674 20.8074 17.3319 20.8074V20.8074C16.5963 20.8074 16 20.2111 16 19.4755V6.52327Z"
          fill={color}
          css={pulseStyle(3)}
        />
        <path
          d="M5.33594 6.53125C5.33594 5.79559 5.93231 5.19922 6.66797 5.19922V5.19922C7.40363 5.19922 8 5.79559 8 6.53125V19.4688C8 20.2044 7.40363 20.8008 6.66797 20.8008V20.8008C5.93231 20.8008 5.33594 20.2044 5.33594 19.4688V6.53125Z"
          fill={color}
          css={pulseStyle(4)}
        />
        <path
          d="M10.6587 1.33862C10.6587 0.599321 11.258 0 11.9973 0V0C12.7366 0 13.3359 0.599322 13.3359 1.33862V24.6614C13.3359 25.4007 12.7366 26 11.9973 26V26C11.258 26 10.6587 25.4007 10.6587 24.6614V1.33862Z"
          fill={color}
          css={pulseStyle(5)}
        />
      </g>
      {/* <defs>
        <clipPath id="clip0_3571_8587">
          <rect width="24" height="26" fill="white" />
        </clipPath>
      </defs> */}
    </svg>
  )
}
