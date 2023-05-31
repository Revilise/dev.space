export default function FileLoader({onChange, onSubmit, isEnable}) {
    return (
        <div>
            <input type={"file"} onChange={onChange} />
            <button disabled={!isEnable} type={"submit"} onClick={onSubmit}>send</button>
        </div>
    )
}