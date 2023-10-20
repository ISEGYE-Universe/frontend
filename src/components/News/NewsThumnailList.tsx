import { NewsThumnail } from './NewsThumnail'

export const NewsThumnailList = () => {
  return (
    <div
      css={{
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <NewsThumnail>
        <span>Thumnail Inner content</span>
      </NewsThumnail>
      <NewsThumnail>
        <span>Thumnail Inner content</span>
      </NewsThumnail>
      <NewsThumnail>
        <span>Thumnail Inner content</span>
      </NewsThumnail>
    </div>
  )
}
