import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import MembershipController from "@/controllers/MembershipController";

async function DeleteFromMembershipByPropjectId(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id: userid } = req.session.user;
    const [ projectid ] = req.query.projectid;

    await MembershipController.deleteByUserAndProjectId(userid, Number(projectid))

    res.json(true);
}

export default withIronSessionApiRoute(DeleteFromMembershipByPropjectId, sessionOptions);