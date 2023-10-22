import { css } from '@emotion/react'
import ProfileIntroductionBox from './ProfileIntroductionBox'

/**
 * @멤버소개 메인 페이지 소개글
 * @author 민타이
 */
const ProfileMainDescription = () => {
  return (
    <section
      css={css`
        margin: 0 0 83px 178px;
        position: absolute;
        left: 0;
        bottom: 0;
        cursor: default;
      `}
    >
      <ProfileIntroductionBox
        mainTitle="이세계아이돌"
        isShowSns
        ytLink="https://www.youtube.com/@jingburger"
        igLink="https://www.instagram.com/jing_burger/?hl=ko"
        twLink="https://www.twitch.tv/jingburger"
        description={[
          { title: '데뷔일', desc: '2021년 11월 17일' },
          { title: '음원', desc: '[싱글 1집] RE : WIND' },
          { title: '', desc: '[싱글 2집] 겨울봄' },
          { title: '소속사', desc: 'WAK ENTERTAINMENT' },
        ]}
      ></ProfileIntroductionBox>
    </section>
  )
}

export default ProfileMainDescription
