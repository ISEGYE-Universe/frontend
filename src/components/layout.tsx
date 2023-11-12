import Navbar from '@/components/CommonLayout/Navbar'
// import Footer from '@/components/CommonLayout/Footer'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
            {/* <Footer /> */}
        </>
    )
}