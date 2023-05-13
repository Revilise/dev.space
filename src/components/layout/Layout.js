import Head from "next/head";

export default function Layout({children, title = "", metaContent = ""}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={metaContent} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}