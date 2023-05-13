import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from "@/controllers/UserController";

export default async function TestAPIRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let data = await UserController.getAll();

    const user = data[0];
    user.nickname = "user";
    await UserController.Update(1, user);

     data = await UserController.getAll();

    res.json(data);
}
