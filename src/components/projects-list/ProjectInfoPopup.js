import PopupBuilder from "../../features/popup/PopupBuilder";
import useUserStatus, {statuses} from "../../lib/hooks/useUserStatus";
import React, {useEffect, useState} from "react";
import css from "../../features/popup/popup.module.scss";
import Button from "../button/Button";
import fields from "@/lib/projectFields";

const Layout = ({project}) => {
    const { status, updateUserStatus }  = useUserStatus({
        init_status: project.userstatus,
        projectid: project.id
    });
    const [label, setLabel] = useState("");

    useEffect(() => {
        switch (status) {
            case statuses["2"]:
                setLabel("Прекратить участие в команде");
                break;
            case statuses["1"]:
                setLabel("Отменить заявку на участие");
                break;
            default:
                setLabel("Подать заявку на участие");
        }
    },[status])

    return (
        <>
            {fields.map((f,i) => (
                <React.Fragment key={i}>
                    <h2>{f.ru}</h2>
                    <p>{project[f.name] ?? ""}</p>
                </React.Fragment>
            ))}
            <div className={css.buttons}>
                <Button onClick={updateUserStatus} label={label}></Button>
            </div>
        </>
    )
}

const ProjectInfoPopup = (props) => PopupBuilder(Layout)({...props, title: " "});

export default ProjectInfoPopup;