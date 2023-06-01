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
import useProject from "../../../lib/hooks/useProject";
import fields from "../../../lib/projectFields";
import Textarea from "../../../components/resized-textarea/Textarea";

export default function Step1Page() {
    const {id} = useRouter().query;

    const {project: _project} = useProject(id);
    const [project, setProject] = useState(_project);
    const [isEnable, setIsEnable] = useState(false);

    useEffect(() => {
        setProject(_project);
        updateEnable(project);
    }, [_project.id])

    const { NextStep } = useProjectStep({
        projectid: id
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

   async function save() {

        return axios.post('/api/project/update/', {
            project,
            projectid: id
        }).then(res => {
            console.log(res)
            return res;
        })
    }
    function onSubmit() {
        project.stepnumber = 2;
        save().then(res => {
            if (res.data.ok)
                NextStep()
        })
    }

    return (
        <StepLayout projectId={id}>
            <StepLayout.Main>
                <form onSubmit={e => e.preventDefault()} className={css.form}>
                    { fields.map((f, i) => (
                        <Textarea
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
                        <Button onClick={save}>
                            <Button.Label>Сохранить</Button.Label>
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