import ProjectsController from "@/controllers/ProjectsController";
import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";

async function GetAllProjects(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.session.user;

    const result = await ProjectsController.getAll(id);

    res.json(result);
}

export default withIronSessionApiRoute(GetAllProjects, sessionOptions);