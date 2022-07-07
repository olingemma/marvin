import {useRouter} from "next/router";
import Nav from "../../components/nav";
import projects from "../../projects";
import Image from "next/image";
import styles from "../../styles/Projects.module.css";
import {ArrowBack} from "@mui/icons-material";
import Link from "next/link";

export async function getStaticProps(staticProps){
    const pid=staticProps.params.pid;
    
    const data = projects.filter((item)=>{
        return item.filename===pid
    })
    return {
        props:{data}
    }
}

export async function getStaticPaths(){
    const paths= projects.map((item)=>{
        return {params:{pid:item.filename}}
    })

    return{
        paths,
        fallback:false
    }
}


function Post(props){
       
    console.log(props.data[0])
    return(
        <div>
            <Nav/>
            <main className={styles.mainImages}>
                <div className={styles.heading}>
                    <Link href="/projects">
                        <a>
                            <ArrowBack className={styles.icon}/>
                        </a>
                    </Link>
                    
                    <h1>{props.data[0].name}</h1>
                </div>
                <div className={styles.images}>
                    {props.data[0].images.map((item,index)=>{
                        return <div key={index} className={styles.img}><Image height={350} width={650} src={`/projects/${props.data[0].filename}/${item}`} alt={item}/></div>
                    })}
                </div>
            </main>
        </div>
    )
}

export default Post;