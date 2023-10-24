import { color } from '../News/color'

type ArtistMainScreenProps = {
  highlightedMember: string
}

export const ArtistMainScreen = ({
  highlightedMember,
}: ArtistMainScreenProps) => {
  return (
    <div css={{ position: 'relative' }}>
      <div
        css={{
          position: 'absolute',
          width: 400,
          height: 400,
          backgroundColor: 'white',
          borderRadius: 20,
        }}
      />
      <div
        css={{
          position: 'absolute',
          marginTop: 20,
          marginLeft: 20,
          width: 900,
          height: 500,
          backgroundColor: color.ElementBackgroundGrey,
          borderRadius: 20,
        }}
      >
        <span>Inner Screen Image</span>
      </div>
    </div>
  )
}
