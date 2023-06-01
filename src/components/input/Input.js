import css from './input.module.scss';

export default function Input({value, onChange, name, placeholder, required, type = "text", label = null, autoComplete= "false"}) {
    return (
        <div className={css.container}>
            {label? <label>{label}</label> : <></>}
            <input
                className={css.input}
                required={required}
                value={value}
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                autoComplete={autoComplete}
            />
        </div>
    )
}