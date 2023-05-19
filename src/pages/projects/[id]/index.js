import {useRouter} from "next/router";
import ProjectLayout from "../../../components/project/ProjectLayout";
import useProjectStep from "../../../lib/hooks/useProjectStep";

export default function ProjectPage() {
    const router = useRouter();

    return (
        <ProjectLayout projectId={router.query.id}>
            <h1>sdome</h1>
        </ProjectLayout>
    )
}