import useProjectStep from "../../../lib/hooks/useProjectStep";
import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";
import {useRouter} from "next/router";
import css from "../../../styles/pages/ProjectStep.module.scss";
import {useState} from "react";

export default function Step4Page() {
    const router = useRouter();
    const [isEnable, setIsEnable] = useState(false);

    const { NextStep, PrevStep } = useProjectStep({
        projectid: router.query.id,
        initStep: 4
    });

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>
                <div className={css.buttons}>
                    <Button onClick={PrevStep}>
                        <Button.Label>Предыдуший</Button.Label>
                    </Button>
                    <Button isEnable={isEnable} onClick={NextStep}>
                        <Button.Label>Следующий этап</Button.Label>
                    </Button>
                </div>
            </StepLayout.Main>
            <StepLayout.SideTip>
                <span>Этап 4</span>
                <h1>Обработка данных</h1>
                <p>
                    ...
                </p>
            </StepLayout.SideTip>
        </StepLayout>
    )
}