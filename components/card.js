import styles from "../styles/Projects.module.css";
import Image from "next/image";
import {ArrowForward} from "@mui/icons-material";
import Link from "next/link";

function Card({name,source,filename}){
    return (
        <Link href={`/projects/${filename}`}>
            <a>
                <div className={styles.card}>
                    <div className={styles.imgDiv}>
                        <Image src={source} layout="fill"  alt={name}/>
                    </div>
                                        
                    <div className={styles.project}>
                        <h3>{name}</h3>
                    </div>
                </div>
            </a>
        </Link>
        
    )
}

export default Card;