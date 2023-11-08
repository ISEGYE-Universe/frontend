import Head from 'next/head'
import { Inter } from 'next/font/google'

import Banner from '@/components/Banner/Banner'
import { News } from '@/components/News/News'
import Movie from '@/components/Movie/Movie'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <Movie />
      </main>
    </>
  )
}
