import {useRouter} from "next/router";
import Nav from "../../components/nav";
import projects from "../../projects";




function Post(){
    const router = useRouter();    
    return(
        <div>
            <Nav/>
            <main>
                {router.query.pid}
            </main>
        </div>
    )
}

export default Post;