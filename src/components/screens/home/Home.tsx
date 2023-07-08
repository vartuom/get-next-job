import React, { useEffect } from 'react'
import useSWR from 'swr'
import { useState } from 'react'
import { TRegionCodes } from '@/interfaces/jobRosTrud.interface'
import JobList from '@/components/JobList/JobList'
import s from './Home.module.css'
import { IJobResponseData } from '@/interfaces/jobRosTrud.interface'
import Meta from '@/components/seo/Meta'
import { FormControl, FormControlLabel, Pagination, Radio, RadioGroup, TextField } from '@mui/material'
import Empty from '@/components/Empty/Empty'
import { MagnifyingGlass } from 'react-loader-spinner'
import { debounce } from '@/utils/utils'

const BASE_URL = 'http://opendata.trudvsem.ru/api/v1/vacancies'

interface IHomeProps {
  title: string
  description: string
}

const Home = ({ title, description }: IHomeProps) => {
  // количество записей на на странице при рендере
  const pageSize = 7;

  const [offset, setOffset] = useState(0)
  const [totalJobsQty, setTotalJobsQty] = useState(0)
  const [searchArea, setSearchArea] = useState<TRegionCodes>('')
  const [searchQuery, setSearchQuery] = useState('')

  const query: string = BASE_URL +
    `${searchArea && `/region/${searchArea}`}?text=${searchQuery}&offset=${Math.ceil(offset / pageSize)}&limit=${pageSize}`
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data, error, isLoading } = useSWR<IJobResponseData>(query, fetcher)

  useEffect(() => {
    // немного ограничим выдачу без поискового запроса
    // можно и не ограничивать, 
    // но на мой взгляд 26000+ страниц пагинации вызывают фрустрацию :)       
    if (data?.meta.total && data.meta.total <= 500) {
      setTotalJobsQty(data.meta.total)
    } else {
      setTotalJobsQty(500)
    }
  }, [data])

  const handleRadioControl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOffset(0)
    setSearchArea(event.target.value as TRegionCodes)
  };

  const handleFilter = (value: string) => {
    // начинаем с первой страницы при изменении поискового запроса
    setOffset(0)
    setSearchQuery(value)
  }

  const debouncedSetQuery = debounce(handleFilter, 800)

  const getPage = () => {
    const page = offset % pageSize === 0
      ? offset / pageSize + 1
      : Math.ceil(offset / pageSize);
    return page
  }

  return (
    <Meta title={title} description={description}>
      <section className={s.wrapper}>
        <TextField
          id="queryFilter"
          label="Поиск..."
          variant="outlined"
          fullWidth
          onChange={evt => debouncedSetQuery(evt.target.value)}
        />
        <div className={s.radioControls}>
          <FormControl>
            <RadioGroup
              name="searchAreaControlGroup"
              value={searchArea}
              onChange={handleRadioControl}
              row
            >
              <FormControlLabel value="3800000000000" control={<Radio />} label="В Иркутске" />
              <FormControlLabel value="" control={<Radio />} label="Везде" />
            </RadioGroup>
          </FormControl>
        </div>
        {isLoading ? <MagnifyingGlass
          visible={true}
          height="256"
          width="256"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor='#c0efff'
          color='#e15b64'
        />
          : error
            ? <Empty>Что-то пошло не так... Повторите попытку позже.</Empty>
            : data?.results.vacancies && data?.results.vacancies.length !== 0
              ? <>
                <Pagination
                  size="large"
                  count={Math.ceil(totalJobsQty / pageSize)}
                  page={getPage()}
                  onChange={(_, page) => {
                    window.scrollTo(0, 0)
                    setOffset((page - 1) * pageSize)
                  }}
                />
                {data?.results?.vacancies && <JobList jobs={data.results.vacancies} />}
                <Pagination
                  size="large"
                  count={Math.ceil(totalJobsQty / pageSize)}
                  page={getPage()}
                  onChange={(_, page) => {
                    window.scrollTo(0, 0)
                    setOffset((page - 1) * pageSize)
                  }}
                />
              </>
              : <Empty>По запросу ничего не найдено...</Empty>
        }
      </section>
    </Meta>
  )
}

export default Home