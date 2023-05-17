import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import {useState} from "react";
import {User} from "../models/User";
import Button from "../components/button/Button";
import axios from "axios";
import {mutate} from "swr";
import useUser from "../lib/hooks/useUser";

export default function SignupPage() {
    const {mutateUser} = useUser({
        redirectTo: '/',
        redirectIfFound: true
    })
    const [user, setUser] = useState(new User());

    function OnFieldChange(e) {
        user[e.target.name] = e.target.value;
        setUser(Object.assign(new User(), user));
    }

    async function SendRegRequest() {

        console.log(user?.toObject());
        mutateUser(
            await (async function() {
                try {
                    const res = await axios.post("http://localhost:3000/api/auth/logup", {user: user.toObject()})
                    if (res.isLogged) return res;
                } catch {}
            })()
        )
    }

    return (
        <Layout>
            <Form>
                <Input value={user.email} name={"email"} onChange={OnFieldChange} />
                <Input value={user.firstname} name={"firstname"} onChange={OnFieldChange} />
                <Input value={user.password} name={"password"} onChange={OnFieldChange} />
                <Button onClick={SendRegRequest}>Отправить</Button>
            </Form>
        </Layout>
    )
}