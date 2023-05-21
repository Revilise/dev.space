import css from './projects-list.module.scss'
import {useDispatch} from "react-redux";
import {showPopup} from "@/features/popup/PopupSlice";
import Button from "@/components/button/Button";

function Item({project}) {


    const dispatch = useDispatch();

    function openDetails() {
        const options = {
            type: 'ProjectInfo',
            payload: {project}
        }

        dispatch(showPopup({
            header: project.name,
            text: project.description,
            options
        }))
    }

    return (
        <div className={css["list-item"]}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Button onClick={openDetails} label={"подбробнее"} />
        </div>
    )
}

export default function ProjectsList({items = []}) {
    return (
        <div className={css.list}>
            {items.map((el, idx) => <Item key={idx} project={el} />)}
        </div>
    )
}