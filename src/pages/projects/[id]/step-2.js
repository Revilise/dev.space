import {useRouter} from "next/router";
import StepLayout from "../../../components/step/StepLayout";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";

export default function Step2Page() {
    const router = useRouter();

    const {NextStep, PrevStep} = useProjectStep({
        projectId: router.query.id,
        initStep: 2
    });

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <h1>Этап 2</h1>
                <div>
                    <Button onClick={PrevStep}>Предыдуший</Button>
                    <Button onClick={NextStep}>Следующий этап</Button>
                </div>
            </StepLayout.Main>
            <StepLayout.SideTip title={"Этап 2"} content={"Исследование источников"}/>
        </StepLayout>
    )
}