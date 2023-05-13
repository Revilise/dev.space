import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from "@/controllers/UserController";

export default async function TestAPIRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await UserController.getAll();
    res.json(data);
}
