import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "@/api/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { jobId } = req.query
  switch (req.method) {
    case "GET":
      try {
        const job = await prisma.job.findUnique({
          where: {
            jobId: jobId?.toString()
          }
        })
        res.status(200).json({ job })
      } catch (err) {
        res.status(500).json({ error: err })
      }
      break
  }
}