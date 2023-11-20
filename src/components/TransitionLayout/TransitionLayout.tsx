import { css } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface TransitionLayoutProps {
  children: React.ReactNode
  duration?: number
}

export const TransitionLayout = (prop: TransitionLayoutProps) => {
  const { children, duration } = prop
  const router = useRouter()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: 'tween',
          duration: duration || 0.3,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
