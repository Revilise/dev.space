import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import ProjectsController from "@/controllers/ProjectsController";
import {Project} from "@/models/Project";

async function CreateProject(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.session?.user?.id;

    const project = new Project({adminid: Number(id)})
    const result = await ProjectsController.Insert(project)
    res.json(result);
}

export default withIronSessionApiRoute(CreateProject, sessionOptions);