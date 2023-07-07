import axios from 'axios';
import { VacancyElement } from '@/interfaces/jobRosTrud.interface';

export const addBookmark = async (job: VacancyElement) => {
  //console.log(job)
	const response = await axios.post(
		'/api/jobs', 
    {
      jobData: job
    }
	);
  return response.data
};

export const removeBookmark = async (job: VacancyElement) => {
  //console.log(job)
	const response = await axios.patch(
		'/api/jobs', 
    {
      jobData: job
    }
	);
  return response.data
};

export const getAllJobs = async (url: string) => {
  //console.log(job)
	const response = await axios.get(url);
  return response.data
};