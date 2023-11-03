import Image from 'next/image'

import { useState } from 'react'

import { NewsThumnail } from './NewsThumnail'

const DUMMY_THUMNAIL_LIST = [
  {
    id: 1,
    dummyString: 'Thumnail Inner 1',
  },
  {
    id: 2,
    dummyString: 'Thumnail Inner 2',
  },
  {
    id: 3,
    dummyString: 'Thumnail Inner 3',
  },
]

const dx = [-0.5, 0.5, 1]

export const NewsThumnailList = () => {
  const [listIndex, setListIndex] = useState(1)

  const handleLeftButtonClick = () => {
    if (listIndex < 1) return
    setListIndex((prev) => --prev)
  }

  const handleRightButtonClick = () => {
    if (listIndex > 1) return
    setListIndex((prev) => ++prev)
  }

  return (
    <div
      css={{
        position: 'relative',
      }}
    >
      <div
        css={{
          position: 'absolute',
          width: 1300,
          height: 500,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 60,
          paddingRight: 60,
          zIndex: 10,
        }}
      >
        <button
          css={{
            width: 50,
            height: 50,
            backgroundColor: '#252525',
            borderRadius: 50,
          }}
          onClick={handleLeftButtonClick}
        >
          <Image
            src="images/icon/banner-button-left-arrow.svg"
            alt="left-arrow"
            width={14}
            height={24}
          />
        </button>
        <button
          css={{
            width: 50,
            height: 50,
            backgroundColor: '#252525',
            borderRadius: 50,
          }}
          onClick={handleRightButtonClick}
        >
          <Image
            src="images/icon/banner-button-right-arrow.svg"
            alt="right-arrow"
            width={14}
            height={24}
          />
        </button>
      </div>
      <div
        css={{
          display: 'flex',
          width: 1530,
          gap: 10,
          overflowX: 'hidden',
          transition: 'transform 0.2s ease-in-out',
          transform: `translateX(-${dx[listIndex] * 220}px)`,
        }}
      >
        {DUMMY_THUMNAIL_LIST.map((thumnail) => (
          <NewsThumnail key={thumnail.id}>
            <span>{thumnail.dummyString}</span>
          </NewsThumnail>
        ))}
      </div>
    </div>
  )
}
