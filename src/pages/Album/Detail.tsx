/*
* 23.10.17
* Heo0
* Album Detail Page
*/
import EmblaCarousel from './EmblaCarousel'
import { css } from '@emotion/react'

const albumDiv = css`
    width: 1620px;
    margin-left: 140px;
    border: 1px solid black;
`
const temp = css`
    background-color: gray;
    height: 700px;
`

const Detail = () => {
    return (
        <div className="album-detail-div" css = {albumDiv}>
            <EmblaCarousel
                slides={[
                    <div css={temp}>1</div>,
                    <div css={temp}>2</div>,
                    <div css={temp}>3</div>
                ]}
                options={{
                    align: "start",
                    loop: true,
                    skipSnaps: false,
                }}
            />
        </div>
    )
}

export default Detail