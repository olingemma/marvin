import React from 'react';
import styles from "../styles/About.module.css";
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav';
import literature from '../portfolio';

function about() {
    return (
        <div>
            <Nav/>
            <Head>
                <link rel="icon" href="/oicon.png"/>
                <title>About</title>
            </Head>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <h2>About</h2>
                    <div className={styles.lowerLine}></div>
                    <div className={styles.upperLine}></div>
                </div>
                <div className={styles.hero}>
                    <div className={styles.heroImage}>
                        <Image src="/marvin.jpg" height={350} width={300} alt="Marvin profile"/>
                        <h4>Marvin Asiimwe</h4>
                        <p>CEO- AM Architects</p>
                    </div>
                    <div className={styles.literature}>
                        <p>{literature}</p>
                    </div>
                </div>
                <div className={styles.exp}>
                    <div className={styles.expTab}>
                        <p>YEARS EXPERIENCE</p>
                        <h3>10</h3>
                    </div>
                    <div className={styles.expTab}>
                        <p>PROJECTS</p>
                        <h3>45+</h3>
                    </div>
                    <div className={styles.expTab}>
                        <p>SATISFIED CLIENTS</p>
                        <h3>95%</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;