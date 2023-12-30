import memberProfileData from '@/data/member-profile.json'
import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
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
export const defaultVolume = 10

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

  // 재생시간 로드 여부
  const [playingtimeLoaded, setPlayingtimeLoaded] = useState<boolean>(false)
  // 버퍼링 중 여부
  const [isPlayerBuffering, setIsPlayerBuffering] = useState<boolean>(false)
  // 현재 재생 시간
  const [currentSongPlayingTime, setCurrentSongPlayingTime] =
    useState<number>(0)
  // 전체 재생 시간
  const [currentSongDuration, setCurrentSongDuration] = useState<number>(0)
  // 현재 재생시간 계산을 위한 인터벌 함수 id
  const [currentSongIntervalId, setCurrentSongIntervalId] =
    useState<NodeJS.Timeout>()

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

  // youtube state change
  const handleStateChange: YouTubeProps['onStateChange'] = (event) => {
    const status = event.data

    // 재생상태 코드 별 로직
    switch (status) {
      // 재생 종료
      case 0: {
        setIsPlaying(false)
        break
      }
      // 재생 중
      case 1: {
        // 전체 재생 시간 설정
        setCurrentSongDuration(localYouTubeVideoPlayer.getDuration())
        // 현재 재생 시간 받아오기 위한 setInterval
        const intervalId = setInterval(() => {
          setCurrentSongPlayingTime(localYouTubeVideoPlayer.getCurrentTime())
        }, 1000)
        setCurrentSongIntervalId(intervalId)
        setIsPlayerBuffering(false)
        setIsPlaying(true)
        setPlayingtimeLoaded(true)
        break
      }
      // 일시정지
      case 2: {
        // 현재 재생 시간 받아오는 setInterval 함수 정지
        clearInterval(currentSongIntervalId)
        setIsPlaying(false)
        break
      }
      // 버퍼링
      case 3:
        setIsPlayerBuffering(true)
        break
      // 동영상 준비
      case 5: {
        setIsPlayerBuffering(true)
        setPlayingtimeLoaded(false)
        // 볼륨 조절
        localYouTubeVideoPlayer.setVolume(defaultVolume)
        localYouTubeVideoPlayer.playVideo()
        break
      }
      // case: -1
      default:
        clearInterval(currentSongIntervalId)
        setIsPlayerBuffering(true)
        setPlayingtimeLoaded(false)
    }
    console.log(status)
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
      // youtube video id 변경
      setCurrentYoutubeId(youtubeId ?? '')
      setPlayingtimeLoaded(false)
      // 비디오 load
      localYouTubeVideoPlayer.loadVideoById(youtubeId, 0)
    }
    // 동일한 곡의 재생버튼 클릭한 경우
    else if (isPlaying) {
      // 재생중인 경우 일시정지
      localYouTubeVideoPlayer.pauseVideo()
    } else {
      // 정지중인 경우 재생
      localYouTubeVideoPlayer.playVideo()
    }
  }

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
          // 현재 곡 로드 여부 체크
          const isCurrentPlaying =
            currentYoutubeId === parseIdFromYoutubeURL(cover.link) &&
            playingtimeLoaded &&
            currentSongPlayingTime !== undefined
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
                          {formatSecondToMinutes(currentSongPlayingTime)}
                        </span>
                        <span>/</span>
                        <span>
                          {formatSecondToMinutes(currentSongDuration)}
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
                    {isCurrentPlaying && isPlaying && !isPlayerBuffering ? (
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
                    <Image
                      src="/images/member-profile/icon-play.svg"
                      width={10}
                      height={12}
                      alt="play icon"
                      css={memberProfileCoverSongListItemPlayIcon}
                    />
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
        onStateChange={handleStateChange}
      />
    </section>
  )
}
