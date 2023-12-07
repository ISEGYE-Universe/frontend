import { css } from '@emotion/react'
import memberProfileData from '@/data/member-profile.json'
import { MemberProfileCalendar } from './MemberProfileCalendar'

interface MemberProfileTopBannerProp {
  memberName: IsedolMember
}

const mainContainer = css`
  margin-bottom: 100px;
`
const titleContainer = css`
  height: 200px;
`
const overlay = css`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
`

export const MemberProfileSchedule = ({
  memberName,
}: MemberProfileTopBannerProp) => {
  const calendarMainContainer = css`
    position: relative;
    // 6주까지 있는 달이 있기 때문에 800px -> 882px
    height: 882px;
    background: url('${memberProfileData[memberName]?.calendarBgImage}');
    background-repeat: no-repeat;
    // background-size: cover;
    z-index: 1;
  `

  return (
    <section css={mainContainer}>
      {/* 제목 */}
      <div css={titleContainer} />
      {/* 달력 */}
      <div css={calendarMainContainer}>
        {/* 오버레이 */}
        <div css={overlay} />
        {/* 달력 본문 */}
        <MemberProfileCalendar />
      </div>
    </section>
  )
}
