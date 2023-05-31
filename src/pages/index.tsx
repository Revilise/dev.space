import Layout from '@/components/layout/Layout';
import redirectUnauthorized from "@/lib/auth/redirectUnauthorized";
import useSWR from "swr";
import ProjectsList from '@/components/projects-list/ProjectsList';

export default function HomePage() {

    const { data: projects } = useSWR("/api/project/get/all");

  return (
    <Layout.Semantic>
      <ProjectsList items={projects} />
    </Layout.Semantic>
  )
}

export const getServerSideProps = redirectUnauthorized;
