import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import ProjectsController from "@/controllers/ProjectsController";

async function GetProjectById(req: NextApiRequest, res: NextApiResponse) {
    const {projectid} = req.query;

    const result = await ProjectsController.getById(Number(projectid));

    res.json(result);
}

export default withIronSessionApiRoute(GetProjectById, sessionOptions);