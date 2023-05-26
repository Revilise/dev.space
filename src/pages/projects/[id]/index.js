import {useRouter} from "next/router";
import ProjectLayout from "../../../components/project/ProjectLayout";
import {useEffect, useState} from "react";
import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import axios from "axios";
import Titles from '../../../components/titles/Titles'

export default function ProjectPage(props) {
    const {query} = useRouter();
    const [project, setProject] = useState({});

    useEffect(() => {
        if (query.id) {
            axios.get("http://localhost:3000/api/project/"+query.id).then(res => setProject(res.data));
            axios.post("http://localhost:3000/api/project", {projectid: query.id})
        }
    }, [query.id])

    return (
        <ProjectLayout projectId={query.id}>
            <Titles.h1>{project?.name}</Titles.h1>
            <Titles.h2>Описание проекта</Titles.h2>
            <p>{project?.description}</p>
            <Titles.h2></Titles.h2>
            <p>{project?.generalactivity}</p>
        </ProjectLayout>
    )
}

// todo: оно работает, но надо тут выгрузить проект, а в других - считывать projectId
// todo: authProvider который будет работать на swr изменении пользователя.

export const getServerSideProps = WithSessionSSR(async ({req, res}) => {
    if (!req.session.user) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
})
