import {NextApiRequest, NextApiResponse} from "next";
import ProjectMembershipController from "@/controllers/ProjectMembershipController";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {ProjectMembership} from "@/models/ProjectMembership";

async function PostDefaultMembership(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {id: userid} = req.session.user;
    const {projectid} = req.body;

    const temp = new ProjectMembership({
        projectid,
        userid
    });

    await ProjectMembershipController.insert(temp);

    res.json(true);
}

export default withIronSessionApiRoute(PostDefaultMembership, sessionOptions);