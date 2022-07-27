import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {DoubleArrow} from "@mui/icons-material";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AM Architects</title>
        <meta name="description" content="Asiimwe marvin is an architect" />
        <link rel="icon" href="/oicon.png" />
      </Head>
      <Nav/>
      <main className={styles.main}>
        
        <div styles={styles.hero}>
          <Image src="/marvin.jpg" height={300} width={250} alt="marvin photo"/>
        </div>
        
        <div className={styles.banner}>
          <h1>Architecture, Engineering & Design Firm</h1>
          <Link href="/about">
            <a><button className={styles.button}><p>Portfolio</p><DoubleArrow/></button></a>
          </Link>
        </div>
      </main>
    </div>
  )
}
