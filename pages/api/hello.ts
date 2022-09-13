// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EventRepo from "../../lib/repo/EventRepo";
import {getToken} from "next-auth/jwt";
import StaffRepo from "../../lib/repo/StaffRepo";

type Data = {
  name: string
}

const secret = process.env.SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getToken({req, secret});
  const eventRepo = new EventRepo();
  const staffRepo = new StaffRepo();




  return new Promise(resolve => {
    if (req.method != "GET") {
      if (session?.email !== "abdulrazzaq.summaq@gmail.com") {
        const emailExists = staffRepo.emailExists(session?.email ? session.email : "**X**");
        if (!emailExists) {
          res.status(403).json({name: "Unauthorised"});
          return resolve;
        }
      }
    }



    return resolve;
  })
}


// if (req.method == "POST") {
//   repo.createTeam({
//     name: req.body.name,
//     points: 0
//   }).then(r => {
//     // @ts-ignore
//     res.status(200).json({...r._doc});
//   }).catch(err => {
//     res.status(400);
//   });
// }
//
// if (req.method == "GET") {
//   repo.getTeams()
//       .then(r => {
//         // @ts-ignore
//         res.status(200).json({...r});
//       })
//       .catch(err => {
//         res.status(400).json({name: err.message})
//         console.log(err);
//       })
// }
//
// if (req.method == "PUT") {
//   // @ts-ignore
//   pointsRepo.addPoints(req.body.teamName, req.body.pointsToAdd, req.body.reason)
//       .then(r => {
//         // @ts-ignore
//         res.status(200).json({points: (r.points + req.body.pointsToAdd)})
//       })
//       .catch(err => {
//         // @ts-ignore
//         res.status(400).json({error: err.message});
//       })
// }

