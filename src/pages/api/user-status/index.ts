import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";

async function GetUserStatusesByUserId(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { projectId } = req.query;
    const { id: userId } = req.session.user;



    res.json(result);
}

export default withIronSessionApiRoute(GetUserStatusesByUserId, sessionOptions)


