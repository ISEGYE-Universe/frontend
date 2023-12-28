import { ProfileMemberDetail } from '@/components/Profile/ProfileMemberDetail'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import profileData from '@/data/profile.json'

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

const Profile = ({
  memberName,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ProfileMemberDetail
      data={profileData.memberIntroduction[memberName as IsedolMember]}
    />
  )
}

export default Profile
