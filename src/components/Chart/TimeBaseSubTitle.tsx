import SubTitle from './SubTitle'

interface TimeBaseSubTitleProps {
  time: string
}
const TimeBaseSubTitle = ({ time }: TimeBaseSubTitleProps) => {
  return <SubTitle>오늘 {time} 기준</SubTitle>
}

export default TimeBaseSubTitle
