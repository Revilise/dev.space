import {useRouter} from "next/router";
import ProjectLayout from "../../../components/project/ProjectLayout";
import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import useProject from "../../../lib/hooks/useProject";
import fields from "../../../lib/projectFields";
import React from 'react';

export default function ProjectPage() {
    const {query} = useRouter();
    const {project} = useProject(query.id);

    return (
        <ProjectLayout projectId={query.id}>
            <h1>{project?.name}</h1>

            {fields.map((f,i) => (
                <React.Fragment key={i}>
                    <h2>{f.ru}</h2>
                    <p>{project[f.name] ?? ""}</p>
                </React.Fragment>
                ))}
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
