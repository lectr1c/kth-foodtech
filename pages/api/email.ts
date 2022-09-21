// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EventRepo from "../../lib/repo/EventRepo";
import {getToken} from "next-auth/jwt";
import StaffRepo from "../../lib/repo/StaffRepo";
import { SMTPClient, MessageHeaders} from 'emailjs';

type Data = {
    name: string
}

const secret = process.env.SECRET;
const eventRepo = new EventRepo();
const staffRepo = new StaffRepo();

const client = new SMTPClient({
    user: '',
    password: '',
    ssl: true,
    host: 'send.one.com'
})

//one.com webmail email password



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const session = await getToken({req, secret});

    return new Promise(resolve => {
        if (req.method == "POST") {

            const message : MessageHeaders = {
                from: `${req.body.name} <` + req.body.email + `>`,
                to: 'KTH FoodTech <contact@kthfoodtech.se>',
                subject: req.body.name,
                text: req.body.message
            }

            client.send(message,
                (err, message) => {
                console.log(err || message);
                })
        }
        return resolve;
    })
}