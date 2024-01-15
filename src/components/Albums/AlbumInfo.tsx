import Image from 'next/image'
import { DivFlexBox } from '@/styles/Album/AlbumInfo'
import { AlbumBtn } from './AlbumBtnSection'
import { AlbumDetail } from './AlbumDetail'

type PropType = {
  ident: string
}

export const AlbumInfoLayout = ({ ident }: PropType) => {
  return (
    <section css={DivFlexBox}>
      <div>
        <Image
          src={`/images/album/AlbumCover/${ident}.jpg`}
          alt="Image Load Fail"
          width={764.8}
          height={600}
          priority
        />
        <AlbumBtn album={ident} />
      </div>
      <AlbumDetail album={ident} />
    </section>
  )
}
