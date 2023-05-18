import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from "@/controllers/UserController";
import {User} from "@/models/User";
import axios from "axios";

export default async function TestAPIRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const user = User.Create({email: "emaul", firstname: "firstname"});

    const data = await UserController.getAll();

    res.json(data);
}
