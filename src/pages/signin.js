import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import {useState} from "react";
import axios from "axios";
import useUser from "../lib/hooks/useUser";

export default function SigninPage() {
    const {mutateUser} = useUser({
        redirectTo: "/",
        redirectIfFound: true
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function SendLoginRequest() {
        mutateUser(
            await (async function() {
                const res = await axios
                                    .post("http://localhost:3000/api/auth/signin", {email, password})
                                    .then(res => res.data)
                                    .catch(err => console.error(err))
                if (res.isLogged) return res;
            })()
        )
    }

    return (
        <Layout>
            <Form>
                <Input key={1} label={"email"} value={email} onChange={e => setEmail(e.target.value)} />
                <Input key={2} label={"password"} value={password} onChange={e => setPassword(e.target.value)} />
                <Button onClick={SendLoginRequest}>Войти</Button>
            </Form>
        </Layout>
    )
}