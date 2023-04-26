import PrimaryBackground from "@/components/svg/background/PrimaryBackground"
import Layout from "@/components/layout/Layout"
import css from '../styles/pages/Index.module.scss'
import Link from "next/link"
import Button from '../components/button/Button'
import SVGIcons from '../components/svg/icons/SVGIcons'
import {useRouter} from "next/router"

export default function Home() {
    const router = useRouter();

    function openAuthPage() {
        router.push("/auth/login")
    }
    return (
        <div className={css.container}>
            <PrimaryBackground />
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
                    <div className={css.button}>
                        <Link href={"/auth/login"}>Войти</Link>
                    </div>
                </aside>
                <main className={css.main}>
                    <h1 className={`${css.title} ${"large"}`}>DEV.SPACE</h1>
                    <h3>Тайм-менеджмент, подвластный каждому</h3>
                    <Button onClick={openAuthPage} className={css.button}>
                        Присоединиться
                        <SVGIcons.OpenLink />
                    </Button>
                </main>
            </Layout.Grid>
        </div>
    )
}