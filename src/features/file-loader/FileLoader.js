import {forwardRef, useEffect, useRef} from "react";

// eslint-disable-next-line react/display-name
const FileLoader = forwardRef(({onChange,onSubmit, isEnable}, ref) => {
    return (
        <div>
            <input type={"file"} ref={ref} onChange={onChange} />
            <button disabled={!isEnable} type={"submit"} onClick={onSubmit}>send</button>
        </div>
    )
})

export default FileLoader;