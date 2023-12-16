import Head from 'next/head'
import { Artist } from '@/components/Artist/Artist'
import Banner from '@/components/Banner/Banner'
import { News } from '@/components/News/News'
import Movie from '@/components/Movie/Movie'
import { Footer } from '@/components/CommonLayout/Footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <News />
        <Artist />
        <Movie />
      </main>
      <Footer />
    </>
  )
}

export default Home
