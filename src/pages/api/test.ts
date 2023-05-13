import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from "@/controllers/UserController";
import {User} from "@/models/User";

export default async function TestAPIRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const user = new User();
    user.password = "123";
    // await UserController.delete(3);
    await UserController.insert(user);
    let data = await UserController.getAll();

    res.json(data);
}
