import TempFooter from './TempFooter'

function TempLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <TempFooter />
    </>
  )
}

export default TempLayout
