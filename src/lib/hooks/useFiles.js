import useSWR from "swr";
import axios from "axios";

export default function useFiles(projectId) {
    const {data: files, mutate: mutateFiles} = useSWR("/api/files/get/"+projectId);

    async function reload() {
        await mutateFiles((async() => {
            axios.get("/api/files/get/"+projectId).then(res => res.data);
        })())
    }

    async function removeFile(file) {
        await mutateFiles(files.filter(el => el.id !== file.id))
    }

    async function addFile(file) {
        const copy = [...files, file];
        await mutateFiles(copy);
    }

    return {files, reload, removeFile, addFile};
}