import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {NextApiRequest, NextApiResponse} from "next";
import FilesController from "@/controllers/FilesController";

async function DeleteFileById(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const [id] = req.query.id;
    const userid = req.session.user.id;

    const result = await FilesController.delete(Number(id), userid);

    res.json({ok: result});
}
export default withIronSessionApiRoute(DeleteFileById, sessionOptions);
