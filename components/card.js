import styles from "../styles/Projects.module.css";
import Image from "next/image";
import {ArrowForward} from "@mui/icons-material";
import Link from "next/link";

function Card({name,source,filename}){
    return (
        <Link href={`/projects/${filename}`}>
            <a>
                <div className={styles.card}>
                    <Image src={source} height={180} width={250} alt={name}/>
                    <div className={styles.project}>
                        <h3>{name} <ArrowForward/></h3>
                    </div>
                </div>
            </a>
        </Link>
        
    )
}

export default Card;