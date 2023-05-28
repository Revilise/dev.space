import useSWR from "swr";

export default function useNavProjects () {
    const {data: navProjects, mutate: mutateNavProjects} = useSWR(`/api/project/get/all/2`);

    return { navProjects, mutateNavProjects }
}