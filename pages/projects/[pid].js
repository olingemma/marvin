import {useRouter} from "next/router";
import Nav from "../../components/nav";
import projects from "../../projects";
import Image from "next/image";
import styles from "../../styles/Gallery.module.css";
import {ArrowBack} from "@mui/icons-material";
import Link from "next/link";
import Head from "next/head";

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
    const router = useRouter();
    const title= router.query.pid;   
       return(
        <div>
            <Nav/>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/oicon.png"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.heading}>
                    <Link href="/projects" className={styles.iconDiv}>
                        <a>
                            <ArrowBack className={styles.icon}/>
                        </a>
                    </Link>
                    
                    <h1 className={styles.title}>{props.data[0].name}</h1>
                </div>
                <div className={styles.images}>
                    {props.data[0].images.map((item,index)=>{
                        return <div key={index} className={styles.img}><Image className={styles.image} layout="fill" src={`/projects/${props.data[0].filename}/${item}`} alt={item}/></div>
                    })}
                </div>
            </main>
        </div>
    )
}

export default Post;