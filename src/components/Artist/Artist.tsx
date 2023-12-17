import { useState } from 'react'
import { ArtistMainScreen } from './ArtistMainScreen'
import { ArtistMainScreenToggleButtonList } from './ArtistMainScreenToggleButtonList'
import MainTitle from '../MainTitle'

export const Artist = () => {
  const [highlightedMember, setHighlightedMember] = useState('Ine')
  return (
    <section>
      <MainTitle width="80" title="ARTIST" />
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1300,
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
