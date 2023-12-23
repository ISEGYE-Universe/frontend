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
  const [minY, maxY] = data ? getYMinAndMax(data) : [0, 0]
  // 최근 데이터 annotation 관련 staet
  const [lastGlyphPoint, setLastGlyphPoint] = useState<Point>({ x: 0, y: 0 })
  const [lastGlyphPointLoaded, setLastGlyphPointLoaded] =
    useState<boolean>(false)

  // tooltip, annotation open 여부
  const [annotationOpen, setAnnotationOpen] = useState<boolean>(true)
  const [openTooltip, setOpenTooltip] = useState<boolean>(false)

  // tooltip ref, DOM 관련 state
  const containerOuterRef = useRef<HTMLDivElement>(null)
  const [circleDOMList, setCircleDOMList] = useState<Element[]>(
    new Array(data.length),
  )

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
      const isLastGlyph = event.index === data.length - 1
      if (isLastGlyph && lastGlyphPointLoaded) {
        return null
      }

      const parentDOM = containerOuterRef.current
      let cx: SVGAnimatedLength
      let cy: SVGAnimatedLength
      if (parentDOM) {
        if (!circleDOMList[event.index]) {
          // cache miss, store value
          const currentGlyph = parentDOM?.querySelector(
            `.glyph-${event.index}`,
          ) as SVGCircleElement
          setCircleDOMList([
            ...circleDOMList.slice(0, event.index),
            currentGlyph,
            ...circleDOMList.slice(event.index + 1),
          ])

          cx = currentGlyph.cx
          cy = currentGlyph.cy
        } else {
          // get DOM from cache
          const currentGlyph = circleDOMList[event.index] as SVGCircleElement

          cx = currentGlyph.cx
          cy = currentGlyph.cy
        }
        if (cx && cy) {
          setAnnotationOpen(false)
          setOpenTooltip(true)
          showTooltip({
            tooltipLeft: cx.baseVal.value - 75,
            tooltipTop: cy.baseVal.value - 33,
            tooltipData: event.datum,
          })
        }
      }
      return null
    },
    [circleDOMList, data.length, lastGlyphPointLoaded, showTooltip],
  )

  const handleMouseOut = useCallback(() => {
    setOpenTooltip(false)
    // timeout for transition
    setTimeout(() => {
      hideTooltip()
    }, 500)
    setAnnotationOpen(true)
  }, [hideTooltip])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentGlyph = containerOuterRef.current?.querySelector(
        `.glyph-${data.length - 1}`,
      ) as SVGCircleElement

      setLastGlyphPoint({
        x: currentGlyph.cx.baseVal.value,
        y: currentGlyph.cy.baseVal.value,
      })

      setLastGlyphPointLoaded(true)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

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
                        {tooltipData && (tooltipData as MelonTop100Datum).rank}
                        위
                      </p>
                    </div>
                  </TooltipInPortal>
                )}

                {lastGlyphPointLoaded && (
                  <Annotation
                    x={lastGlyphPoint.x - 15}
                    y={lastGlyphPoint.y + 20}
                  >
                    <HtmlLabel>
                      <div css={tooltipContainer(annotationOpen)}>
                        <p css={tooltipTimeText}>현재 순위</p>
                        <p css={tooltipRankText}>
                          {data[data.length - 1].rank}위!
                        </p>
                      </div>
                    </HtmlLabel>
                  </Annotation>
                )}
              </>
            ) : null}
          </XYChart>
        </div>
      </div>
    </TooltipProvider>
  )
}

export const Top100Chart = withParentSize<
  WithParentSizeProps & Top100ChartImplProps
>(Top100ChartImpl)
