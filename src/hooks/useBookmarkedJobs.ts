import { getAllJobs } from "@/api/axios/helpers"
import { ILocalDbJobResponse } from "@/interfaces/jobLocalDb.interface"
import useSWR from "swr"

export default function useBookmarkedJobs () {
  const { data, error, isLoading } = useSWR<ILocalDbJobResponse>('api/jobs', getAllJobs)
 
  return {
    bookmarkedJobs: data,
    isLoading,
    isError: error
  }
}