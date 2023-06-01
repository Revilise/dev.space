import PopupBuilder from "../../features/popup/PopupBuilder";
import Button from "../button/Button";
import css from '../../styles/pages/ProjectStep.module.scss'

const Layout = (props) => {
    const [isVisible, setIsVisible] = props.Visibility;
    const [value, setValue] = props.Result;

    function Solve(result) {
        setValue(result);
        setIsVisible(false);
    }

    return (
        <>
            <span>Вы действительно хотите покинуть проект?</span>
            <div className={css.buttons}>
                <Button onClick={() => Solve(true)}>
                    <Button.Label>Да</Button.Label>
                </Button>
                <Button onClick={() => Solve(false)}>
                    <Button.Label>Отменить</Button.Label>
                </Button>
            </div>
        </>
    )
}

const ConfirmPopup = (props) => PopupBuilder(Layout)({...props, title: "Покинуть проект"})

export default ConfirmPopup;