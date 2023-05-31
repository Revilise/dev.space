import FileLoader from "./FileLoader";
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

export default function FileLoaderAPI({reload}) {
    const [file, setFile] = useState(null);
    const router = useRouter();
    const inputRef = useRef(null);

    function onChange(event) {
        if (event.target.files && event.target.files[0]) {

            event.target.files[0].arrayBuffer().then(resp => {
                const {name, type, size} = event.target.files[0];
                let ui8 = new Uint8Array(resp);
                let rawData = [...ui8];
                setFile({name, type, size, projectid: router.query.id, bytes: rawData});
            })
        }
    }

    async function onSubmit() {
        if (file) {
            const response = await axios.post('/api/files/post', file);

            // временный костыль на обнолвение всего списка.
            // Лучше переделать на частичное обновление

            if (response) {
                inputRef.current.value = null;
                setFile(null);
                reload();
            }
        }
    }

    return <FileLoader ref={inputRef} onChange={onChange} onSubmit={onSubmit} isEnable={!!file}/>
}