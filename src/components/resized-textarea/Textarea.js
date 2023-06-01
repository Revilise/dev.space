import css from './textarea.module.scss';
import {createRef, useEffect} from "react";

export default function Textarea({
    value = "",
    placeholder = "",
    required = false,
    onChange = function() {},
    name = "",
    label = null
}) {
    const ref = createRef();

    useEffect(() => {
        resize()
    },[value])

    function resize() {
        ref.current.style.height = "auto";
        ref.current.style.height = ref.current.scrollHeight + "px";
    }

    function OnChangeHandle(e) {
        e.preventDefault();
        onChange(e);
        resize();
    }
    return (
       <div className={css.container}>
           {label? <label>{label}</label> : <></>}
            <textarea
                name={name}
                rows={1}
                placeholder={placeholder}
                required={required}
                value={value}
                className={css.textarea}
                ref={ref}
                onChange={OnChangeHandle}
            />
       </div>
    )
}