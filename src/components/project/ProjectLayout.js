import css from './project.module.scss'
import Header from "../header/Header";
import {useEffect, useState} from "react";
import Layout from "../layout/Layout";
import Link from "next/link";
import Button from "../button/Button";
import ConfirmPopup from "./ConfirmPopup";
import axios from "axios";
import Router from "next/router";

function ProjectLayout({children, projectId}) {
    const url = `/projects/${projectId}`;

    const Visibility = useState(false);
    const [isVisible, setIsVisible] = Visibility;

    const Result = useState(null);
    const [value] = Result;

    useEffect(() => {
        if (value) {
            axios
                .delete("http://localhost:3000/api/membership/delete/" + projectId)
                .then(() => Router.replace("/"))
        }
    }, [value])

    return (
        <Layout.Semantic>
            <ConfirmPopup Result={Result} Visibility={Visibility} />
            <div className={css.projectLayout}>
                <Header>
                    <Link href={`${url}/step-1`}>Этап 1</Link>
                    <Link href={`${url}/members`}>Участники</Link>
                    <Link href={`${url}/file-store`}>Хранилище файлов</Link>
                    <Button onClick={() => setIsVisible(true)}>Покинуть проект</Button>
                </Header>
                {children}
            </div>
        </Layout.Semantic>
    )
}

export default ProjectLayout;