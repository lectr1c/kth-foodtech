// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getToken} from "next-auth/jwt";
import SignUpRepo from "../../lib/repo/SignUpRepo";

type Data = {
    message: string
}

const secret = process.env.SECRET;
const signUpRepo = new SignUpRepo();



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const session = await getToken({req, secret});

    return new Promise(resolve => {
        if (req.method == "POST") {
            signUpRepo.addMember(
                {
                    fullName: req.body.fullName,
                    email: req.body.email,
                    accept: req.body.accept
                }
            )
            .then(value => {
                res.status(200).json({message: "Welcome"});
            })
            .catch(err => {
                res.status(400).json({message: err});
            })
        }
        return resolve;
    })
}