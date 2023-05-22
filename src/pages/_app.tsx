import '@/styles/globals.css'
import {Provider} from "react-redux";
import store from '@/app/store'
import { SWRConfig } from "swr";
import {fetcher} from "@/lib/fetcher";

export default function App({Component, pageProps}) {
    return (
        <SWRConfig value={{fetcher}}>
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        </SWRConfig>
    )
}