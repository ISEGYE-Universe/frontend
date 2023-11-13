import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'
import Link from 'next/link'

interface ProfileMainMemberSectionProps {
  memberIndex: number
  x: number
  y: number
  width: number
  height: number
  url: string
}

/**
 * @멤버소개 멤버 별 마우스 over가능한 섹션
 * @param memberIndex 배경 이미지 내 멤버 인덱스
 * @param x 마우스 액션 구역의 x좌표
 * @param y 마우스 액션 구역의 y좌표
 * @param width 마우스 액션 구역의 width
 * @param height 마우스 액션 구역의 height
 * @author 민타이
 */
function ProfileMainMemberSection({
  memberIndex,
  x,
  y,
  width,
  height,
  url,
}: ProfileMainMemberSectionProps) {
  const { setHoverDefault, setSwitchHoverMember } = ProfileStore()

  return (
    <Link href={url}>
      <rect
        fill="#fff"
        opacity="0"
        cursor="pointer"
        x={x}
        y={y}
        width={width}
        height={height}
        onMouseEnter={() => {
          setSwitchHoverMember(memberIndex, true)
          setHoverDefault(false)
        }}
        onMouseLeave={() => {
          setSwitchHoverMember(memberIndex, false)
          setHoverDefault(true)
        }}
      />
    </Link>
  )
}

export default ProfileMainMemberSection
