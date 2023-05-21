import css from './button.module.scss';

function Button({children, onClick, label = null}) {
    return (
        <button className={css.button} onClick={onClick}>
            { label ? <Button.Label>{label}</Button.Label> : <></> }
            {children}
        </button>
    )
}

// eslint-disable-next-line react/display-name
Button.Label = ({children}) => (
    <div className={css.button__label}>
        {children}
    </div>
)

// eslint-disable-next-line react/display-name
Button.Icon = ({children}) => (
    <div className={css.button__icon}>
        {children}
    </div>
)

export default Button;