import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import {useRouter} from "next/router";
import ProjectLayout from "../../../components/project/ProjectLayout";
import useProjectStep from "../../../lib/hooks/useProjectStep";

export default function ProjectPage() {
    const router = useRouter();

    useProjectStep({projectId:router.query.id, redirect: false});

    return (
        <ProjectLayout projectId={router.query.id}>
            <h1>sdome</h1>
        </ProjectLayout>
    )
}