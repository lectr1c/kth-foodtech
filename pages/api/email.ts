// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getToken} from "next-auth/jwt";
import EmailRepo from "../../lib/repo/EmailRepo";

type Data = {
    message: string
}

const secret = process.env.SECRET;
const emailrepo = new EmailRepo();

// const client = new SMTPClient({
//     user: 'kthfoodtech@gmail.com',
//     password: 'Team22/23!',
//     ssl: true,
//     host: 'mailout.one.com'
// })

// //one.com webmail email password



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const session = await getToken({req, secret});

    return new Promise(resolve => {
        if (req.method == "POST") {
            emailrepo.addEmail(
                {
                    name: req.body.name,
                    email: req.body.email,
                    message: req.body.message
                }
            )
            .then(value => {
                res.status(200).json({message: "Added"});
            })
            .catch(err => {
                res.status(400).json({message: err});
            })
        }
        return resolve;
    })
}