import StepLayout from "../../../components/step/StepLayout";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import {useRouter} from "next/router";

export default function Step1Page() {
    const router = useRouter();

    const { NextStep } = useProjectStep({
        projectid: router.query.id
    });


    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <Input/>
                <Button onClick={NextStep}>Следующий этап</Button>
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