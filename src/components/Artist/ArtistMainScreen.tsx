import Image from 'next/image'

const SCREEN_MAP = {
  Ine: {
    imgSrc: 'images/main-artist/이네땅_바탕화면_1.png',
    color: '#8A2BE2',
  },
  Jingburger: {
    imgSrc: 'images/main-artist/버거땅_바탕화면_1.png',
    color: '#F0A957',
  },
  Lilpa: {
    imgSrc: 'images/main-artist/릴파땅_바탕화면_1.png',
    color: '#443965',
  },
  Jururu: {
    imgSrc: 'images/main-artist/르르땅_바탕화면_1.png',
    color: '#FF008C',
  },
  Gosegu: {
    imgSrc: 'images/main-artist/세구땅_바탕화면_1.png',
    color: '#467EC6',
  },
  VIichan: {
    imgSrc: 'images/main-artist/챠니_바탕화면_1.png',
    color: '#95C100',
  },
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
          backgroundColor:
            SCREEN_MAP[highlightedMember as keyof typeof SCREEN_MAP].color,
          borderRadius: 20,
        }}
      />
      <div
        css={{
          position: 'absolute',
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        <Image
          css={{
            borderRadius: 20,
          }}
          src={SCREEN_MAP[highlightedMember as keyof typeof SCREEN_MAP].imgSrc}
          alt="main screen image"
          width={900}
          height={500}
        />
      </div>
    </div>
  )
}
