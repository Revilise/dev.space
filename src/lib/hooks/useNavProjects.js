import useSWR from "swr";
import {fetcher} from "../fetcher";
import {useEffect} from "react";

export default function useNavProjects () {
    const {data: navProjects, mutate: mutateNavProjects} = useSWR(`/api/project/nav`, fetcher);

    return { navProjects, mutateNavProjects }
}