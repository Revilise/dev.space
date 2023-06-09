import useSWR from 'swr';
import React, {useEffect} from "react";
import Router from "next/router";

export default function useUser ({
       redirectTo = '/',
       redirectIfFound = false
} = {}) {
    const {data: user, mutate: mutateUser} = useSWR(`/api/user`);

    useEffect(() => {
        if (!redirectTo || !user) return;

        if (
            (redirectTo && !redirectIfFound && !user?.isLogged) ||
            (redirectIfFound && user?.isLogged)) {

            Router.replace(redirectTo);
        }
    }, [user, redirectIfFound, redirectTo])

    return {user, mutateUser};
}