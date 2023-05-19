import {useEffect, useState} from "react";
import Router from "next/router";

export default function useProjectStep({
        projectId = null,
        initStep = null
}) {
    const [step, setStep] = useState(initStep ?? 1);

    useEffect(() => {
            Router.replace(`/projects/${projectId}/step-${step}`);
    }, [step, projectId])

    function NextStep() {
        if (step < 5)
            setStep(step + 1);
    }

    function PrevStep() {
        if (step > 1)
            setStep(step - 1)
    }

    return { step, NextStep, PrevStep }
}