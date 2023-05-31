import axios from "axios";
import Layout from "../components/layout/Layout";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import {useState} from "react";
import useUser from "../lib/hooks/useUser";

import css from '../styles/pages/Auth.module.scss'
import Link from "../components/link/Link";
import Popup from "../features/popup/Popup";

export default function SigninPage() {
    const {mutateUser} = useUser({
        redirectTo: "/",
        redirectIfFound: true
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Visibility = useState(false);
    const [v, changeVisibility] = Visibility;

    async function SendLoginRequest() {
        if (email.trim().length > 0 && password.trim().length > 0) {
            return mutateUser(
                await (async function () {

                    const res = await axios
                        .post("/api/auth/signin", {email, password})
                        .then(res => res.data)
                        .catch(err => console.error(err))

                    if (res.isLogged) return res;

                    changeVisibility(true);
                })()
            )
        }
    }

    return (
        <Layout>
            <Popup Visibility={Visibility} title={"Ошибка авторизации"} message={"Неверный логин или пароль"} />
            <div className={css.container}>
                <form className={css.form} onSubmit={e => e.preventDefault()}>
                    <header className={css.header}>
                        <h1>DEV.SPACE</h1>
                    </header>
                    <Input
                        type={"email"}
                        key={1}
                        label={"Почта"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        type={"password"}
                        key={2}
                        label={"Пароль"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button styleType={"green"} onClick={SendLoginRequest}>
                        <Button.Label>Войти</Button.Label>
                    </Button>

                    <span className={css.nav}>
                        У вас ещё нет учетной записи?
                        <Link href={"/signup"}>Регистрация</Link>
                    </span>
                </form>
            </div>
        </Layout>
    )
}