import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from "react";
import {Provider, useDispatch} from "react-redux";
import store from '@/app/store'

function InnerApp({Component, pageProps}) {
    return <Component {...pageProps}/>
}

export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <InnerApp Component={Component} pageProps={pageProps}/>
        </Provider>
    )
}