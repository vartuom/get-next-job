import axios from 'axios';
import { VacancyElement } from '@/interfaces/jobRosTrud.interface';

export const addBookmark = async (job: VacancyElement) => {
	const response = await axios.post(
		'/api/jobs', 
    {
      jobData: job
    }
	);
  return response.data
};

export const removeBookmark = async (job: VacancyElement) => {
	const response = await axios.patch(
		'/api/jobs', 
    {
      jobData: job
    }
	);
  return response.data
};

export const getAllJobs = async (url: string) => {
	const response = await axios.get(url);
  return response.data
};