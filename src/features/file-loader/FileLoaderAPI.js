import FileLoader from "./FileLoader";
import axios from "axios";
import {useState} from "react";

export default function FileLoaderAPI() {
    const [file, setFile] = useState(null);

    function onChange(event) {
        if (event.target.files && event.target.files[0]) {

            event.target.files[0].arrayBuffer().then(resp => {
                let ui8 = new Uint8Array(resp);
                let rawData = [...ui8];
                setFile(rawData);
            })

            // let reader = new FileReader();
            // reader.onloadend = (e) => {
            //     reader.result;
            //     setFile(bytes);
            // };
            // reader.readAsArrayBuffer(event.target.files[0]);
        }
    }

    async function onSubmit() {
        if (file) {
            const response = await axios.post('/api/files/post', {bytes: file});

            console.log("RESPONSE", response);
        }
    }

    return <FileLoader onChange={onChange} onSubmit={onSubmit} isEnable={!!file}/>
}