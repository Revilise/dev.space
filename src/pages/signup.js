import Layout from "../components/layout/Layout";
import Input from "../components/input/Input";
import {useState} from "react";
import {User} from "../models/User";
import Button from "../components/button/Button";
import axios from "axios";
import useUser from "../lib/hooks/useUser";

import css from '../styles/pages/Auth.module.scss'
import Link from "../components/link/Link";
import Popup from "../features/popup/Popup";

const fields = [
    {name: "firstname", ru: "имя"},
    {name: "secondname", ru: "фамилия"},
    {name: "lastname", ru: "отчество"},
    {name: "email", ru: "эл. почта", type:"email"},
    {name: "password", ru: "пароль", type: "password"}
]

export default function SignupPage() {
    const {mutateUser} = useUser({
        redirectTo: "/about",
        redirectIfFound: true
    })

    const [user, setUser] = useState(new User());
    const Visibility = useState(false);
    const [v, changeVisibility] = Visibility;


    function OnFieldChange(e) {
        console.log(e.target.name)
        user[e.target.name] = e.target.value;
        setUser(Object.assign(new User(), user));
    }

    async function SendRegRequest(e) {
        const values = Object.values(user);
        if (values.every(e => !!e && e?.trim().length > 0)) {
            return mutateUser(
                await (async function () {
                    const res = await axios.post("http://localhost:3000/api/auth/signup", {user: user.toObject()}).catch(err => console.error(err))
                    if (res?.isLogged) return res;

                    changeVisibility(true);
                })()
            )
        }
    }

    return (
        <Layout>
            <Popup Visibility={Visibility} title={"Ошибка авторизации"} message={"Неверный логин или пароль"}/>
            <div className={css.container}>

                <form className={css.form} onSubmit={e => e.preventDefault()}>
                    <header className={css.header}>
                        <h1>DEV.SPACE</h1>
                    </header>

                    {fields.map((f, i) => (
                        <Input
                            key={i}
                            type={f.type}
                            label={f.ru}
                            value={user[f.name]}
                            name={f.name}
                            onChange={OnFieldChange}
                            required={true}
                        />
                    ))}

                    <Button styleType={"green"} onClick={SendRegRequest}>
                        <Button.Label>Отправить</Button.Label>
                    </Button>

                    <span className={css.nav}>
                        У вас уже есть учетная запись?
                        <Link href={"/signin"}>Авторизация</Link>
                    </span>
                </form>
            </div>
        </Layout>
    )
}