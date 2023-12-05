import MemberProfileCoverSong from '@/components/MemberProfile/MemberProfileCoverSong'
import MemberProfileSchedule from '@/components/MemberProfile/MemberProfileSchedule'
import MemberProfileTopBanner from '@/components/MemberProfile/MemberProfileTopBanner'
import MemberProfileWakscord from '@/components/MemberProfile/MemberProfileWakscord'
import MemberProfileYoutube from '@/components/MemberProfile/MemberProfileYoutube'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const whiteList = ['ine', 'jingburger', 'lilpa', 'jururu', 'gosegu', 'viichan']

const articleLayoutContainer = css`
  max-width: 1300px;
  margin: 0 auto;
`

const fullWidthContainer = css`
  max-width: 1920px;
`

const splittedContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 90px;
  margin-bottom: 60px;
`

const MemberProfile = () => {
  const router = useRouter()
  const { memberName } = router.query

  // 예외 404 처리
  useEffect(() => {
    if (typeof memberName === 'string' && !whiteList.includes(memberName)) {
      router.push('/404')
    }
  }, [memberName])

  return (
    <article>
      {/* 배너 영역 */}
      <MemberProfileTopBanner memberName={memberName as IsedolMember} />
      <div css={articleLayoutContainer}>
        {/* 커버곡 & 왁스코드 */}
        <div css={splittedContainer}>
          <MemberProfileCoverSong />
          <MemberProfileWakscord />
        </div>
        {/* 유튜브 */}
        <MemberProfileYoutube />
      </div>
      {/* 스케줄 */}
      <div css={[articleLayoutContainer, fullWidthContainer]}>
        <MemberProfileSchedule memberName={memberName as IsedolMember} />
      </div>
    </article>
  )
}

export default MemberProfile
