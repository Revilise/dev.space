import useProjectStep from "../../../lib/hooks/useProjectStep";
import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";
import useLastViewedProjectId from "../../../lib/hooks/useLastViewedProjectId";

export default function Step5Page() {
    const { lastProjectId } = useLastViewedProjectId();

    const { PrevStep } = useProjectStep({
        projectId: lastProjectId
    });

    return (
        <StepLayout projectId={lastProjectId}>
            <StepLayout.Main>
                <Button onClick={PrevStep}>Предыдуший</Button>
            </StepLayout.Main>
            <StepLayout.SideTip title={"Этап 5"} content={"Формулировка отчета"}/>
        </StepLayout>
    )
}