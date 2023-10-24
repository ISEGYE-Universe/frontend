import { ArtistMainScreen } from './ArtistMainScreen'
import { ArtistMainScreenToggleButtonList } from './ArtistMainScreenToggleButtonList'

export const Artist = () => {
  return (
    <div>
      <span>TITLE</span>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1300, // temporary
        }}
      >
        <ArtistMainScreen highlightedMember="Ine" />
        <ArtistMainScreenToggleButtonList />
      </div>
    </div>
  )
}
