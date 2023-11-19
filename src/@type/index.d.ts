declare namespace Profile {
  interface IntroductionDescription {
    title: string
    desc: string
  }

  interface SocialLink {
    ytLink: string
    igLink: string
    twLink: string
  }

  interface GalleryImage {
    id: number
    url: string
  }
}
declare namespace Chart {
  type Top100ChartType = 'daily' | 'weekly'
}
