import memberProfileData from '@/data/member-profile.json'
import { MemberProfileCalendar } from './MemberProfileCalendar'
import { MemberProfileTitle } from './MemberProfileTitle'
import {
  calendarMainContainer,
  mainContainer,
  overlay,
} from './MemberProfileSchedule.css'
import { articleLayoutContainer } from './MemberProfile.css'

interface MemberProfileTopBannerProp {
  memberName: IsedolMember
}

export const MemberProfileSchedule = ({
  memberName,
}: MemberProfileTopBannerProp) => {
  const memberInformation =
    memberProfileData[memberName]?.memberInformation || {}
  const memberYoutubeInfo = memberInformation?.socialMedia?.youtube

  return (
    <section css={mainContainer}>
      {/* 제목 */}
      <div css={articleLayoutContainer}>
        <MemberProfileTitle
          title="Schedule"
          subTitle={`${memberInformation.groupName} ${memberInformation.krName}의 방송활동을 확인해보세요.`}
          ytLink={memberYoutubeInfo?.archiveUrl}
          ytName={memberYoutubeInfo?.archiveName}
        />
      </div>
      {/* 달력 */}
      <div
        css={calendarMainContainer(
          memberProfileData[memberName]?.calendarBgImage,
        )}
      >
        {/* 오버레이 */}
        <div css={overlay} />
        {/* 달력 본문 */}
        <MemberProfileCalendar memberName={memberName} />
      </div>
    </section>
  )
}
