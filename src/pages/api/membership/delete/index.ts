import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {ProjectMembership} from "@/models/ProjectMembership";
import ProjectMembershipController from "@/controllers/ProjectMembershipController";

async function DeleteFromMembershipByPropjectId(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id: userid } = req.session.user;
    const { projectId } = req.body;

    await ProjectMembershipController.deleteByUserAndProjectId(userid, Number(projectId)).catch(err => console.error(err));

    res.json(true);
}

export default withIronSessionApiRoute(DeleteFromMembershipByPropjectId, sessionOptions);