export interface ILocalDbJobResponse {
  jobs: ILocalDbJob[]
}

export interface ILocalDbJob {
  id: number
  createdAt: string
  updatedAt: string
  jobId: string
  jobData: string
  isBookmarked: boolean
}