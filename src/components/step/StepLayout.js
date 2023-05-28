import css from './step.module.scss'
import ProjectLayout from "../project/ProjectLayout";

function StepLayout({children, projectId}) {
    return (
        <ProjectLayout projectId={projectId}>
            <div className={css.step}>
                {children}
            </div>
        </ProjectLayout>

    )
}

// eslint-disable-next-line react/display-name
StepLayout.Main = ({children}) => {
    return (
        <div className={css["step-main"]}>
            {children}
        </div>
    )
}

// eslint-disable-next-line react/display-name
StepLayout.SideTip = ({children}) => {
    return (
        <div className={css["step-tip"]}>
            {children}
        </div>
    )
}

export default StepLayout;