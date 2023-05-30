import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {NextApiRequest, NextApiResponse} from "next";
import FilesController from "@/controllers/FilesController";
import {File} from '@/models/File';

async function PostFile(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const file = new File();
    file.data = Object.values(req.body.bytes);
    const result = await FilesController.insert(file).then(res => res.data)
    res.json(result)
}


export default withIronSessionApiRoute(PostFile, sessionOptions);