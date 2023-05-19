import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from "react";
import {Provider, useDispatch} from "react-redux";
import store from '@/app/store'
import axios from "axios";
import useUser from "@/lib/hooks/useUser";

function InnerApp({Component, pageProps}) {
    const {user} = useUser({});
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            axios.get("http://localhost:3000/api/project/nav/")
                .then(res => {
                    dispatch(setNavProjects(res.data))
                })
                .catch(err => console.error(err))
        }
    }, [user])

    return <Component {...pageProps}/>
}

export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <InnerApp Component={Component} pageProps={pageProps}/>
        </Provider>
    )
}