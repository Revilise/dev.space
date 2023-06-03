import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import ProjectsController from "@/controllers/ProjectsController";

async function GetAllProjects(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.session.user;

    const result = await ProjectsController.GetAll(null);

    res.json(result);
}

export default withIronSessionApiRoute(GetAllProjects, sessionOptions);