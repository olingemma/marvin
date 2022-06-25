import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AM Architects</title>
        <meta name="description" content="Asiimwe marvin is an architect" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
        <h1>Marvins website</h1>
      </main>
    </div>
  )
}
