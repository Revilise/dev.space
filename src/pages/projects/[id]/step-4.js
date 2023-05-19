import {useRouter} from "next/router";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";

export default function Step4Page() {
    const router = useRouter();

    const {NextStep, PrevStep} = useProjectStep({
        projectId: router.query.id,
        initStep: 4
    });

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <div>
                    <Button onClick={PrevStep}>Предыдуший</Button>
                    <Button onClick={NextStep}>Следующий этап</Button>
                </div>
            </StepLayout.Main>
            <StepLayout.SideTip title={"Этап 4"} content={"Обработка данных"}/>
        </StepLayout>
    )
}