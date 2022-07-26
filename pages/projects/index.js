import projects from "../../projects";
import Nav from "../../components/nav";
import styles from "../../styles/Projects.module.css";
import Card from "../../components/card";


function Projects(){
    return (
        <div className={styles.container}>
            <Nav/>
            <main className={styles.main}>
                <div className={styles.projectsHeader}>
                    <h3>We`re not only <span className={styles.span}>design</span> building but also crafting a <span className={styles.span}>masterpiece</span>.</h3>
                </div>
                <div className={styles.heading}>
                <h2>Projects</h2>
                <div className={styles.lowerLine}></div>
                <div className={styles.upperLine}></div>
            </div>
                <div className={styles.projects}>    
                    {
                        projects.map((project,index)=>{
                            return <Card key={index} filename={project.filename} source={`/projects/${project.filename}/${project.images[0]}`} name={project.name}/>
                        })
                    }
                </div>

            </main>
        </div>
    )
}

export default Projects;