import '@/styles/globals.css'
import { SWRConfig } from "swr";
import {fetcher} from "@/lib/fetcher";

export default function App({Component, pageProps}) {
    return (
        <SWRConfig value={{fetcher}}>
                <Component {...pageProps}/>
        </SWRConfig>
    )
}