import {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "@/lib/auth/session";
import {Membership} from "@/models/Membership";
import MembershipController from "@/controllers/MembershipController";

async function PostDefaultMembership(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {id: userid} = req.session.user;
    const {projectid} = req.body;

    const temp = new Membership({
        projectid,
        userid
    });

    await MembershipController.Insert(temp);

    res.json(true);
}

export default withIronSessionApiRoute(PostDefaultMembership, sessionOptions);