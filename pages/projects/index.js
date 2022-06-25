import projects from "../../projects";
import Nav from "../../components/nav";
import styles from "../../styles/Projects.module.css";
import Card from "../../components/card";




function Projects(){
    return (
        <div className={styles.container}>
            <Nav/>
            <main className={styles.main}>
                {
                    projects.map((project,index)=>{
                        return <Card key={index} filename={project.filename} source={`/projects/${project.filename}/${project.images[0]}`} name={project.name}/>
                    })
                }
            </main>
        </div>
    )
}

export default Projects;