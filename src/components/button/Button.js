import css from './button.module.scss'

export default function Button({children, onClick = () => {}, className}) {
    return <button onClick={onClick} className={`${css.button} ${className}`.trim()}>{children}</button>
}