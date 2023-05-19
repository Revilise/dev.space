import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {NextApiRequest, NextApiResponse} from "next";
import ProjectsController from "@/controllers/ProjectsController";

async function GetAllProjects(req: NextApiRequest, res: NextApiResponse) {
    const result = await ProjectsController.getAll();

    res.json(result);
}

export default withIronSessionApiRoute(GetAllProjects, sessionOptions);