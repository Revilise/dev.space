import css from './input.module.scss';

export default function Input({value, onChange, name, placeholder, required, type = "text", label = null}) {
    return (
        <div className={css.input}>
            {label? <label>{label}</label> : <></>}
            <input required={true} value={value} name={name} placeholder={placeholder} type={type} onChange={onChange} />
        </div>
    )
}