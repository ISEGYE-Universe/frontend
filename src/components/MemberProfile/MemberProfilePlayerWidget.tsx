import memberProfileData from '@/data/member-profile.json'
import MemberProfileStore from '@/store/MemberProfile/MemberProfileStore'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  widgetContainer,
  widgetIconContainer,
  widgetIconWrapper,
  widgetText,
} from './MemberProfilePlayerWidget.css'
import { WidgetPlayerIcon } from './WidgetPlayerIcon'

export const MemberProfilePlayerWidget = ({
  memberName,
}: {
  memberName: IsedolMember
}) => {
  const { personalColor } = memberProfileData[memberName] || {}

  const {
    isPlaying,
    youTubePlayerReady,
    youTubeVideoPlayer,
    currentYoutubeId,
  } = MemberProfileStore()

  const [isHover, setIsHover] = useState<boolean>(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }

  // 커버곡 리스트에서 현재 item 찾기
  const getCurrentCover = (id: string) => {
    return memberProfileData[memberName].recentCover.find((obj) =>
      obj.link.includes(id),
    )?.title
  }

  return (
    <button
      type="button"
      css={widgetContainer(personalColor, youTubePlayerReady, isHover)}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
      aria-label="player-widget"
      onClick={() => {
        if (isPlaying) {
          youTubeVideoPlayer.pauseVideo()
        } else {
          youTubeVideoPlayer.playVideo()
        }
      }}
    >
      <div css={widgetIconContainer}>
        <div css={widgetIconWrapper}>
          <WidgetPlayerIcon color={personalColor} animate={isPlaying} />
        </div>

        <motion.p
          animate={{
            maxWidth: isHover ? 170 : 0,
            opacity: isHover ? 1 : 0,
            marginLeft: isHover ? 8 : 0,
          }}
          transition={{
            duration: 0.5,
            maxWidth: {
              duration: 0.3,
            },
          }}
          css={widgetText(personalColor)}
          title={`${
            memberProfileData[memberName].memberInformation.krName
          } - ${getCurrentCover(currentYoutubeId)}`}
        >
          {getCurrentCover(currentYoutubeId)}
        </motion.p>
      </div>
    </button>
  )
}
