import memberProfileData from '@/data/member-profile.json'
import Link from 'next/link'
import Image from 'next/image'
import {
  memberProfileCoverSongListBox,
  memberProfileCoverSongListItem,
  memberProfileCoverSongListItemDateText,
  memberProfileCoverSongListItemIndexText,
  memberProfileCoverSongListItemTitleText,
  memberProfileCoverSongListItemTitleBox,
  memberProfileCoverSongMain,
  memberProfileCoverSongSubTitleBox,
  memberProfileCoverSongTitleBox,
  memberProfileCoverSongTitleText,
  memberProfileCoverSongListItemImage,
  memberProfileCoverSongListItemPlayIcon,
  memberProfileCoverSongSubTitleBoxDesc,
  memberProfileCoverSongSubTitleBoxMore,
  memberSignatureImg,
} from './MemberProfileCoverSong.css'

interface MemberProfileCoverSongProps {
  memberName: IsedolMember
}
export const MemberProfileCoverSong = ({
  memberName,
}: MemberProfileCoverSongProps) => {
  const { enName, groupName, krName, socialMedia } =
    memberProfileData[memberName]?.memberInformation || {}
  const { coverPlayIcon, signatureImg, personalColor, personalColorAlpha } =
    memberProfileData[memberName] || {}
  const youtubeSongLink = socialMedia?.youtube.songPlayListUrl || ''
  return (
    <section css={memberProfileCoverSongMain}>
      <Image
        css={memberSignatureImg}
        src={signatureImg}
        width={1}
        height={1}
        alt={`${memberName} signature`}
      />
      <div css={memberProfileCoverSongTitleBox(personalColor)}>
        <h2 css={memberProfileCoverSongTitleText}>{enName}&apos;s Cover</h2>
        <div css={memberProfileCoverSongSubTitleBox}>
          <p css={memberProfileCoverSongSubTitleBoxDesc}>
            {groupName} {krName}의 커버곡을 감상해보세요.
          </p>
          <Link
            href={youtubeSongLink}
            css={memberProfileCoverSongSubTitleBoxMore}
            target="_blank"
          >
            More
          </Link>
        </div>
      </div>
      <ul css={memberProfileCoverSongListBox}>
        {memberProfileData[memberName]?.recentCover.map((cover, i) => (
          <li key={cover.id}>
            <Link
              key={cover.id}
              css={memberProfileCoverSongListItem(personalColorAlpha)}
              href={cover.link}
              target="_blank"
            >
              <span
                css={memberProfileCoverSongListItemIndexText(personalColor)}
              >
                {i + 1}
              </span>
              <Image
                css={memberProfileCoverSongListItemImage}
                src={cover.thumbUrl}
                width={108}
                height={60}
                alt={`${cover.title} thumnail`}
              />
              <div css={memberProfileCoverSongListItemTitleBox}>
                <p css={memberProfileCoverSongListItemTitleText}>
                  {cover.title}
                </p>
                <p css={memberProfileCoverSongListItemDateText}>
                  {cover.uploadDate}
                </p>
              </div>

              <Image
                src={coverPlayIcon}
                className="play-icon"
                width={32}
                height={32}
                alt={`${cover.title} play icon`}
                css={memberProfileCoverSongListItemPlayIcon}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
