import Image from 'next/image'
import AlbumBtn from './AlbumButtons'
import AlbumDetail from './AlbumDetail'
import { DivFlexBox } from '@/styles/Album/AlbumInfo'

const AlbumInfoLayout = ({ ident }: { ident: string }) => {
  return (
    <div css={DivFlexBox}>
      <div>
        <Image
          src={`/images/album/AlbumCover/${ident}.png`}
          alt="Image Load Fail"
          width={764.8}
          height={600}
          priority={true}
        />
        <AlbumBtn album={ident} />
      </div>
      <AlbumDetail album={ident} />
    </div>
  )
}

export default AlbumInfoLayout
