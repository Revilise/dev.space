import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {NextApiRequest, NextApiResponse} from "next";
import MembershipController from "@/controllers/MembershipController";

async function getMembership(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {id} = req.session.user;
    const [projectid] = req.query.projectid;

    const result = await MembershipController.GetOne({userid: id, projectid: Number(projectid)})

    res.json(result);
}

export default withIronSessionApiRoute(getMembership, sessionOptions);