import useProjectStep from "../../../lib/hooks/useProjectStep";
import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";
import useLastViewedProjectId from "../../../lib/hooks/useLastViewedProjectId";

export default function Step3Page() {
    const { lastProjectId } = useLastViewedProjectId();

    const { NextStep, PrevStep } = useProjectStep({
        projectId: lastProjectId
    });

    return (
        <StepLayout projectId={lastProjectId}>
            <StepLayout.Main>
                <div>
                    <Button onClick={PrevStep}>Предыдуший</Button>
                    <Button onClick={NextStep}>Следующий этап</Button>
                </div>
            </StepLayout.Main>
            <StepLayout.SideTip title={"Этап 3"} content={"Предобработка данных"}/>
        </StepLayout>
    )
}