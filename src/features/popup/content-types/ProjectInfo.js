import useUserStatus, {statuses} from "../../../lib/hooks/useUserStatus";
import Button from "../../../components/button/Button";
import css from "../popup.module.scss";
import Popup from '../Popup';
import {useEffect, useState} from "react";

export default function ProjectInfo({project}) {
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
            <Popup.Header title={project.name} />
            <p>{project.description}</p>
            <div className={css.buttons}>
                <Button onClick={updateUserStatus} label={label}></Button>
            </div>
        </>
    )
}