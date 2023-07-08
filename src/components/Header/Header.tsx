import React from 'react'
import s from './Header.module.scss'
import Image from 'next/image'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header className={s.header}>
            <div className={s.leadWrapper}>
                <div className={s.lead}>
                    <h1 className={s.leadTitle}>
                        Поиск работы
                    </h1>
                    <p className={s.leadParagraph}>
                        С использованием API «Работа России»
                    </p>
                    <Navigation />
                </div>
                <Image
                    className={s.logo}
                    src='/images/Emblem_of_Rostrud.svg'
                    alt="Логотип Роструда. Двуглавый орел с шестерней и молотами."
                    width={160}
                    height={175}
                />
            </div>            
        </header>
  )
}

export default Header