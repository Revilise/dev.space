import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from "@/controllers/UserController";
import {User} from "@/models/User";

export default async function TestAPIRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {

    await UserController.delete(3);
    let data = await UserController.getAll();

    res.json(data);
}
