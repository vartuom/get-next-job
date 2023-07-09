import React, { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header'
import { Inter } from 'next/font/google'
import s from "./Layout.module.scss"


const inter = Inter({ subsets: ['latin'] })

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={inter.className}>
      <Header />
      <main className={s.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout