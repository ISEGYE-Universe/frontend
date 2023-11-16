import TempFooter from './TempFooter'

const TempLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <TempFooter />
    </>
  )
}

export default TempLayout
