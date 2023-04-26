import css from './input.module.scss'

export default function Input({
    value,
    placeholder = "",
    onChange = new Function(),
    className = "",
    label
})
{
    return (
        <div className={css.container}>
            { label ? <label>{label}</label> : <></> }
            <input value={value} onChange={onChange} placeholder={placeholder} className={`${css.input} ${className}`.trim()} />
        </div>
    )
}