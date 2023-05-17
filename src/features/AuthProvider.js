import {useRouter} from "next/router";
import {useEffect} from "react";

export default function AuthProvider({user, children}) {
    const router = useRouter();

    useEffect(() => {
        router.push("/signin")
    },[])

    return <>{children}</>
}