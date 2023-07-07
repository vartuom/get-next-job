import React from 'react'
import useSWR from 'swr'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { TRegionCodes } from '@/interfaces/jobRosTrud.interface'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout/Layout'
import JobList from '@/components/JobList/JobList'
import styles from './Home.module.css'
import { IJobResponseData } from '@/interfaces/jobRosTrud.interface'
import { getAllJobs } from '@/api/axios/helpers'

const BASE_URL = 'http://opendata.trudvsem.ru/api/v1/vacancies'

const Home = () => {

  // количество записей на на странице при рендере
  const pageSize = 7;

  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const query = BASE_URL + `?&limit=${pageSize}`

  const { data, error, isLoading } = useSWR<IJobResponseData>(query, fetcher)
  //console.log(data)


  return (
    <Layout title='Поиск работы' description='Поиск работы с использованием API «Работа России»'>
      <main className={styles.main}>
        {data?.results.vacancies && <JobList jobs={data.results.vacancies} />}
      </main>
    </Layout>
  )
}

export default Home