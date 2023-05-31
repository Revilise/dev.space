import ProjectsController from "@/controllers/ProjectsController";
import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";

async function GetAllProjectsWithUserStatus(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.session.user;
    const {status} = req.query;

    const result = await ProjectsController.getAllByUserId(id, Number(status));

    res.json(result);
}

export default withIronSessionApiRoute(GetAllProjectsWithUserStatus, sessionOptions);