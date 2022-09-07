import projects from "../../projects";
import Nav from "../../components/nav";
import styles from "../../styles/Projects.module.css";
import Card from "../../components/card";
import Head from "next/head";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useState,CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function Projects() {
    const [loading,setLoading]=useState(false);

    return (
            <>
                {loading&&(<div className={styles.loader}><HashLoader className={styles.climber} color="#ffffff" loading={true} size={40}/></div>)}
                <div className={styles.container}>
                    <Nav/>
                    <Head>
                        <link rel="icon" href="/logo.png"/>
                        <title>Projects</title>
                    </Head>
                    <main className={styles.main}>
                        <div className={styles.projectsHeader}>
                            <h3>We&apos;re not only <span className={styles.span}>design</span> building but also crafting a <span className={styles.span}>masterpiece</span>.</h3>
                        </div>
                        <div className={styles.heading}>
                            <h2>Projects</h2>
                            <div className={styles.lowerLine}></div>
                            <div className={styles.upperLine}></div>
                        </div>
                        <div className={styles.projects}>
                            {projects.map((project, index) => {
                                return <Card
                                    handleClick={()=>{setLoading(true)}}
                                    key={index}
                                    filename={project.filename}
                                    source={`/projects/${project.filename}/${project.images[0]}`}
                                    name={project.name}/>
                            })
        }
                        </div>

                    </main>
                </div>
            </>
    )
}

export default Projects;