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

export const NewsThumnailList = () => {
  return (
    <div
      css={{
        display: 'flex',
        gap: 10,
        overflowX: 'scroll', // temporary
      }}
    >
      {DUMMY_THUMNAIL_LIST.map((thumnail) => (
        <NewsThumnail key={thumnail.id}>
          <span>{thumnail.dummyString}</span>
        </NewsThumnail>
      ))}
    </div>
  )
}
