import TempFooter from './TempFooter'

const TempLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <TempFooter />
    </>
  )
}

export default TempLayout
