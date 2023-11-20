import { SubTitle } from './SubTitle'

interface TimeBaseSubTitleProps {
  time: string
  mb?: string
}
export const TimeBaseSubTitle = (prop: TimeBaseSubTitleProps) => {
  const { time, mb } = prop
  return <SubTitle mb={mb}>오늘 {time} 기준</SubTitle>
}
