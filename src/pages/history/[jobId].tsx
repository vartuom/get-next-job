import Details from "@/components/screens/details/Details";
import {GetStaticPaths, GetStaticProps} from "next";
import {prisma} from "@/api/prisma";
import {VacancyElement} from "@/interfaces/jobRosTrud.interface";

export const getStaticPaths: GetStaticPaths = async () => {
  const dbResponseData = await prisma.job.findMany()
  const jobIDs = dbResponseData.map((entity) => {
    return { params: { jobId: entity.jobId } }
  })
  return {
    paths: jobIDs,
    fallback: "blocking",
  }
}

export const getStaticProps:GetStaticProps = async (context) => {
  const jobDbData = await prisma.job.findUnique({
    where: {
      jobId: context.params?.jobId?.toString()
    }
  })
  const job = JSON.parse(jobDbData!.jobData) as VacancyElement
  return {
    props: job
  }
}

const DetailsPage = (job: VacancyElement) => {
  return <Details
    title={"Вакансия"}
    description={"Поиск работы с использованием API «Работа России»"}
    job={job}
  />
}

export default DetailsPage