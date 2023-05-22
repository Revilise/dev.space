import StepLayout from "../../../components/step/StepLayout";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import useLastViewedProjectId from "../../../lib/hooks/useLastViewedProjectId";
import {useEffect} from "react";

export default function Step1Page() {

    const { lastProjectId } = useLastViewedProjectId();

    const { NextStep } = useProjectStep({
        projectId: lastProjectId
    });

    useEffect(() => {

    }, [lastProjectId])

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

// todo: make ssr;