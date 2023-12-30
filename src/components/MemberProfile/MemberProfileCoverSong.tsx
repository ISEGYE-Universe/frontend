import memberProfileData from '@/data/member-profile.json'
import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, useEffect } from 'react'
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube'
import MemberProfileStore from '@/store/MemberProfile/MemberProfileStore'
import { parseIdFromYoutubeURL } from '@/utils/Youtube'
import { formatSecondToMinutes } from '@/utils/FormatTime'
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
  youtubeEmbedContainer,
  memberProfileCoverSongListItemPlayButton,
  memberProfileCoverSongListItemProgressContainer,
  memberProfileCoverSongListItemProgressTimeText,
  memberProfileCoverSongListItemProgressBar,
} from './MemberProfileCoverSong.css'

let localYouTubeVideoPlayer: YouTubePlayer = null
export const defaultVolume = 15

export const MemberProfileCoverSong = ({
  memberName,
}: {
  memberName: IsedolMember
}) => {
  const { enName, groupName, krName, socialMedia } =
    memberProfileData[memberName]?.memberInformation || {}
  const { signatureImg, personalColor } = memberProfileData[memberName] || {}
  const recentCoverList = memberProfileData[memberName]?.recentCover
  const youtubeSongLink = socialMedia?.youtube.songPlayListUrl || ''

  // 재생 여부
  const {
    isPlaying,
    setIsPlaying,
    currentYoutubeId,
    youTubePlayerReady,
    setYouTubePlayerReady,
    setCurrentYoutubeId,
    setYoutubeVideoPlayer,
  } = MemberProfileStore()

  // youtube player ready handler
  const handleOnReady: YouTubeProps['onReady'] = (event) => {
    // set global youtube player
    setYoutubeVideoPlayer(event.target)
    // set local youtube player - handleOnReady에서는 localYoutubePlayer로만 재생 가능
    localYouTubeVideoPlayer = event.target

    // youtube player가 준비된 후 안전한 접근을 위해 기다림
    setTimeout(() => {
      setYouTubePlayerReady(true)
    }, 500)
  }

  // 재생버튼 click handler
  const handleClickPlay = (
    e: MouseEvent<HTMLButtonElement>,
    youtubeId: string | undefined,
  ) => {
    // anchor태그 내에 존재하기 때문에 anchor 클릭 이벤트 발생 방지
    e.preventDefault()

    // 다른 곡의 재생버튼 클릭한 경우
    if (youtubeId !== currentYoutubeId) {
      setCurrentYoutubeId(youtubeId ?? '')
      localYouTubeVideoPlayer.loadVideoById(youtubeId, 0)
      // 로드 완료가 안될 수 있으므로 기다린 후에 재생
      setTimeout(() => {
        localYouTubeVideoPlayer.playVideo()
        setIsPlaying(true)
      }, 100)
    }
    // 동일한 곡의 재생버튼 클릭한 경우
    else if (isPlaying) {
      localYouTubeVideoPlayer.pauseVideo()
      setIsPlaying(false)
    } else {
      localYouTubeVideoPlayer.playVideo()
      setIsPlaying(true)
    }

    // 볼륨 조정
    localYouTubeVideoPlayer.setVolume(defaultVolume)
  }

  // 멤버 전환 시 default 곡 지정
  useEffect(() => {
    setCurrentYoutubeId(parseIdFromYoutubeURL(recentCoverList[0].link) ?? '')
  }, [recentCoverList, setCurrentYoutubeId])

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
        {recentCoverList.map((cover, i) => {
          const isCurrentPlaying =
            currentYoutubeId === parseIdFromYoutubeURL(cover.link) && isPlaying
          return (
            <li key={cover.id}>
              {isCurrentPlaying ? (
                <div css={memberProfileCoverSongListItem}>
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
                  <div
                    css={memberProfileCoverSongListItemTitleBox(
                      isCurrentPlaying,
                    )}
                  >
                    <p css={memberProfileCoverSongListItemTitleText}>
                      {cover.title}
                    </p>
                    <div css={memberProfileCoverSongListItemProgressContainer}>
                      <div css={memberProfileCoverSongListItemProgressTimeText}>
                        <span>
                          {formatSecondToMinutes(
                            localYouTubeVideoPlayer.getCurrentTime(),
                          )}
                        </span>
                        <span>/</span>
                        <span>
                          {formatSecondToMinutes(
                            localYouTubeVideoPlayer.getDuration(),
                          )}
                        </span>
                      </div>
                      <div css={memberProfileCoverSongListItemProgressBar} />
                    </div>
                  </div>

                  <button
                    type="button"
                    css={memberProfileCoverSongListItemPlayButton(
                      youTubePlayerReady,
                      personalColor,
                    )}
                    onClick={(e) => {
                      handleClickPlay(e, parseIdFromYoutubeURL(cover.link))
                    }}
                  >
                    {isCurrentPlaying ? (
                      <Image
                        src="/images/member-profile/icon-pause.svg"
                        width={10}
                        height={12}
                        alt="pause icon"
                      />
                    ) : (
                      <Image
                        src="/images/member-profile/icon-play.svg"
                        width={10}
                        height={12}
                        alt="play icon"
                        css={memberProfileCoverSongListItemPlayIcon}
                      />
                    )}
                  </button>
                </div>
              ) : (
                <Link
                  css={memberProfileCoverSongListItem}
                  href={cover.link}
                  target="_blank"
                  rel="noreferrer noopener"
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
                  <div
                    css={memberProfileCoverSongListItemTitleBox(
                      isCurrentPlaying,
                    )}
                  >
                    <p css={memberProfileCoverSongListItemTitleText}>
                      {cover.title}
                    </p>
                    <p css={memberProfileCoverSongListItemDateText}>
                      {cover.uploadDate}
                    </p>
                  </div>

                  <button
                    type="button"
                    css={memberProfileCoverSongListItemPlayButton(
                      youTubePlayerReady,
                      personalColor,
                    )}
                    onClick={(e) => {
                      handleClickPlay(e, parseIdFromYoutubeURL(cover.link))
                    }}
                  >
                    {isCurrentPlaying ? (
                      <Image
                        src="/images/member-profile/icon-pause.svg"
                        width={10}
                        height={12}
                        alt="pause icon"
                      />
                    ) : (
                      <Image
                        src="/images/member-profile/icon-play.svg"
                        width={10}
                        height={12}
                        alt="play icon"
                        css={memberProfileCoverSongListItemPlayIcon}
                      />
                    )}
                  </button>
                </Link>
              )}
            </li>
          )
        })}
      </ul>

      <YouTube
        key={memberName}
        css={youtubeEmbedContainer}
        videoId={currentYoutubeId}
        onReady={handleOnReady}
      />
    </section>
  )
}
