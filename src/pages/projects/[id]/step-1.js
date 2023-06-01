import StepLayout from "../../../components/step/StepLayout";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import {useRouter} from "next/router";
import {Project} from "../../../models/Project";
import {useEffect, useState} from "react";
import axios from "axios";
import css from '../../../styles/pages/ProjectStep.module.scss'

const fields = [
    {name: "name", ru: "название проекта"},
    {name: "description", ru: "описание"},
    {name: "goals", ru: "цели"},
    {name: "generalactivity", ru: "основная активность в рамках проекта"},
    {name: "geography", ru: "география"},
    {name: "expectedresults", ru: "ожидаемые результаты"},
]

export default function Step1Page() {
    const router = useRouter();

    const [project, setProject] = useState(new Project())
    const [isEnable, setIsEnable] = useState(false);

    useEffect(() => {
        if (router.query.id)
            axios
                .get("/api/project/get/"+router.query.id)
                .then(res => {
                    setProject(res.data);
                    updateEnable(res.data);
                })

    }, [router.query.id])

    const { NextStep } = useProjectStep({
        projectid: router.query.id
    });

    function OnFieldChange(e) {
        project[e.target.name] = e.target.value;
        const temp = Object.assign(new Project(), project);
        setProject(temp);
        updateEnable(temp);
    }

    function updateEnable(temp) {
        const values = []
        for (let f of fields) {
            values.push(temp[f.name]);
        }

        setIsEnable(values.every(e => !!e))
    }

    function onSubmit() {
        axios.post('/api/project/update/', {
            project,
            projectid: router.query.id
        }).then(res => {
            if (res.data.ok)
                NextStep()
        })
    }

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <form onSubmit={e => e.preventDefault()} className={css.form}>
                    { fields.map((f, i) => (
                        <Input
                            key={i}
                            label={f.ru}
                            value={project[f.name] ?? ""}
                            name={f.name}
                            onChange={OnFieldChange}
                            required={true}
                        />
                    )) }
                    <div className={css.buttons}>
                        <Button isEnable={isEnable} onClick={onSubmit}>
                            <Button.Label>Следующий этап</Button.Label>
                        </Button>
                    </div>
                </form>
            </StepLayout.Main>
            <StepLayout.SideTip>
                <span>Этап 1</span>
                <h1>Описание проекта</h1>
                <p>
                    На данном этапе вам необходимо описать ваш проект. Перейти на следующий этап можно только после заполнения всех полей.
                </p>
            </StepLayout.SideTip>
        </StepLayout>
    )
}

export const getServerSideProps = WithSessionSSR(async ({req, res}) => {
    if (!req.session.user) return {
        redirect: {
            destination: '/signin',
            permanent: false
        }
    }
    return { props: {} }
})