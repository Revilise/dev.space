import Layout from '@/components/layout/Layout';
import useUser from '@/lib/hooks/useUser'
import redirectUnauthorized from "@/lib/auth/redirectUnauthorized";
import axios from "axios";

export default function HomePage() {

  return (
    <Layout.Semantic>

    </Layout.Semantic>
  )
}

export const getServerSideProps = redirectUnauthorized;
