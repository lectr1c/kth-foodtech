// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EventRepo from "../../lib/repo/EventRepo";
import {getToken} from "next-auth/jwt";
import StaffRepo from "../../lib/repo/StaffRepo";

type Data = {
    name: string
}

const secret = process.env.SECRET;
const eventRepo = new EventRepo();
const staffRepo = new StaffRepo();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const session = await getToken({req, secret});

    return new Promise(resolve => {
        if (req.method != "GET") {
            const exists = staffRepo.emailExists(session?.email ? session.email : "**X**").then(value => {
                if (!value) {
                    res.status(403).json({name: "Unauthorised"});
                    return resolve;
                }
            });
        }
        if (req.method == "POST") {
            eventRepo.addEvent({
                brief: req.body.brief,
                datePosted: new Date(),
                description: req.body.description,
                imageURL: req.body.imageURL,
                title: req.body.title
            }).then(r => {
                // @ts-ignore
                res.status(200).json({...r._doc});
            }).catch(err => {
                res.status(400);
            });
        }

        if (req.method == "GET") {
            if (req.query.id){
                // @ts-ignore
                eventRepo.getEvent(req.query.id)
                    .then(value => {
                        // @ts-ignore
                        res.status(200).json(value);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    })
            } else {
                eventRepo.getEvents()
                    .then(value => {
                        // @ts-ignore
                        res.status(200).json(value);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    })
            }
        }
        return resolve;
    })
}