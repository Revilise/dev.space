import {useRouter} from "next/router";
import ProjectLayout from "../../../components/project/ProjectLayout";
import useSWR from "swr";
import {useEffect} from "react";
import useLastViewedProjectId from "../../../lib/hooks/useLastViewedProjectId";

export default function ProjectPage() {
    const {query} = useRouter();
    const { SetLastProjectId } = useLastViewedProjectId();

    const {data: project} = useSWR(`http://localhost:3000/api/project/${query.id}`)

    useEffect(() => {
        if (project?.id) SetLastProjectId(project.id)

    }, [project?.id])

    return (
        <ProjectLayout projectId={query.id}>
            <h2>{project?.name}</h2>
            <p>{project?.description}</p>
            <p>{project?.generalactivity}</p>
        </ProjectLayout>
    )
}