import css from './projects-list.module.scss'
import {useDispatch} from "react-redux";
import {showPopup} from "@/features/popup/PopupSlice";

function Item({project, onClick}) {

    const handler = () => onClick({
        header: project.name,
        text: project.description
    })

    return (
        <div className={css["list-item"]}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={handler}>подбробнее</button>
        </div>
    )
}

export default function ProjectsList({items = []}) {
    const dispatch = useDispatch();

    function openDetails({header, text}) {
        dispatch(showPopup({
            header, text
        }))
    }

    return (
        <div className={css.list}>
            {items.map((el, idx) => <Item onClick={openDetails} key={idx} project={el} />)}
        </div>
    )
}