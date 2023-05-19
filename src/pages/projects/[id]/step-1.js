import StepLayout from "../../../components/step/StepLayout";
import Input from "../../../components/input/Input";
import {useRouter} from "next/router";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";

export default function Step1Page() {
    const router = useRouter();

    const { NextStep } = useProjectStep({
        projectId: router.query.id
    });

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <Input/>
                <Button onClick={NextStep}>Следующий этап</Button>
            </StepLayout.Main>
            <StepLayout.SideTip title={"Этап 1"} content={"описание проекта"}/>
        </StepLayout>
    )
}
