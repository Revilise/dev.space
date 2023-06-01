import useSWR from "swr";
import {Project} from "../../models/Project";

export default function useProject(id) {
    const {data: project = new Project(), mutate: mutateProject} = useSWR("/api/project/get/" + id);

    function setProject(project) {
        (async () => {
            await mutateProject(project);
        })()
    }

    return {project, setProject}
}