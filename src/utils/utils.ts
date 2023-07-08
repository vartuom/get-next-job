import { ILocalDbJobResponse } from "@/interfaces/jobLocalDb.interface";
import { VacancyElement } from "@/interfaces/jobRosTrud.interface";
import dayjs from "dayjs";

export const debounce = (fn: Function, t: number) => {
  let timer: ReturnType<typeof setTimeout>;

  function debounced(...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  }

  debounced.clear = function () {
    clearTimeout(timer);
  };

  return debounced;
}

export const parseJobsEntries = (dbJobs: ILocalDbJobResponse, isBookmarkedOnly: boolean) => {
  const jobs = [] as VacancyElement[]
  console.log(dbJobs)
  dbJobs?.jobs.forEach((dbJobEntry) => {
    if (isBookmarkedOnly) {
      if (dbJobEntry.isBookmarked) jobs.push(JSON.parse(dbJobEntry.jobData))
    } else {
      jobs.push(JSON.parse(dbJobEntry.jobData))      
    }
  })
  return jobs as VacancyElement[]
}

export const parseAndGroupJobsEntries = (dbJobs: ILocalDbJobResponse, isBookmarkedOnly: boolean) => {
  const jobs = dbJobs.jobs.reduce((acc, dbJobEntry) => {
    const date = dayjs(dbJobEntry.createdAt).format('DD.MM.YYYY')
    // @ts-ignore
    if (!acc[date]) {
      // @ts-ignore
      acc[date] = [JSON.parse(dbJobEntry.jobData)]
    } else {
      // @ts-ignore
      acc[date].push(JSON.parse(dbJobEntry.jobData))
    }
    return acc
  }, {})
  console.log(jobs)
  return jobs
}