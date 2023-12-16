import Image from 'next/image'

import wallpaper from '@/data/main-artist/artist-wallpaper.json'

type ArtistMainScreenProps = {
  highlightedMember: string
}

export const ArtistMainScreen = ({
  highlightedMember,
}: ArtistMainScreenProps) => {
  return (
    <div>
      <Image
        css={{
          borderRadius: 20,
        }}
        src={wallpaper[highlightedMember as keyof typeof wallpaper].imgSrc}
        alt="main screen image"
        width={934}
        height={520}
      />
    </div>
  )
}
