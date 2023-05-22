import useSWR from "swr";
import axios from "axios";

export default function useLastViewedProjectId() {
    const {data: lastProjectId, mutate: mutateLastProjectId} = useSWR("http://localhost:3000/api/project/");

    async function SetLastProjectId(projectid) {
        mutateLastProjectId(
            await (async () => {
                const res = await axios
                    .post("http://localhost:3000/api/project", {projectid})
                    .then(res => res.data);

                return res;
            })()
        )
    }

    return {lastProjectId, SetLastProjectId}
}