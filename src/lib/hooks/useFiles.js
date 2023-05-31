import useSWR from "swr";
import axios from "axios";

export default function useFiles(projectId) {
    const {data: files, mutate: mutateFiles} = useSWR("/api/files/get/"+projectId);

    async function reload() {
        await mutateFiles((async() => {
            axios.get("/api/files/get/"+projectId).then(res => res.data);
        })())
    }

    return {files, reload};
}