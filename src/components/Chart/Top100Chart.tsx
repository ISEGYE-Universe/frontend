import ChartColor from '@/styles/ChartColor'
import { withParentSize } from '@visx/responsive'
import { WithParentSizeProps } from '@visx/responsive/lib/enhancers/withParentSize'
import {
  AnimatedAreaSeries,
  Axis,
  GlyphSeries,
  Grid,
  Margin,
  Tooltip,
  XYChart,
} from '@visx/xychart'
import { Annotation, HtmlLabel } from '@visx/annotation'
import { useEffect, useState } from 'react'
import {
  tooltipContainer,
  tooltipRankText,
  tooltipTimeText,
  top100ChartContainer,
} from './Top100Chart.css'

export interface MelonTop100Datum {
  date: string
  rank: number
}

// visx accessors
const accessors = {
  xAccessor: (d: MelonTop100Datum) =>
    new Date(d.date).toLocaleTimeString('ko-KR', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    }),
  yAccessor: (d: MelonTop100Datum) => d.rank,
  colorAccessor: () => ChartColor.isedolPink,
}

// 등수 최소, 최대값 helper function
const getYMinAndMax = (data: MelonTop100Datum[]) => {
  const min = data.reduce((prev, cur) => {
    return prev.rank < cur.rank ? prev : cur
  }).rank
  const max = data.reduce((prev, cur) => {
    return prev.rank >= cur.rank ? prev : cur
  }).rank
  return [min, max]
}

interface Top100ChartImplProps {
  parentWidth?: number
  parentHeight?: number
  margin?: Margin
  data?: MelonTop100Datum[]
}

interface Point {
  x: number
  y: number
}

const Top100ChartImpl = ({
  parentWidth: graphWidth,
  parentHeight: graphHeight,
  margin,
  data,
}: Top100ChartImplProps) => {
  const [minY, maxY] = data ? getYMinAndMax(data) : [0, 0]
  const [lastGlyphPoint, setLastGlyphPoint] = useState<Point>({ x: 0, y: 0 })
  const [lastGlyphPointLoaded, setLastGlyphPointLoaded] =
    useState<boolean>(false)
  const [annotationOpen, setAnnotationOpen] = useState<boolean>(false)
  const [isPointerOut, setIsPointerOut] = useState<boolean>(false)

  return (
    <div css={top100ChartContainer}>
      <XYChart
        onPointerOut={() => {
          setIsPointerOut(true)
          setAnnotationOpen(false)
        }}
        onPointerMove={() => {
          if (isPointerOut) {
            setIsPointerOut(false)
          }
        }}
        margin={margin || { top: 10, right: 0, bottom: 20, left: 0 }}
        width={graphWidth}
        height={graphHeight}
        xScale={{
          type: 'band',
        }}
        yScale={{
          // logarithm 그래프 활용하여 뒤집힌 도메인 바로잡기 (음수의 log는 양수)
          type: 'log',
          // y축 도메인 뒤집기 (순위)
          domain: [maxY + 3, minY - 3],
          base: 2,
        }}
      >
        {data ? (
          <>
            <Grid
              numTicks={20}
              rows={false}
              lineStyle={{ backgroundColor: ChartColor.chartBorderGrey }}
            />
            <Grid
              numTicks={6}
              columns={false}
              lineStyle={{ backgroundColor: ChartColor.chartBorderGrey }}
            />
            <Axis
              orientation="bottom"
              hideAxisLine
              axisClassName="axis-line"
              // ex) 13:00 -> 13
              tickFormat={(d: string) => {
                return d.slice(0, 2)
              }}
              tickClassName="axis-tick"
            />
            <AnimatedAreaSeries
              data={data}
              dataKey="top100LineGraph"
              fill="rgba(234, 68, 118, 0.15)"
              lineProps={{
                stroke: ChartColor.isedolPink,
                strokeWidth: 1,
              }}
              xAccessor={accessors.xAccessor}
              yAccessor={accessors.yAccessor}
            />

            {/* Glyph */}
            <GlyphSeries
              dataKey="top100Glyph"
              data={data}
              xAccessor={accessors.xAccessor}
              yAccessor={accessors.yAccessor}
              colorAccessor={accessors.colorAccessor}
              // size={5}
              renderGlyph={(datum) => {
                // 마지막 glyph의 좌표 저장
                if (
                  datum.key === `${data.length - 1}` &&
                  !lastGlyphPointLoaded
                ) {
                  setLastGlyphPoint({ x: datum.x, y: datum.y })
                  setLastGlyphPointLoaded(true)
                }
                return (
                  <circle
                    cx={datum.x}
                    cy={datum.y}
                    r={3}
                    fill={ChartColor.isedolPink}
                  />
                )
              }}
            />

            <Tooltip<MelonTop100Datum>
              offsetTop={-23}
              offsetLeft={-63}
              renderTooltip={({ tooltipData }) => {
                if (
                  tooltipData !== undefined &&
                  tooltipData.nearestDatum &&
                  // 가장 최근 데이터의 tooltip은 표시하지 않음
                  tooltipData.nearestDatum?.index < data.length - 1 &&
                  !isPointerOut
                ) {
                  setAnnotationOpen(true)

                  return (
                    <div
                      css={tooltipContainer(false)}
                      key={tooltipData.nearestDatum?.key}
                    >
                      <p css={tooltipTimeText}>
                        {tooltipData.nearestDatum?.datum
                          ? accessors.xAccessor(tooltipData.nearestDatum.datum)
                          : null}
                      </p>
                      <p css={tooltipRankText}>
                        {tooltipData.nearestDatum?.datum
                          ? accessors.yAccessor(tooltipData.nearestDatum.datum)
                          : null}
                        위
                      </p>
                    </div>
                  )
                }
                setAnnotationOpen(false)
                return null
              }}
              snapTooltipToDatumX
              snapTooltipToDatumY
              unstyled
              applyPositionStyle
            />
            {lastGlyphPointLoaded && (
              <Annotation x={lastGlyphPoint.x - 15} y={lastGlyphPoint.y + 20}>
                <HtmlLabel>
                  <div css={tooltipContainer(annotationOpen)}>
                    <p css={tooltipTimeText}>현재 순위</p>
                    <p css={tooltipRankText}>{data[data.length - 1].rank}위!</p>
                  </div>
                </HtmlLabel>
              </Annotation>
            )}
          </>
        ) : null}
      </XYChart>
    </div>
  )
}

export const Top100Chart = withParentSize<
  WithParentSizeProps & Top100ChartImplProps
>(Top100ChartImpl)
