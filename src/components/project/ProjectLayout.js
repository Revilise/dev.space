import css from './project.module.scss'
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import {useRouter} from "next/router";
import {useState} from "react";
import Layout from "../layout/Layout";
import Link from "next/link";

export default function ProjectLayout({children, projectId}) {
    const [url] = useState(`/projects/${projectId}`)

    return (
        <Layout.Semantic>
            <div className={css.projectLayout}>
                <Header>
                    <Link href={`${url}/step-1`}>Этап 1</Link>
                    <Link href={`${url}/members`}>Участники</Link>
                </Header>
                {children}
            </div>
        </Layout.Semantic>
    )
}