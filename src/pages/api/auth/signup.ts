import {NextApiRequest, NextApiResponse} from "next";

import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from '@/lib/auth/session';
import {User} from "@/models/User";
import UserController from "@/controllers/UserController";


async function SignUpAPIRoute(req: NextApiRequest, res: NextApiResponse) {
    const {user} = req.body;
    const temp = User.Parse(user);

    UserController.Insert(temp).then(async (insertedUser) => {
            if (!insertedUser.id) return res.json({ok: false});

            req.session.user = {...insertedUser, isLogged: true};
            await req.session.save();
            res.status(200).json(req.session.user);
        })
}

export default withIronSessionApiRoute(SignUpAPIRoute, sessionOptions);