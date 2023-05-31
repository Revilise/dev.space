import {useEffect, useState} from "react";
import Router from "next/router";

export default function useProjectStep({
        projectid = null,
        initStep = 1
}) {
    const [step, setStep] = useState(initStep);

    useEffect(() => {
        if (projectid) {
            Router.replace(`/projects/${projectid}/step-${step}`);
        }
    }, [step, projectid])

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