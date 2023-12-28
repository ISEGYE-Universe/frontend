import ChartColor from '@/styles/ChartColor'
import { withParentSize } from '@visx/responsive'
import { WithParentSizeProps } from '@visx/responsive/lib/enhancers/withParentSize'
import {
  AnimatedAreaSeries,
  Axis,
  EventHandlerParams,
  GlyphSeries,
  Grid,
  Margin,
  TooltipProvider,
  XYChart,
} from '@visx/xychart'
import { Annotation, HtmlLabel } from '@visx/annotation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTooltip, useTooltipInPortal } from '@visx/tooltip'
import {
  tooltipContainer,
  tooltipOuterContainer,
  tooltipRankText,
  tooltipTimeText,
  top100ChartContainer,
} from './Top100Chart.css'

export interface MelonTop100Datum {
  date: string
  rank: number
}

// hour formatter
const formatHour = (d: string) => {
  return new Date(d).toLocaleTimeString('ko-KR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })
}

// visx accessors
const accessors = {
  xAccessor: (d: MelonTop100Datum) => formatHour(d.date),
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
  data: MelonTop100Datum[]
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
  const [minY, maxY] = getYMinAndMax(data)

  // tooltip, annotation open 여부
  const [annotationOpen, setAnnotationOpen] = useState<boolean>(true)
  const [openTooltip, setOpenTooltip] = useState<boolean>(false)

  // tooltip ref, DOM 관련 state
  const containerOuterRef = useRef<HTMLDivElement>(null)
  const [glyphCoordList, setGlyphCoordList] = useState<Point[]>([])

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip()

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  })

  const handleMouseOver = useCallback(
    (event: EventHandlerParams<MelonTop100Datum>) => {
      if (glyphCoordList.length !== 0) {
        const isLastGlyph = event.index === data.length - 1
        if (!isLastGlyph) {
          // get DOM from cache
          const currentGlyphCoord = glyphCoordList[event.index]

          const cx = currentGlyphCoord.x
          const cy = currentGlyphCoord.y
          if (cx && cy) {
            setAnnotationOpen(false)
            setOpenTooltip(true)
            showTooltip({
              tooltipLeft: cx - 75,
              tooltipTop: cy - 33,
              tooltipData: event.datum,
            })
          }
        }
      }
    },
    [glyphCoordList, data, showTooltip],
  )

  const handleMouseOut = useCallback(() => {
    setOpenTooltip(false)
    // timeout for transition
    setTimeout(() => {
      hideTooltip()
    }, 300)
    setAnnotationOpen(true)
  }, [hideTooltip])

  // 가장 최근 데이터의 좌표를 가져와서 state에 저장
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const glyphDOMList: NodeListOf<SVGCircleElement> | undefined =
        containerOuterRef.current?.querySelectorAll(`.visx-glyph`)

      const resultList: Point[] = []

      glyphDOMList?.forEach((el) => {
        resultList.push({
          x: el.cx.baseVal.value,
          y: el.cy.baseVal.value,
        })
      })
      setGlyphCoordList(resultList)
    }, 1)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [data])

  return (
    <TooltipProvider>
      <div ref={containerOuterRef}>
        <div ref={containerRef} css={top100ChartContainer}>
          <XYChart
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
              onPointerMove={handleMouseOver}
              onPointerOut={handleMouseOut}
              renderGlyph={(datum) => {
                return (
                  <circle
                    className={`visx-glyph glyph-${datum.key}`}
                    cx={datum.x}
                    cy={datum.y}
                    r={3}
                    fill={ChartColor.isedolPink}
                  />
                )
              }}
            />
            {tooltipOpen && (
              <TooltipInPortal
                key={`tooltip-${tooltipOpen ? 1 : 0}`}
                top={tooltipTop}
                left={tooltipLeft}
                css={tooltipOuterContainer(openTooltip)}
                unstyled
              >
                <div css={tooltipContainer(true)}>
                  <p css={tooltipTimeText}>
                    {tooltipData &&
                      formatHour((tooltipData as MelonTop100Datum).date)}
                  </p>
                  <p css={tooltipRankText}>
                    {tooltipData && (tooltipData as MelonTop100Datum).rank}위
                  </p>
                </div>
              </TooltipInPortal>
            )}

            {glyphCoordList.length && (
              <Annotation
                x={glyphCoordList[data.length - 1].x - 15}
                y={glyphCoordList[data.length - 1].y + 20}
              >
                <HtmlLabel>
                  <div css={tooltipContainer(annotationOpen)}>
                    <p css={tooltipTimeText}>현재 순위</p>
                    <p css={tooltipRankText}>{data[data.length - 1].rank}위!</p>
                  </div>
                </HtmlLabel>
              </Annotation>
            )}
          </XYChart>
        </div>
      </div>
    </TooltipProvider>
  )
}

export const Top100Chart = withParentSize<
  WithParentSizeProps & Top100ChartImplProps
>(Top100ChartImpl)
