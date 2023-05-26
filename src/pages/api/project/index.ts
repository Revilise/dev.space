import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";

async function Get(req: NextApiRequest, res: NextApiResponse) {
    if (req.session.user.lastProjectId) {
        return res.json({
            ...req.session.user.lastProjectId,
        })
    }
    res.json(null);
}

async function Post(req: NextApiRequest, res: NextApiResponse) {
    const {projectid} = req.body;
    const user = req.session.user;
    req.session.user = {...user, lastProjectId: projectid};
    await req.session.save();
    res.json(req.session.user);
}

async function GetLastViewedProject(req: NextApiRequest, res: NextApiResponse) {
    let result = null;
    switch (req.method) {
        case "GET": await Get(req, res); break;
        case "POST": await Post(req, res); break;
        default: throw new Error("unexpected method: " + req.method);
    }
}

export default withIronSessionApiRoute(GetLastViewedProject, sessionOptions);