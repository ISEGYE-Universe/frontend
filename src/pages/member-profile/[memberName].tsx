import { MemberProfileCoverSong } from '@/components/MemberProfile/MemberProfileCoverSong'
import { MemberProfileSchedule } from '@/components/MemberProfile/MemberProfileSchedule'
import { MemberProfileTopBanner } from '@/components/MemberProfile/MemberProfileTopBanner'
import { MemberProfileWakscord } from '@/components/MemberProfile/MemberProfileWakscord'
import { MemberProfileYoutube } from '@/components/MemberProfile/MemberProfileYoutube'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import {
  articleLayoutContainer,
  fullWidthContainer,
  splittedContainer,
} from './memberProfile.css'

const memberList = ['ine', 'jingburger', 'lilpa', 'jururu', 'gosegu', 'viichan']

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
        <MemberProfileYoutube memberName={memberName as IsedolMember} />
      </div>
      {/* 스케줄 */}
      <div css={fullWidthContainer}>
        <MemberProfileSchedule memberName={memberName as IsedolMember} />
      </div>
    </article>
  )
}

export default MemberProfile
