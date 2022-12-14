import Head from 'next/head'
import Image from 'next/image'
import ApplicationShell from 'src/components/medium/applicationShell'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abraham J. Ahn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ApplicationShell />
      </main>
    </div>
  )
}
