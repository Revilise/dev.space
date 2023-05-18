import {NextApiRequest, NextApiResponse} from "next";
import {sessionOptions} from "@/lib/auth/session";
import {withIronSessionApiRoute} from "iron-session/next";

// eslint-disable-next-line import/no-anonymous-default-export
async function GetSessionUser(req: NextApiRequest, res: NextApiResponse) {
    if (req.session.user) {
        // in a real world application you might read the user id from the session and then do a database request
        // to get more information on the user if needed
        res.json({
            ...req.session.user,
            isLoggedIn: true,
        });
    } else {
        res.json({
            isLoggedIn: false,
        });
    }
}

export default withIronSessionApiRoute(GetSessionUser, sessionOptions)