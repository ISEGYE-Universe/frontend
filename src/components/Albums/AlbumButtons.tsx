import { AlbumBtnDiv, AlbumBtnSize } from '@/styles/Album/AlbumInfo'
import Image from 'next/image'

const AlbumBtn = ({ album }: { album: string }) => {
  return (
    <div css={AlbumBtnDiv}>
      <button css={AlbumBtnSize} />
      <button css={AlbumBtnSize} />
      <button css={AlbumBtnSize} />
      <button css={AlbumBtnSize} />
      <button css={AlbumBtnSize} />
      <button css={AlbumBtnSize} />
      <button css={AlbumBtnSize} />
    </div>
  )
}

export default AlbumBtn
