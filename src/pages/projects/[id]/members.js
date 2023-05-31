import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import Titles from "../../../components/titles/Titles";
import ProjectLayout from "../../../components/project/ProjectLayout";
import {useRouter} from "next/router";

export default function MembersPage() {
    const router = useRouter();
    return (
        <ProjectLayout projectId={router.query.id}>
            <h1>Участники</h1>
        </ProjectLayout>
    )
}

export const getServerSideProps = WithSessionSSR(async ({req, res}) => {
    if (!req.session.user) return {
        redirect: {
            destination: '/signin',
            permanent: false
        }
    }
    return { props: {} }
})