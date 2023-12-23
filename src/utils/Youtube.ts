export const parseIdFromYoutubeURL = (url: string) => {
  // ref - https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : undefined
}
