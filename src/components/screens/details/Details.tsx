import Meta from '@/components/seo/Meta'
import React from 'react'
import {VacancyElement} from "@/interfaces/jobRosTrud.interface";
import JobDetails from "@/components/JobDetails/JobDetails";

interface IDetailProps {
  title: string
  description: string
  job: VacancyElement
}

const Details = ({ title, description, job }: IDetailProps) => {
  return (
    <Meta description={description} title={title}>
      <JobDetails job={job} />
    </Meta>
  )
}

export default Details