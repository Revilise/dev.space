import useSWR from "swr";

export default function useNavProjects () {
    const {data: navProjects, mutate: mutateNavProjects} = useSWR(`/api/project/nav`);

    return { navProjects, mutateNavProjects }
}