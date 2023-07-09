import {VacancyElement} from "@/interfaces/jobRosTrud.interface";
import parse from "html-react-parser"
import s from './JobDetails.module.scss'

interface IJobDetailsProps {
  job: VacancyElement
}

const JobDetails = ({job}: IJobDetailsProps) => {
  return (
    <div className={s.jobListItem}>
      <div className={s.jobRegion}>
        <p>{job.vacancy.region.name} </p>
        <p>{job.vacancy.company.name}</p>
      </div>
      <a href={job.vacancy.vac_url} target="_blank" className={s.link}>
        <h1 className={s.jobTitle}>
          {job.vacancy['job-name']}
        </h1>
      </a>
      <p className={s.jobSalary}>
        {
          !!job.vacancy.salary_min
            ? `от ${job.vacancy.salary_min} \u20BD `
            : ''
        }
        {
          !!job.vacancy.salary_max
            ? `до ${job.vacancy.salary_max} \u20BD`
            : ''
        }
      </p>
      <p className={s.jobSalary}>
        {
          job.vacancy.requirement.experience === 0
            ? `Без опыта`
            : ''
        }
        {
          job.vacancy.requirement.experience === 1
            ? `Опыт от 1 года`
            : ''
        }
        {
          job.vacancy.requirement.experience > 1
            ? `Опыт от ${job.vacancy.requirement.experience} лет`
            : ''
        }
        {
          job.vacancy.requirement.education === 'Не указано'
            ? ""
            : `, ${job.vacancy.requirement.education} образование`
        }
      </p>
      <h2 className={s.jobSubtitle}>Обязанности</h2>
      <div className={s.jobDuty}>
        {parse(job.vacancy.duty
          ? job.vacancy.duty.replaceAll('<li>', '<p>').replaceAll('</li>', '</p>')
          : '')}
      </div>
      <h2 className={s.jobSubtitle}>Контакты</h2>
      <div className={s.jobDuty}>
        <p>
          {job.vacancy.contact_person}
        </p>
        <ul className={s.jobContacts}>
          {
            job.vacancy.contact_list.map((contact, index) => (
              <li key={index}>{`${contact.contact_type}: ${contact.contact_value}`}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default JobDetails
