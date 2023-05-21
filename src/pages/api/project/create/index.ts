import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import ProjectsController from "@/controllers/ProjectsController";
import {Project} from "@/models/Project";

async function CreateProject(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.session.user;
    const props = {...req.body?.project, adminid: id};

    const temp = new Project(props)

    const result = await ProjectsController.insert(temp);

    res.json(result);
}

export default withIronSessionApiRoute(CreateProject, sessionOptions);