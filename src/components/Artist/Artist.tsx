import { useState } from 'react'
import { ArtistMainScreen } from './ArtistMainScreen'
import { ArtistMainScreenToggleButtonList } from './ArtistMainScreenToggleButtonList'

export const Artist = () => {
  const [highlightedMember, setHighlightedMember] = useState('Ine')
  return (
    <section>
      <span>TITLE</span>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1300, // temporary
          gap: 80,
        }}
      >
        <ArtistMainScreen highlightedMember={highlightedMember} />
        <ArtistMainScreenToggleButtonList
          onClickButton={setHighlightedMember}
          highlightedMember={highlightedMember}
        />
      </div>
    </section>
  )
}
