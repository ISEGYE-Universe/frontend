import { css } from '@emotion/react'

const Top100Chart = () => {
  return (
    <div
      css={css`
        width: 750px;
        height: 377px;
      `}
    >
      {/* 차트 영역 */}
      <div
        css={css`
          display: inline-block;
          width: 517px;
          height: 100%;
          background-color: #f6f6f6;
        `}
      ></div>
      {/* 곡 카드 영역 */}
      <div
        css={css`
          display: inline-block;
          width: 233px;
          height: 100%;
          background: url('https://s3-alpha-sig.figma.com/img/11cf/1bba/400a79b31a645001a270e66d4bd85bcf?Expires=1699833600&Signature=XHq4UyJ3caQ6BRLtJKwmBoeAEhFak8Jnnj0nDZ6tDq3uoyxVxf8nR84fJ41TT2poUxbeTgyLClPbpNHVPAk5WNFy3cvZZSfbf0EO66BeZ2wkpyJPM5wts1QUrHTlu-Xm9kbFyif6froCe3FkMLCtWVrI6tW~SrL2Zhpkk4i5ZXe8Tau2h1n5iIjo5r1ID8fbZ-DJkyZ8pYlR0EkA6aMDDGSrXgaOtdVYdBsV1ZtPwyArGsGG5XU3VLeBHpEXmul-7r5DOnKObMHveSej7V4D3wmfsh1ZAfbYzGVq6gWLY3~cbI7ecrDy-1clL-NW7z2LkJ2bJ9u9~UESkKkmYc6ayg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          vertical-align: top;
        `}
      >
        {/* overlay */}
        <div
          css={css`
            width: 100%;
            height: 100%;
            backdrop-filter: blur(3px);
            background: rgba(21, 21, 21, 0.7);
          `}
        ></div>
      </div>
    </div>
  )
}

export default Top100Chart
