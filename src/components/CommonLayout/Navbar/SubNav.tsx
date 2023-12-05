import { css } from '@emotion/react'
import { TitleSmLight } from '@/styles/Font'

import SubNavData from '@/data/subnav.json'

import Link from 'next/link'

interface IProps {
  page: string
}

interface ISubNavData {
  [key: string]: {
    text: string
    link: string
  }[]
}

const SubNavContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  height: 80px;
`

const SubNavLink = css`
  ${TitleSmLight}
  color: #151515;

  cursor: pointer;
`

const SubNav = ({ page }: IProps) => {
  if (page === 'null') return null
  if (!(page in SubNavData)) throw new Error(`${page} is invalid page name`)

  const subNavData: ISubNavData = SubNavData
  const data = subNavData[page]

  return (
    <div css={SubNavContainer}>
      {data.map((x) => (
        <Link css={SubNavLink} href={x.link} key={x.link}>
          {x.text}
        </Link>
      ))}
    </div>
  )
}

export default SubNav
