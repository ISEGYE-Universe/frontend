import { css } from '@emotion/react'
import memberProfileData from '@/data/member-profile.json'

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
const calendarContentContainer = css`
  position: relative;
`

const MemberProfileSchedule = ({ memberName }: MemberProfileTopBannerProp) => {
  const calendarMainContainer = css`
    position: relative;
    height: 800px;
    background: url('${memberProfileData[memberName]?.calendarBgImage}');
    background-repeat: no-repeat;
    z-index: 1;
  `

  return (
    <section css={mainContainer}>
      {/* 제목 */}
      <div css={titleContainer}></div>
      {/* 달력 */}
      <div css={calendarMainContainer}>
        {/* 오버레이 */}
        <div css={overlay}></div>
        {/* 달력 본문 */}
        <div css={calendarContentContainer}>test</div>
      </div>
    </section>
  )
}

export default MemberProfileSchedule
