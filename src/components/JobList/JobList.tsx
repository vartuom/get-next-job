import useSWR from 'swr'
import { VacancyElement } from '@/interfaces/jobRosTrud.interface'
import { getAllJobs } from '@/api/axios/helpers'
import JobItem from '../JobItem/JobItem'
import s from './JobList.module.scss'
import { ILocalDbJob, ILocalDbJobResponce } from '@/interfaces/jobLocalDb.interface'

interface IJobListProps {
  jobs: VacancyElement[]
}

const JobList = ({ jobs }: IJobListProps) => {
  const { data, error, isLoading } = useSWR<ILocalDbJobResponce>('api/jobs', getAllJobs)
  console.log(data)
  const checkIsBookmarked = (id: string) => data?.jobs.some((bookmark) => bookmark.jobId === id && bookmark.isBookmarked) || false
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
