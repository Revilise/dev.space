import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from "@/controllers/UserController";
import {User} from "@/models/User";
import axios from "axios";

export default async function TestAPIRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const user = new User();
    user.password = "";
    user.nickname = "trash";

    await axios
            .post("http://localhost:3000/api/auth/signup/", {user: user.toObject()})
            .then(res => console.log(res.data))

    res.json(null);
}
