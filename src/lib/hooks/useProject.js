import useSWR from "swr";

export default function useProject({id = null}) {
    const {data: project, mutate: mutateProject} = useSWR(`http://localhost:3000/api/project/${id}`)
}