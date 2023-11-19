/* eslint-disable react/require-default-props */
import SubTitle from './SubTitle'

interface TimeBaseSubTitleProps {
  time: string
  mb?: string
}
const TimeBaseSubTitle = ({ time, mb }: TimeBaseSubTitleProps) => {
  return <SubTitle mb={mb}>오늘 {time} 기준</SubTitle>
}

export default TimeBaseSubTitle
