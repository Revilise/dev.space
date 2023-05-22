import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";

async function GetMembershipOfProject(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { projectId } = req.query;

    const result = null;
    //
    res.json(result);
}

export default withIronSessionApiRoute(GetMembershipOfProject, sessionOptions)