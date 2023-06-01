import css from './sidebar.module.scss'
import useUser from "@/lib/hooks/useUser";
import axios from "axios";
import Navigation from "@/components/navigation/Navigation";
import {useRouter} from "next/router";
import useNavProjects from "@/lib/hooks/useNavProjects";
import Icons from "@/components/svg-icons/icons";
import Button from "@/components/button/Button";
import Link from "@/components/link/Link";

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

    async function createProject() {
        axios
            .post("/api/project/post")
            .then(res => {
                if (res.data) router.replace("/projects/" + res.data.projectId)
            })
    }

    return (
        <aside className={css.sidebar}>
            <Link href={"/"}>
                <Icons.Logo />
            </Link>

            <div className={css.sidebar__navigation}>
                <Navigation>
                    <Navigation.Title>
                        <Navigation.Link href={"/"}>Главная</Navigation.Link>
                    </Navigation.Title>

                    <Navigation.Section>
                        <Navigation.Title>
                            Проекты
                            <Button onClick={createProject} styleType={"transparent"}>
                                <Icons.Plus />
                            </Button>
                        </Navigation.Title>
                        {navProjects?.map((el, i) =>
                            {
                                const href = `/projects/${el.id}`;
                                return (
                                    <Navigation.Link
                                        key={i}
                                        isActive={router.asPath.includes(href)}
                                        href={href}
                                    >
                                        {el.name.substring(0, 64) + "..."}
                                    </Navigation.Link>
                                )
                            }
                         )}
                    </Navigation.Section>
                </Navigation>
            </div>

            <Button onClick={logout}>
                <Button.Label>Выйти</Button.Label>
                <Button.Icon>
                    <Icons.LogOut />
                </Button.Icon>
            </Button>
        </aside>
    )
}