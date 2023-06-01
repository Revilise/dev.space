import useProjectStep from "../../../lib/hooks/useProjectStep";
import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";
import {useRouter} from "next/router";

export default function Step3Page() {
    const router = useRouter();

    const { NextStep, PrevStep } = useProjectStep({
        projectid: router.query.id,
        initStep: 3
    });

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <div>
                    <Button onClick={PrevStep}>Предыдуший</Button>
                    <Button onClick={NextStep}>Следующий этап</Button>
                </div>
            </StepLayout.Main>
            <StepLayout.SideTip>
                <span>Этап 3</span>
                <h1>Предобработка данных</h1>
                <p>
                    ...
                </p>
            </StepLayout.SideTip>
        </StepLayout>
    )
}