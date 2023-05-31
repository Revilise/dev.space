import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {NextApiRequest, NextApiResponse} from "next";
import FilesController from "@/controllers/FilesController";
import {File} from '@/models/File';

async function PostFile(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const {name, type, size, bytes, projectid} = req.body;

    const file = new File({
        name, type, size, projectid, data: Object.values(bytes)
    });

    const result = await FilesController.insert(file).then(res => res.data)
    res.json(result)
}


export default withIronSessionApiRoute(PostFile, sessionOptions);