import StepLayout from "../../../components/step/StepLayout";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import {useEffect} from "react";
import {WithSessionSSR} from "../../../lib/auth/redirectUnauthorized";
import axios from "axios";

export default function Step1Page({lastProjectId}) {

    const { NextStep } = useProjectStep({
        projectId: lastProjectId
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
    console.log(req)
    // axios.get("http://localhost:3000/api/project/"+"")

    if (req.session?.user.lastProjectId)
        return {
            props: { lastProjectId: req.session.user.lastProjectId}
        }

    return {
        props: {
            label: "ds"
        }
    }
})