import {useRouter} from "next/router";
import ProjectLayout from "../../../components/project/ProjectLayout";
import {useEffect} from "react";
import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import axios from "axios";

export default function ProjectPage(props) {
    const {query} = useRouter();

    useEffect(() => {
        axios.post("http://localhost:3000/api/project", {projectid: query.id})
    }, [])

    return (
        <ProjectLayout projectId={query.id}>
            {/*<h2>{project?.name}</h2>*/}
            {/*<p>{project?.description}</p>*/}
            {/*<p>{project?.generalactivity}</p>*/}
        </ProjectLayout>
    )
}

// todo: оно работает, но надо тут выгрузить проект, а в других - считывать projectId
// todo: authProvider который будет работать на swr изменении пользователя.


export const getServerSideProps = WithSessionSSR(async ({req, res}) => {

    if (req.session?.user.lastProjectId)
    return {
        props: { lastProjectId: req.session.user.lastProjectId}
    }

    return {
        props: {
            label: "ds"
        }
    }
})
