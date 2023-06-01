import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import ProjectsController from "@/controllers/ProjectsController";

async function CreateProject(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.session?.user?.id;
    const result = await ProjectsController.create(Number(id)).catch(err => console.error(err));
    res.json(result);
}

export default withIronSessionApiRoute(CreateProject, sessionOptions);