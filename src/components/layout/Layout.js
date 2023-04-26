import css from './layout.module.scss';
import Head from "next/head";

function Layout({title = "", description = "", children, className}) {
    return (
        <div className={`${css.layout} ${className}`.trim()}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    )
}

// eslint-disable-next-line react/display-name
Layout.Grid = function({title = "", description = "", children}) {
    return <Layout title={title} description={description} className={css["layout-grid"]}>{children}</Layout>
}

// eslint-disable-next-line react/display-name
Layout.Flex = function({title = "", description = "", children}) {
    return <Layout title={title} description={description} className={css["layout-flex"]}>{children}</Layout>
}

export default Layout;