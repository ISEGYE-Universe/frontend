import memberProfileData from '@/data/member-profile.json'
import MemberProfileStore from '@/store/MemberProfile/MemberProfileStore'
import { widgetContainer } from './MemberProfilePlayerWidget.css'
import { WidgetPlayerIcon } from './WidgetPlayerIcon'

export const MemberProfilePlayerWidget = ({
  memberName,
}: {
  memberName: IsedolMember
}) => {
  const { personalColor } = memberProfileData[memberName] || {}

  const { isPlaying, setIsPlaying } = MemberProfileStore()

  return (
    <button
      type="button"
      css={widgetContainer(personalColor)}
      aria-label="player-widget"
      onClick={() => {
        setIsPlaying(!isPlaying)
      }}
    >
      <WidgetPlayerIcon color={personalColor} animate={isPlaying} />
    </button>
  )
}
