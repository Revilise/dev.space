import css from './projects-list.module.scss'
import Button from "@/components/button/Button";
import ProjectInfoPopup from "@/components/projects-list/ProjectInfoPopup";
import {useState} from "react";

function Item({project}) {
    const Visibility = useState(false);
    const [isVisible, setIsVisible] = Visibility;

    return (
        <>
            <ProjectInfoPopup Visibility={Visibility} title={project.name} project={project} />
            <div className={css["list-item"]}>
                <div className={css["list-item__content"]}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
                <div className={css["list-item__manage-panel"]}>
                    <Button onClick={() => setIsVisible(true)} label={"подбробнее"} />
                </div>
            </div>
        </>
    )
}

export default function ProjectsList({items = []}) {
    return (
        <div className={css.list}>
            {items.map((el, idx) => <Item key={idx} project={el} />)}
        </div>
    )
}