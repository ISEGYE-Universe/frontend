import ProfileIntroductionBox from '@/components/Profile/ProfileIntroductionBox'
import ProfileMainBg from '@/components/Profile/ProfileMainBg'
import ProfileMemberDetail from '@/components/Profile/ProfileMemberDetail'
import profileData from '@/data/profile.json'
import ProfileStore from '@/store/Profile/ProfileStore'
import useUrlHash from '@/utils/useUrlHash'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Profile = () => {
  const { currentMember, setCurrentMember } = ProfileStore()
  const router = useRouter()
  const urlHash = useUrlHash(router.asPath.split('#')[1])

  const setPage = (urlHash: string) => {
    if (urlHash) {
      setCurrentMember(urlHash as Profile.CurrentMember)
    } else {
      setCurrentMember('default')
    }
  }
  useEffect(() => {
    setPage(urlHash)
  }, [urlHash])

  useEffect(() => {
    setPage(urlHash)
  }, [])
  useEffect(() => {
    console.log(currentMember)
  }, [currentMember])

  return (
    <>
      {currentMember === undefined} {<></>}
      {currentMember === 'default' && (
        <>
          <ProfileMainBg />
          <ProfileIntroductionBox
            mainTitle={profileData.mainIntroduction.mainTitle}
            description={profileData.mainIntroduction.description}
          ></ProfileIntroductionBox>
        </>
      )}
      {currentMember === 'ine' && (
        <ProfileMemberDetail data={profileData.ineIntroduction} />
      )}
      {currentMember === 'jingburger' && (
        <ProfileMemberDetail data={profileData.jingburgerIntroduction} />
      )}
      {currentMember === 'lilpa' && (
        <ProfileMemberDetail data={profileData.lilpaIntroduction} />
      )}
      {currentMember === 'jururu' && (
        <ProfileMemberDetail data={profileData.jururuIntroduction} />
      )}
      {currentMember === 'gosegu' && (
        <ProfileMemberDetail data={profileData.goseguIntroduction} />
      )}
      {currentMember === 'viichan' && (
        <ProfileMemberDetail data={profileData.viichanIntroduction} />
      )}
    </>
  )
}

export default Profile
