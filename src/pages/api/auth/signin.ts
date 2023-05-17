import UserController from "../../../controllers/UserController";
import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";

function SignInAPIRoute(req: NextApiRequest, res: NextApiResponse) {
    const {email, password} = req.body;

    UserController
        .getByAuthData(email, password)
        .then(async (user) => {
            if (!user.id) return res.json({ok: false});

            req.session.user = {...user, isLogged: true};
            await req.session.save();
            res.json(req.session.user);
        })
        .catch(err => console.log(err))
}

export default withIronSessionApiRoute(SignInAPIRoute, sessionOptions);