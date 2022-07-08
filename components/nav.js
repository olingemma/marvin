import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import {Menu,Close} from "@mui/icons-material";
import {useState} from "react";
import Dropdown from "./dropDown";

function Nav(){
    const [open,setOpen]= useState(false);

    function handleMenu(){
        setOpen(!open)
    }

    return(
      <div className={styles.nav}>
          <nav className={styles.navBar}>
              <Link href="/">
                <a><Image src="/logo.png" height={30} width={30} alt="logo"/></a>
              </Link>
              <div className={styles.links}>
                <Link href="/">
                  <a className={styles.link}>Home</a>
                </Link>
                <Link href="/">
                  <a className={styles.link}>About</a>
                </Link>
                <Link href="/projects">
                  <a className={styles.link}>Projects</a>
                </Link>
                <Link href="/contact">
                  <a className={styles.link}>Contact Us</a>
                </Link>
              </div>
              {open?<Close onClick={handleMenu} className={styles.menuIcon}/>:<Menu onClick={handleMenu} className={styles.menuIcon}/>}
          </nav>
          {open&&<Dropdown/>}
        </div>
    )
}

export default Nav;