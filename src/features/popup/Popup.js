import cl from './popup.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {closePopup, selectContent, selectIsPopupVisible, selectOptions, setResult} from "./PopupSlice";
import {useEffect} from "react";
import Button from "@/components/button/Button";

export default function Popup() {
    const dispatch = useDispatch();
    const { text, header } = useSelector(selectContent);
    const { ok, cancel, fn } = useSelector(selectOptions);
    const isVisible = useSelector(selectIsPopupVisible);

    useEffect(() => {
        function KeyDown(e) {
            if (e.key === "Escape") close();
        }

        window.addEventListener('keydown', KeyDown);

        return () => window.removeEventListener('keydown', KeyDown);
    }, [])

    function close(result) {
        dispatch(setResult(result))
        if (result && fn) fn();
        dispatch(closePopup())
    }

    if (isVisible)
    return (
        <div className={cl.before}>
            <div className={cl.container}>
                <header className={cl.header}>
                    <h3>{header}</h3>
                    <div onClick={close}>
                        close
                    </div>
                </header>
                <p>{text}</p>
                { ok || cancel ? (
                    <div className={cl.buttons}>
                        { ok ? <Button onClick={() => close(true)}>ok</Button> : <></> }
                        { cancel ? <Button onClick={() => close(false)}>cancel</Button> : <></> }
                    </div>
                ) : <></>}
            </div>
        </div>
    )

    return <></>
}