import Layout from '@/components/layout/Layout';
import useUser from '@/lib/hooks/useUser'
import redirectUnauthorized from "@/lib/auth/redirectUnauthorized";
import axios from "axios";

export default function HomePage() {
  const { mutateUser } = useUser({
      redirectTo: '/signin'
  });

  async function logout() {
    await mutateUser(
        await (async function() {
          await axios.get('/api/auth/logout')
          return { isLogged: false }
        })()
    )
  }

  return (
    <Layout>
      <button onClick={logout}>logout</button>
    </Layout>
  )
}

export const getServerSideProps = redirectUnauthorized;
