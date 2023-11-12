import { css } from '@emotion/react'
import { TextMdRegular } from '@/styles/Font'

import SubNavData from '@/data/subnav.json'

import Link from 'next/link'

interface IProps {
    page: string
}

interface ISubNavData {
    [key: string]: {
        text: string,
        link: string
    }[]
}

const SubNavContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

    height: 64px;
`

const SubNavLink = css`
  ${TextMdRegular}
  font-size: 18px !important; /* just for now */
  color: #151515;

  cursor: pointer;
`

const SubNav = (props: IProps) => {
    if (props.page == "null") return (<></>)
    if (!(props.page in SubNavData)) throw new Error(`${props.page} is invalid page name`)

    const subNavData: ISubNavData = SubNavData
    const data = subNavData[props.page]

    return (
        <div css={SubNavContainer}>
            {data.map(x => (
                <Link css={SubNavLink} href={x.link}>{x.text}</Link>
            ))}
        </div>
    )
}

export default SubNav
