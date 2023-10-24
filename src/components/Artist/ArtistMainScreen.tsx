import { color } from '../News/color'

const SCREEN_MAP = {
  Ine: require('assets/main-artist/이네땅_바탕화면_1.png'),
  Jingburger: require('assets/main-artist/버거땅_바탕화면_1.png'),
  Lilpa: require('assets/main-artist/릴파땅_바탕화면_1.png'),
  Jururu: require('assets/main-artist/르르땅_바탕화면_1.png'),
  Gosegu: require('assets/main-artist/세구땅_바탕화면_1.png'),
  VIichan: require('assets/main-artist/챠니_바탕화면_1.png'),
}

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
