import {NextApiRequest, NextApiResponse} from "next";
import ProjectsController from "@/controllers/ProjectsController";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import * as http from "http";

async function Get(req: NextApiRequest, res: NextApiResponse) {

    console.log(req.session.lastProjectId)
    if (req.session.lastProjectId) {
        res.json({
            ...req.session.lastProjectId,
        });
    }

    res.json(null);
}

async function Post(req: NextApiRequest, res: NextApiResponse) {
    const {projectid} = req.body;
    req.session.lastProjectId = projectid;
    await req.session.save();

    console.log(req.session.lastProjectId)
    res.json(req.session.lastProjectId);
}

async function GetLastViewedProject(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET": return Get(req, res);
        case "POST": return Post(req, res);
        default: throw new Error("unexpected method: " + req.method);
    }
}

export default withIronSessionApiRoute(GetLastViewedProject, sessionOptions);