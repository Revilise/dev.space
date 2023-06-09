import {withIronSessionSsr} from "iron-session/next";
import {sessionOptions} from "./session";

const redirectUnauthorized = withIronSessionSsr(
    async function ({req, res}) {
        const user = req.session?.user;

        if (!user || !user?.isLogged) {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false
                }
            }
        }

        return {
            props: {
                user
            }
        }
    }, sessionOptions
)

export const WithSessionSSR = (fn) => withIronSessionSsr(fn, sessionOptions);

export default redirectUnauthorized;