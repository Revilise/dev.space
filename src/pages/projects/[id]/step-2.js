import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import {useRouter} from "next/router";

export default function Step2Page() {
    const router = useRouter();

    const { NextStep, PrevStep } = useProjectStep({
        projectid: router.query.id,
        initStep: 2
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
                <span>Этап 2</span>
                <h1>Исследование источников</h1>
                <p>
                    На данном этапе вам необходимо исследовать предложенные источники и загрузить данные в хранилище проекта.
                </p>
            </StepLayout.SideTip>
        </StepLayout>
    )
}