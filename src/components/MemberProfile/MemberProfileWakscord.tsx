import Image from 'next/image'
import Link from 'next/link'
import {
  mainContainer,
  messageContainer,
  messageList,
  refreshIconButton,
  refreshIconText,
  wakscordLogo,
} from './MemberProfileWakscord.css'

export const MemberProfileWakscord = () => {
  return (
    <section css={mainContainer}>
      <Link
        href="https://wakscord.xyz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          css={wakscordLogo}
          src="/images/member-profile/logo-wakscord.png"
          width={40}
          height={40}
          alt="wakscord logo"
        />
      </Link>

      <div css={messageContainer}>
        {/* S: 메시지 리스트 영역 */}
        <ul css={messageList} />
        {/* E: 메시지 리스트 영역 */}
        <button css={refreshIconButton} type="button">
          <Image
            src="/images/icon/icon-refresh.svg"
            width={24}
            height={24}
            alt="refresh icon"
          />
          <span css={refreshIconText}>새로고침</span>
        </button>
      </div>
    </section>
  )
}
