import PopupBuilder from "./PopupBuilder";

const Popup = PopupBuilder(({Visibility, title, message}) => {
    return (
        <>
            <p>{message}</p>
        </>
    )
})

export default Popup;