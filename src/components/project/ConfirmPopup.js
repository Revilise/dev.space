import PopupBuilder from "../../features/popup/PopupBuilder";
import Button from "../button/Button";

const Layout = (props) => {
    const [isVisible, setIsVisible] = props.Visibility;
    const [value, setValue] = props.Result;

    function Solve(result) {
        setValue(result);
        setIsVisible(false);
    }

    return (
        <>
            <Button onClick={() => Solve(true)}>Да</Button>
            <Button onClick={() => Solve(false)}>Отменить</Button>
        </>
    )
}

const ConfirmPopup = (props) => PopupBuilder(Layout)(props)

export default ConfirmPopup;