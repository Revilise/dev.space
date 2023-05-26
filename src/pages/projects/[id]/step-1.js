import StepLayout from "../../../components/step/StepLayout";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import {useRouter} from "next/router";

export default function Step1Page({lastProjectId}) {
    const router = useRouter();

    const { NextStep } = useProjectStep({
        projectId: router.query.id
    });

    return (
        <StepLayout projectId={lastProjectId}>
            <StepLayout.Main>
                <Input/>
                <Button onClick={NextStep}>Следующий этап</Button>
            </StepLayout.Main>
            <StepLayout.SideTip title={"Этап 1"} content={"описание проекта"}/>
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
    if (req.session?.user.lastProjectId)
        return {
            props: { lastProjectId: req.session.user.lastProjectId }
        }
})