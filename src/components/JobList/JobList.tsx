import useSWR from 'swr'
import { VacancyElement } from '@/interfaces/jobRosTrud.interface'
import { getAllJobs } from '@/api/axios/helpers'
import JobItem from '../JobItem/JobItem'
import s from './JobList.module.scss'
import { ILocalDbJob, ILocalDbJobResponse } from '@/interfaces/jobLocalDb.interface'
import useBookmarkedJobs from '@/hooks/useBookmarkedJobs'

interface IJobListProps {
  jobs: VacancyElement[]
}

const JobList = ({ jobs }: IJobListProps) => {

  const { bookmarkedJobs } = useBookmarkedJobs()
  const checkIsBookmarked = (id: string) => bookmarkedJobs?.jobs.some((bookmark) => bookmark.jobId === id && bookmark.isBookmarked) || false
  
  return (
    <ul className={s.jobList}>
      {
        jobs.map(job => (
          <li key={job.vacancy.id}>
            <JobItem job={job} isBookmarked={checkIsBookmarked(job.vacancy.id)} />
          </li>
        ))
      }
    </ul>
  )
}

export default JobList
