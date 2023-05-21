import css from './popup.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {closePopup, selectContent, selectIsPopupVisible, selectOptions, setResult} from "./PopupSlice";
import {useEffect} from "react";
import Icons from "@/components/svg-icons/icons";
import {contentTypes} from "@/features/popup/content-types/contentTypes";

function Popup() {
    const dispatch = useDispatch();
    const { type, fn, payload } = useSelector(selectOptions);
    const isVisible = useSelector(selectIsPopupVisible);

    useEffect(() => {
        function KeyDown(e) {
            if (e.key === "Escape") close();
        }

        window.addEventListener('keydown', KeyDown);

        return () => window.removeEventListener('keydown', KeyDown);
    }, [])

    function close() {
        dispatch(closePopup())
    }

    const Component = contentTypes[type];

    if (isVisible)
    return (
        <div className={css.before}>
            <div className={css.container}>
                { <Component {...payload} /> }
            </div>
        </div>
    )

    return <></>
}

// eslint-disable-next-line react/display-name
Popup.Header = ({title}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    return (
        <header className={css.header}>
            <h3>{title}</h3>
            <div onClick={() => dispatch(closePopup())}>
                <Icons.Close/>
            </div>
        </header>
    )
}

export default Popup;