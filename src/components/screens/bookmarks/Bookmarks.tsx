import React, { FC, PropsWithChildren } from 'react'
import useSWR from 'swr'
import { VacancyElement } from '@/interfaces/jobRosTrud.interface'
import JobList from '@/components/JobList/JobList'
import styles from './Bookmarks.module.css'
import { getAllJobs } from '@/api/axios/helpers'
import Meta from '@/components/seo/Meta'
import { ILocalDbJobResponse } from '@/interfaces/jobLocalDb.interface'
import useBookmarkedJobs from '@/hooks/useBookmarkedJobs'

const BASE_URL = 'http://opendata.trudvsem.ru/api/v1/vacancies'

interface IBookmarksProps {
  title: string
  description: string
}

const Bookmarks = ({ title, description }: IBookmarksProps) => {

  const { bookmarkedJobs } = useBookmarkedJobs()
  const jobs = [] as VacancyElement[]
  bookmarkedJobs?.jobs?.forEach((dbJobEntry) => {
    if (dbJobEntry.isBookmarked) jobs.push(JSON.parse(dbJobEntry.jobData))
  })

  return (
    <Meta title={title} description={description}>
      <main className={styles.main}>
        <JobList jobs={jobs} />
      </main>
    </Meta>
  )
}

export default Bookmarks