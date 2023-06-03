import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import FilesController from "@/controllers/FilesController";

async function GetFilesByProjectId(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const [projectId] = req.query.projectId;

    const result = await FilesController.GetAll({projectid: Number(projectId)});

    res.json(result);
}

export default withIronSessionApiRoute(GetFilesByProjectId, sessionOptions);