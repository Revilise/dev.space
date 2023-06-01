import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {NextApiRequest, NextApiResponse} from "next";
import ProjectsController from "@/controllers/ProjectsController";

function updateProject(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {project, projectid} = req.body;

    const result = ProjectsController.update(projectid, project);

    res.json({ok: result})
}

export default withIronSessionApiRoute(updateProject, sessionOptions);