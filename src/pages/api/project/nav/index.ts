import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import ProjectsController from "@/controllers/ProjectsController";

async function GetNavProjects(req: NextApiRequest, res: NextApiResponse) {
    const userid = req.session.user?.id;

    const result = await ProjectsController.getAllByUserId(userid)

    res.json(result.map(el => ({id: el.id, name: el.name, href: `/projects/${el.id}`})))
}

export default withIronSessionApiRoute(GetNavProjects, sessionOptions);