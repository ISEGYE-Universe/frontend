import { HRLine } from '@/components/Chart/HRLine'
import {
  CaptionMdBold,
  CaptionMdLight,
  CaptionMdRegular,
  MainTitleBold,
  MainTitleLight,
  MainTitleRegular,
  TextMdBold,
  TextMdExtraBold,
  TextMdLight,
  TextMdRegular,
  TextSmBold,
  TextSmExtraBold,
  TextSmLight,
  TextSmRegular,
  TitleLgBold,
  TitleLgLight,
  TitleLgRegular,
  TitleMdBold,
  TitleMdLight,
  TitleMdRegular,
  TitleSmBold,
  TitleSmLight,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'

const index = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <h1 css={TitleSmRegular}>main_title</h1>
      <br />
      <span css={MainTitleLight}>가나다라마바사 abcdefg</span>
      <br />
      <span css={MainTitleRegular}>가나다라마바사 abcdefg</span>
      <br />
      <span css={MainTitleBold}>가나다라마바사 abcdefg</span>
      <HRLine />
      <h1 css={TitleSmRegular}>title_lg</h1>
      <br />
      <span css={TitleLgLight}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TitleLgRegular}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TitleLgBold}>가나다라마바사 abcdefg</span>
      <HRLine />
      <h1 css={TitleSmRegular}>title_md</h1>
      <br />
      <span css={TitleMdLight}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TitleMdRegular}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TitleMdBold}>가나다라마바사 abcdefg</span>
      <HRLine />
      <h1 css={TitleSmRegular}>title_sm</h1>
      <br />
      <span css={TitleSmLight}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TitleSmRegular}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TitleSmBold}>가나다라마바사 abcdefg</span>
      <HRLine />
      <h1 css={TextMdRegular}>text_md</h1>
      <br />
      <span css={TextMdLight}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TextMdRegular}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TextMdBold}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TextMdExtraBold}>가나다라마바사 abcdefg</span>
      <HRLine />
      <h1 css={TitleSmRegular}>text_sm</h1>
      <br />
      <span css={TextSmLight}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TextSmRegular}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TextSmBold}>가나다라마바사 abcdefg</span>
      <br />
      <span css={TextSmExtraBold}>가나다라마바사 abcdefg</span>
      <HRLine />
      <h1 css={TitleSmRegular}>caption_md</h1>
      <br />
      <span css={CaptionMdLight}>가나다라마바사 abcdefg</span>
      <br />
      <span css={CaptionMdRegular}>가나다라마바사 abcdefg</span>
      <br />
      <span css={CaptionMdBold}>가나다라마바사 abcdefg</span>
      <HRLine />
    </div>
  )
}

export default index
