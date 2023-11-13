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

function SubNav(props: IProps) {
  if (props.page == 'null') return <></>
  if (!(props.page in SubNavData))
    throw new Error(`${props.page} is invalid page name`)

  const subNavData: ISubNavData = SubNavData
  const data = subNavData[props.page]

  return (
    <div css={SubNavContainer}>
      {data.map((x) => (
        <Link css={SubNavLink} href={x.link}>
          {x.text}
        </Link>
      ))}
    </div>
  )
}

export default SubNav
