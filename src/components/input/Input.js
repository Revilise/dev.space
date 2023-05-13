export default function Input({value, onChange, label = null}) {
    return (
        <div>
            {label? <label>{label}</label> : <></>}
            <input value={value} onChange={onChange} />
        </div>
    )
}