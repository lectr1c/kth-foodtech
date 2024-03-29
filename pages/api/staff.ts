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
          staffRepo.addStaff({
              name: req.body.name,
              email: req.body.email,
              pictureURL: req.body.pictureURL,
              //role: req.body.role,
              //linkedIn: req.body.linkedIn
          }).then(r => {
              // @ts-ignore
              res.status(200).json({...r._doc});
          }).catch(err => {
              res.status(400);
          });
      }

      if (req.method == "GET") {
          if (req.body.id){
              staffRepo.getStaffByID(req.body.id)
                  .then(value => {
                      // @ts-ignore
                      res.status(200).json(value);
                  })
                  .catch(err => {
                      res.status(400).json(err);
                  })
          } else {
              staffRepo.getStaff()
                  .then(value => {
                      // @ts-ignore
                      res.status(200).json(value);
                  })
                  .catch(err => {
                      res.status(400).json(err);
                  })
          }
      }

      if (req.method == "DELETE") {
        if (req.body.id) {
            staffRepo.deleteStaff(req.body.id)
            .then(value => {
                // @ts-ignore
                res.status(200).json(value);
            })
            .catch(err => {
                res.status(400).json(err);
            });
        } else {
            res.status(404);
        }
      }
    return resolve;
  })
}