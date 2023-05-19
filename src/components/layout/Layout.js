import Head from "next/head"
import css from './layout.module.scss'
import Sidebar from "@/components/sidebar/Sidebar";

function Layout({children, title="", metaContent=""}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={metaContent} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={css.layout}>
                { children }
            </div>
        </>
    )
}

// eslint-disable-next-line react/display-name
Layout.Semantic = ({title="", metaContent="", children}) => {
    return (
        <Layout title={title} metaContent={metaContent}>
            <Sidebar />
            {children}
        </Layout>
    )
}

export default Layout;