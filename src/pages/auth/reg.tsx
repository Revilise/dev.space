import css from "@/styles/pages/Index.module.scss";
import RegBackground from "@/components/svg/background/RegBackground";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import {useState} from "react";

export default function RegPage() {
    const [name, setName] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setRepPassword] = useState();

    return (
        <div className={css.container}>
            <RegBackground />
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
                        <Link className={css.link} href={"/auth/login"}>авторизация</Link>
                        <Input label={"имя"} value={name} onChange={e => setName(e.target.value)} placeholder={"nameless"} />
                        <Input label={"логин"} value={login} onChange={e => setLogin(e.target.value)} placeholder={"your@login.su"} />
                        <Input label={"пароль"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"password"} />
                        <Input label={"ещё раз пароль"} value={passwordRepeat} onChange={e => setRepPassword(e.target.value)} placeholder={"password"} />
                        <Button className={css.button}>Отправить</Button>
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