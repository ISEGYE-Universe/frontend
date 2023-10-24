import ProfileStore from '@/store/Profile/ProfileStore'

interface ProfileMainMemberSectionProps {
  memberIndex: number
  x: number
  y: number
  width: number
  height: number
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
const ProfileMainMemberSection = ({
  memberIndex,
  x,
  y,
  width,
  height,
}: ProfileMainMemberSectionProps) => {
  const { setHoverDefault, setSwitchHoverMember, setCurrentMember } =
    ProfileStore()

  return (
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
      onMouseDown={() => {
        switch (memberIndex) {
          case 0:
            // setCurrentMember('jururu')
            window.location.hash = 'jururu'
            break
          case 1:
            // setCurrentMember('jingburger')
            window.location.hash = 'jingburger'
            break
          case 2:
            // setCurrentMember('viichan')
            window.location.hash = 'viichan'
            break
          case 3:
            // setCurrentMember('gosegu')
            window.location.hash = 'gosegu'
            break
          case 4:
            // setCurrentMember('lilpa')
            window.location.hash = 'lilpa'
            break
          case 5:
            // setCurrentMember('ine')
            window.location.hash = 'ine'
            break
        }
      }}
    ></rect>
  )
}

export default ProfileMainMemberSection
