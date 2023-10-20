import { NewsHeader } from './NewsHeader'

export const News = () => {
  return (
    <div>
      <span>TITLE</span>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          width: 1300, // temporary
        }}
      >
        <NewsHeader />
        <span>News Thumnail List</span>
        <span>News Focus List</span>
      </div>
    </div>
  )
}
