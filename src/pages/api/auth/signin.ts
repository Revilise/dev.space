import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import UserController from "@/controllers/UserController";

async function SignInAPIRoute(req: NextApiRequest, res: NextApiResponse) {
    const {email, password} = req.body;

    const user = await UserController.GetOne({email, password})

    if (!user?.id) return res.json({ok: false});

    req.session.user = {...user, isLogged: true};
    await req.session.save();

    res.json(req.session.user);
}

export default withIronSessionApiRoute(SignInAPIRoute, sessionOptions);