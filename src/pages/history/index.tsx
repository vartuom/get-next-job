import { prisma } from '@/api/prisma'
import History from '@/components/screens/history/History'
import { parseAndGroupJobsEntries, parseJobsEntries } from '@/utils/utils'
import { InferGetServerSidePropsType } from 'next'
import React from 'react'

const HistoryPage = ({ parsedJobs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <History jobs={parsedJobs} title='История' description='Поиск работы с использованием API «Работа России»' />
}

export const getServerSideProps = async () => {
  const jobs = await prisma.job.findMany()
  //console.log(dbJobs)
  // @ts-ignore
  const parsedJobs = await parseAndGroupJobsEntries({ jobs }, false)
  return { props: { parsedJobs } }
}


export default HistoryPage