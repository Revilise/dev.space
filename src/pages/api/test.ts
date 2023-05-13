import type { NextApiRequest, NextApiResponse } from 'next';
import {UsersRepository} from "@/databases/repositories/UsersRepository";
import UserController from "@/controllers/UserController";

export default async function TestAPIRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = UserController.getAll();
    res.json(data);
}
