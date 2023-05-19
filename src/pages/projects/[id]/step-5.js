import {useRouter} from "next/router";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";

export default function Step5Page() {
    const router = useRouter();

    const {PrevStep} = useProjectStep({
        projectId: router.query.id,
        initStep: 5
    });

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <Button onClick={PrevStep}>Предыдуший</Button>
            </StepLayout.Main>
            <StepLayout.SideTip title={"Этап 5"} content={"Формулировка отчета"}/>
        </StepLayout>
    )
}