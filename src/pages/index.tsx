import Layout from '@/components/layout/Layout';
import redirectUnauthorized from "@/lib/auth/redirectUnauthorized";
import useSWR from "swr";
import ProjectsList from '@/components/projects-list/ProjectsList';

export default function HomePage() {

    const { data: projects } = useSWR("http://localhost:3000/api/project/all");

  return (
    <Layout.Semantic>
      <ProjectsList items={projects} />
    </Layout.Semantic>
  )
}

export const getServerSideProps = redirectUnauthorized;
