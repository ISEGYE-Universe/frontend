import { css } from '@emotion/react'
import Image from 'next/image'
import Title from './Title'
import SubTitle from './SubTitle'
import RoundedLinkButton from './RoundedLinkButton'
import chartData from '@/data/chart.json'
import { ChartColor } from '@/styles/ChartColor'

const Top100Chart = () => {
  return (
    <div
      css={css`
        width: 750px;
        height: 377px;
        position: relative;
      `}
    >
      {/* 차트 영역 */}
      <div
        css={css`
          display: inline-block;
          width: 517px;
          height: 100%;
          background-color: ${ChartColor.bgWhiteGrey};
        `}
      ></div>
      {/* 곡 카드 영역 */}
      <div
        css={css`
          display: inline-block;
          width: 233px;
          height: 100%;
          background: url('${chartData.image.top100CardBackground}');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          vertical-align: top;
          position: absolute;
        `}
      >
        {/* overlay */}
        <div
          css={css`
            width: 100%;
            height: 100%;
            backdrop-filter: blur(3px);
            background: rgba(21, 21, 21, 0.7);
            position: absolute;
          `}
        ></div>
        {/* 내용 */}
        <div
          css={css`
            padding: 23px 37px 52px;
            height: 100%;
            position: relative;
          `}
        >
          {/* 썸네일 */}
          <Image
            src="https://s3-alpha-sig.figma.com/img/11cf/1bba/400a79b31a645001a270e66d4bd85bcf?Expires=1699833600&Signature=XHq4UyJ3caQ6BRLtJKwmBoeAEhFak8Jnnj0nDZ6tDq3uoyxVxf8nR84fJ41TT2poUxbeTgyLClPbpNHVPAk5WNFy3cvZZSfbf0EO66BeZ2wkpyJPM5wts1QUrHTlu-Xm9kbFyif6froCe3FkMLCtWVrI6tW~SrL2Zhpkk4i5ZXe8Tau2h1n5iIjo5r1ID8fbZ-DJkyZ8pYlR0EkA6aMDDGSrXgaOtdVYdBsV1ZtPwyArGsGG5XU3VLeBHpEXmul-7r5DOnKObMHveSej7V4D3wmfsh1ZAfbYzGVq6gWLY3~cbI7ecrDy-1clL-NW7z2LkJ2bJ9u9~UESkKkmYc6ayg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width={160}
            height={160}
            alt="top100 thumbnail"
            css={css`
              margin-bottom: 25px;
            `}
          ></Image>
          {/* 제목, 아티스트 */}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 14px;
            `}
          >
            <Title color="#fff">KIDDING</Title>
            <SubTitle color="#b9b9b9">이세계아이돌</SubTitle>
          </div>

          {/* 버튼 */}
          <RoundedLinkButton
            href="#"
            bgColor="#5CCA52"
            customCss={css`
              margin-bottom: 9px;
            `}
          >
            멜론에서 듣기
          </RoundedLinkButton>
          <RoundedLinkButton href="#" bgColor="#5CCA52">
            종합 스트리밍 가이드
          </RoundedLinkButton>
        </div>
      </div>
    </div>
  )
}

export default Top100Chart
