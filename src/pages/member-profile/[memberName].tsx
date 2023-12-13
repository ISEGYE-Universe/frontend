import MemberProfileCoverSong from '@/components/MemberProfile/MemberProfileCoverSong'
import MemberProfileSchedule from '@/components/MemberProfile/MemberProfileSchedule'
import MemberProfileTopBanner from '@/components/MemberProfile/MemberProfileTopBanner'
import MemberProfileWakscord from '@/components/MemberProfile/MemberProfileWakscord'
import MemberProfileYoutube from '@/components/MemberProfile/MemberProfileYoutube'
import { css } from '@emotion/react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

const memberList = ['ine', 'jingburger', 'lilpa', 'jururu', 'gosegu', 'viichan']

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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: memberList.map((member) => {
      return { params: { memberName: member } }
    }),
    fallback: false,
  }
}

interface MemberNameParams extends ParsedUrlQuery {
  memberName: string
}
export const getStaticProps: GetStaticProps = (context) => {
  const { memberName } = context.params as MemberNameParams
  return {
    props: {
      memberName,
    },
  }
}

const MemberProfile = ({
  memberName,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <article>
      {/* 배너 영역 */}
      <MemberProfileTopBanner memberName={memberName as IsedolMember} />
      <div css={articleLayoutContainer}>
        {/* 커버곡 & 왁스코드 */}
        <div css={splittedContainer}>
          <MemberProfileCoverSong memberName={memberName as IsedolMember} />
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
