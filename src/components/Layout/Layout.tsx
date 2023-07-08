import React, { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header'
import { Inter } from 'next/font/google'
import { IMeta } from '../seo/meta.interface'
import Meta from '../seo/Meta'


const inter = Inter({ subsets: ['latin'] })

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={inter.className}>
      <Header />
      {children}
    </div>
  )
}

export default Layout