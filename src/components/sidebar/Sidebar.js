import css from './sidebar.module.scss'
import useUser from "@/lib/hooks/useUser";
import axios from "axios";
import Navigation from "@/components/navigation/Navigation";
import {useRouter} from "next/router";
import useNavProjects from "@/lib/hooks/useNavProjects";
import Icons from "@/components/svg-icons/icons";
import Button from "@/components/button/Button";

export default function Sidebar() {
    const {mutateUser} = useUser({
        redirectTo: '/signin'
    });

    const router = useRouter();

    const {navProjects} = useNavProjects();

    async function logout() {
        await mutateUser(
            await (async function () {
                await axios.get('/api/auth/logout')
                return {isLogged: false}
            })()
        )
    }

    return (
        <aside className={css.sidebar}>
            <h1>logo</h1>

            <Navigation>
                <Navigation.Title>
                    <Navigation.Link href={"/"}>Главная</Navigation.Link>
                </Navigation.Title>

                <Navigation.Section>
                    <Navigation.Title>Проекты</Navigation.Title>
                    {navProjects?.map((el, i) => <Navigation.Link key={i} isActive={router.asPath == el.href} href={el.href}>{el.name}</Navigation.Link>)}
                </Navigation.Section>
            </Navigation>

            <Button onClick={logout}>
                <Button.Label>Выйти</Button.Label>
                <Button.Icon>
                    <Icons.LogOut />
                </Button.Icon>
            </Button>
        </aside>
    )
}