import {useRouter} from "next/router";
import ProjectLayout from "../../../components/project/ProjectLayout";
import useSWR from "swr";

export default function ProjectPage() {
    const {query} = useRouter();

    const {data: project} = useSWR(`http://localhost:3000/api/project/${query.id}`)

    console.log(project)
    return (
        <ProjectLayout projectId={query.id}>
            <h2>{project?.name}</h2>
            <p>{project?.description}</p>
            <p>{project?.generalactivity}</p>
        </ProjectLayout>
    )
}