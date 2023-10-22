/*
 * 23.10.17
 * Heo0
 * Album Detail Page
 */
import EmblaCarousel from '../../components/Albums/EmblaCarousel'
import { css } from '@emotion/react'
import Album from './albums'

const albumDiv = css`
  width: 1620px;
  margin-left: 140px;
`

const Detail = () => {
  return (
    <div className="album-detail-div" css={albumDiv}>
      <EmblaCarousel
        slides={[
          <Album ident="REWIND" />,
          <Album ident="KIDDING" />,
          <Album ident="AnotherWorld" />,
        ]}
        options={{
          align: 'start',
          loop: true,
          skipSnaps: false,
        }}
        default={0}
      />
    </div>
  )
}

export default Detail
