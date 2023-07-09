import JobList from '@/components/JobList/JobList'
import Meta from '@/components/seo/Meta'
import useBookmarkedJobs from '@/hooks/useBookmarkedJobs'
import { parseJobsEntries } from '@/utils/utils'
import { ThreeDots } from 'react-loader-spinner'
import Empty from '@/components/Empty/Empty'

interface IBookmarksProps {
  title: string
  description: string
}

const Bookmarks = ({ title, description }: IBookmarksProps) => {

  const { bookmarkedJobs, isLoading, isError } = useBookmarkedJobs()
  const parsedJobs = parseJobsEntries(bookmarkedJobs!, true)

  return (
    <Meta title={title} description={description}>
      <section>
        {isLoading && <ThreeDots
          height="120"
          width="120"
          radius="9"
          color="#010b23"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />}
        {!isLoading && <JobList jobs={parsedJobs} />}
        {!isLoading && parsedJobs.length === 0 && <Empty>Вы еще не добавили закладки</Empty>}
      </section>
    </Meta>
  )
}

export default Bookmarks