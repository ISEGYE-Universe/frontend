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

  type CurrentMember =
    | 'default'
    | 'ine'
    | 'jingburger'
    | 'lilpa'
    | 'jururu'
    | 'gosegu'
    | 'viichan'
    | undefined
}
