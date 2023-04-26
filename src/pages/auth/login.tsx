import css from "@/styles/pages/Index.module.scss";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import LoginBackground from "@/components/svg/background/LoginBackground";
import Input from "@/components/input/Input";
import {useState} from "react";
import Button from "@/components/button/Button";

export default function LoginPage() {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    return (
        <div className={css.container}>
            <LoginBackground />
            <Layout.Grid title={"dev.space - home"}>
                <header className={css.header}>
                    <span className={css.logo}>
                        <Link href={"/"}>logo</Link>
                    </span>
                    <nav className={css.navigation}>
                        <Link href={"/about-project"}>О ПРОЕКТЕ</Link>
                        <Link href={"/docs"}>РУКОВОДСТВО</Link>
                    </nav>
                </header>
                <div className={css.wide}></div>
                <aside className={css.aside}>
                    <form className={css.form}>
                        <Link className={css.link} href={"/auth/reg"}>регистрация</Link>
                        <Input label={"логин"} value={login} onChange={e => setLogin(e.target.value)} placeholder={"your@login.su"} />
                        <Input label={"пароль"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"*****"} />
                        <Button className={css.button}>
                            Войти
                        </Button>
                        <span className={css["button-backround"]} />
                    </form>
                </aside>
                <main className={css.main}>
                    <h1 className={`${css.title} ${"large"}`}>DEV.SPACE</h1>
                    <h3>Тайм-менеджмент, подвластный каждому</h3>
                </main>
            </Layout.Grid>
        </div>
    )
}