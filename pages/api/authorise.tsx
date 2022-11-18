// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EventRepo from "../../lib/repo/EventRepo";
import {getToken} from "next-auth/jwt";
import StaffRepo from "../../lib/repo/StaffRepo";

type Data = {
    message: string
}

const secret = process.env.SECRET;
const staffRepo = new StaffRepo();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const session = await getToken({req, secret});

    return new Promise(resolve => {
        if (req.method == "GET") {
          staffRepo.emailExists(session?.email ? session.email : "**X**")
            .then(value => {
                if (!value) {
                    res.status(403).json({message: "Unauthorised"});
                } else {
                    res.status(200).json({message: "Authorised"});
                }
            }).catch(err => {
                    console.log("error")
                    console.log(err);
            });
        }
        return resolve;
    })
}