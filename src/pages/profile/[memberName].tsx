import { ProfileMemberDetail } from '@/components/Profile/ProfileMemberDetail'
import profileData from '@/data/profile.json'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { memberList } from '../member-profile/[memberName]'

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

const ProfileDetail = ({
  memberName,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <ProfileMemberDetail data={profileData[memberName as IsedolMember]} />
}
export default ProfileDetail
