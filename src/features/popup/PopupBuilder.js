import css from "./popup.module.scss";
import Icons from "../../components/svg-icons/icons";

export default function PopupBuilder(WrappedComponent) {
    function Popup(props) {
        const [isVisible, setIsVisible] = props?.Visibility;

        if (isVisible) {
            return (
                <div className={css.before}>
                    <div className={css.container}>
                        <header className={css.header}>
                            {props.title ? <h3>{props.title}</h3> : <></>}
                            <div onClick={() => setIsVisible(false)}>
                                <Icons.Close/>
                            </div>
                        </header>
                        <WrappedComponent {...props} />
                    </div>
                </div>
            )
        }

        return <></>
    }

    Popup.Result = null;

    return Popup;
}