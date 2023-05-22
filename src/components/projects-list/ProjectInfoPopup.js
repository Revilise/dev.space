import PopupBuilder from "../../features/popup/PopupBuilder";
import useUserStatus, {statuses} from "../../lib/hooks/useUserStatus";
import {useEffect, useState} from "react";
import css from "../../features/popup/popup.module.scss";
import Button from "../button/Button";

const Layout = ({project}) => {
    const { status, updateUserStatus }  = useUserStatus({
        init_status: project.userstatus,
        projectid: project.id
    });
    const [label, setLabel] = useState("");

    useEffect(() => {
        switch (status) {
            case statuses.invite:
                setLabel("Прекратить участие в команде");
                break;
            case statuses.request:
                setLabel("Отменить заявку на участие");
                break;
            case statuses.null:
                setLabel("Подать заявку на участие");
                break;
            default:
                throw new Error("unexpected status: " + status);
        }
    },[status])

    return (
        <>
            <p>{project.description}</p>
            <div className={css.buttons}>
                <Button onClick={updateUserStatus} label={label}></Button>
            </div>
        </>
    )
}

const ProjectInfoPopup = (props) => PopupBuilder(Layout)(props);

export default ProjectInfoPopup;