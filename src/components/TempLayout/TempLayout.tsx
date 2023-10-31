import TempFooter from './TempFooter'
import TempGNB from './TempGNB'

interface TempLayoutProps {
  children: React.ReactNode
}

const TempLayout = ({ children }: TempLayoutProps) => {
  return (
    <>
      <TempGNB />
      <main>{children}</main>
      <TempFooter />
    </>
  )
}

export default TempLayout
