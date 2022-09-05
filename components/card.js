import styles from "../styles/Projects.module.css";
import Image from "next/image";
import {ArrowForward} from "@mui/icons-material";
import Link from "next/link";

function Card({name,source,filename,handleClick}){
    return (
        <Link href={`/projects/${filename}`} >
            <a>
                <div className={styles.card} onClick={handleClick}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.image} src={source} layout="fill"  alt={name}/>
                    </div>
                    <div className={styles.nameTitle}>
                        <h1>{name}</h1>
                    </div>                    
                </div>
            </a>
        </Link>
        
    )
}

export default Card;