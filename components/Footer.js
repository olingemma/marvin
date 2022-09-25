import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Footer.module.css";
import {FacebookOutlined,Instagram} from "@mui/icons-material";

function Footer() {
    let today= new Date();
  return (
    <div className={styles.main}>
        <div>
            <Link href="/">
                <Image height={30} width={30} src="/logo.png" alt="logo"/>
            </Link>
        </div>
        <div className={styles.socials}>
            <FacebookOutlined className={styles.icon}/>
            <Instagram className={styles.icon}/>
        </div>
        <div>
            &copy; {today.getFullYear()}
        </div>
    </div>
  )
}

export default Footer