import {NextApiRequest, NextApiResponse} from "next";
import UserController from "@/controllers/UserController";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.body;

    const user = await UserController.getById(id);
    res.json(user);
}