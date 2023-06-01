import css from './project.module.scss'
import Header from "../header/Header";
import {useEffect, useRef, useState} from "react";
import Layout from "../layout/Layout";
import Link from "next/link";
import Button from "../button/Button";
import ConfirmPopup from "./ConfirmPopup";
import axios from "axios";
import useProject from "../../lib/hooks/useProject";
import Router from "next/router";

function ProjectLayout({children, projectId: id}) {
    const url = `/projects/${id}`;

    const {project} = useProject(id);

    const Visibility = useState(false);
    const [isVisible, setIsVisible] = Visibility;

    const Result = useState(null);
    const [value] = Result;

    useEffect(() => {
        if (value) {
            axios
                .post("/api/membership/delete/",  {id} )
                .then(() => Router.replace("/"))
        }
    }, [value])

    return (
        <Layout.Semantic>
            <ConfirmPopup Result={Result} Visibility={Visibility} />
            <div className={css.projectLayout}>
                <Header>
                    <Link href={`${url}/step-${project.stepnumber}`}>Текущий этап</Link>
                    <Link href={`${url}/members`}>Участники</Link>
                    <Link href={`${url}/file-store`}>Хранилище файлов</Link>
                    <Button onClick={() => setIsVisible(true)} label={"Покинуть проект"} />
                </Header>
                {children}
            </div>
        </Layout.Semantic>
    )
}

export default ProjectLayout;