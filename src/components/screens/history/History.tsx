import Meta from '@/components/seo/Meta'
import { VacancyElement } from '@/interfaces/jobRosTrud.interface'
import Link from 'next/link'
import React from 'react'

interface IEntries {
  title: string
  description: string
  jobs: {
    [key: string]: VacancyElement[]
  }
}

const History = ({ jobs, title, description }: IEntries) => {
  return (
    <Meta title={title} description={description}>
      {/* <ul>
        {jobs.map((job) =>
          <li key={job.vacancy.id}>
            <Link href={`/history/${job.vacancy.id}`}>{`${job.vacancy['job-name']}`}</Link>
          </li>
        )}
      </ul> */}
      <ul>
        {Object.keys(jobs).map((key) => <li>
          <p>{`${key}`}</p>
          <ul>
            {jobs[key].map((job) => <li key={job.vacancy.id}>
              <Link href={`/history/${job.vacancy.id}`}>{`${job.vacancy['job-name']}`}</Link>
            </li>)}
          </ul>
        </li>
        )}
      </ul>
    </Meta>
  )
}

export default History