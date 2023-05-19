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
    const { mutateUser } = useUser({
        redirectTo: "/about",
        redirectIfFound: true
    })

    const [user, setUser] = useState(new User());

    function OnFieldChange(e) {
        user[e.target.name] = e.target.value;
        setUser(Object.assign(new User(), user));
    }

    async function SendRegRequest() {
        mutateUser(
            await (async function() {
                    const res = await axios.post("http://localhost:3000/api/auth/signup", {user: user.toObject()}).catch(err => console.error(err))
                    if (res?.isLogged) return res;
            })()
        )
    }

    return (
        <Layout>
            <Form>
                {
                    Object.keys(user).map((field, idx) => !field.includes("id") ? <Input required={true} key={idx} label={field} name={field} value={user[field]} onChange={OnFieldChange} /> : '')
                }
                <Button onClick={SendRegRequest}>Отправить</Button>
            </Form>
        </Layout>
    )
}