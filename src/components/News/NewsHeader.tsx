import { NewsHeaderButtonList } from './NewsHeaderButtonList'
import { color } from './color'

export const NewsHeader = () => {
  return (
    <div
      css={{
        height: 140,
        backgroundColor: color.ElementBackgroundGrey,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>IMG1</span>
      <span>IMG2</span>
      <NewsHeaderButtonList />
    </div>
  )
}
