import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/api/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      try {
        const job = await prisma.job.upsert({
          where: { jobId: req.body.jobData.vacancy.id },
          update: { isBookmarked: true },
          create: {
            jobId: req.body.jobData.vacancy.id,
            jobData: JSON.stringify(req.body.jobData)
          }
        })
        res.status(200).json({ job })
      } catch (err) {
        res.status(500).json({ error: 'failed to post data' })
      }
      break
    case "GET":
      try {
        const jobs = await prisma.job.findMany()
        res.status(200).json({ jobs })
      } catch (err) {
        res.status(500).json({ error: 'failed to post data' })
      }
      break
    case "PATCH":
      try {
        const job = await prisma.job.update({
          where: { jobId: req.body.jobData.vacancy.id },
          data: { isBookmarked: false },
        })
        res.status(200).json({ job })
      } catch (err) {
        res.status(500).json({ error: 'failed to post data' })
      }
      break
  }
}
