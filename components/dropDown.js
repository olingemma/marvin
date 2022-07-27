import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { Twitter,Instagram, Facebook } from "@mui/icons-material";

function Dropdown(){
    return(
        <div className={styles.dropDown}>
            <div className={styles.dropDownLinks}>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={styles.link}>About</a>
                </Link>
                <Link href="/projects">
                    <a className={styles.link}>Projects</a>
                </Link>
                <Link href="/contact">
                    <a className={styles.link}>Contact Us</a>
                </Link>
            </div>
            <div><Twitter/><Facebook/><Instagram/></div>
        </div>
    )
}

export default Dropdown;