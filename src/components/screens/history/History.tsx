import Meta from '@/components/seo/Meta'
import { VacancyElement } from '@/interfaces/jobRosTrud.interface'
import Link from 'next/link'
import React from 'react'
import s from "./History.module.scss"

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
      <section>
        <ul className={s.historyFeed}>
          {Object.keys(jobs).map((key) => <li key={key}>
            <h2 className={s.dateTitle}>{`${key}`}</h2>
            <ul className={s.vacancyEntries}>
              {jobs[key].map((job) => <li key={job.vacancy.id}>
                <Link className={s.link} href={`/history/${job.vacancy.id}`}>{`${job.vacancy['job-name']}`}</Link>
              </li>)}
            </ul>
          </li>
          )}
        </ul>
      </section>
    </Meta>
  )
}

export default History