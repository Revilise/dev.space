import {NextApiRequest, NextApiResponse} from "next";

import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from '@/lib/auth/session';
import UserController from "@/controllers/UserController";
import {User} from "@/models/User";


async function SignUpAPIRoute(req: NextApiRequest, res: NextApiResponse) {
    const {user} = req.body;
    const temp = User.Parse(user);

    UserController
        .insert(temp)
        .then(async (insertedUser) => {
            if (!insertedUser.id) return res.json({ok: false});

            req.session.user = {...insertedUser, isLogged: true};
            await req.session.save();
            res.status(200).json(req.session.user);
        })
        .catch(err => console.log(err));
}

export default withIronSessionApiRoute(SignUpAPIRoute, sessionOptions);