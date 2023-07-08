import Link from 'next/link'
import s from './Navigation.module.scss'

const Navigation = () => {
    return (
        <nav className={s.header}>
            <ul className={s.navList}>
                <li>
                    <Link
                        href={"/"}
                        className={s.link}
                        /* className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        } */
                    >
                        Поиск
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/bookmarks"}   
                        className={s.link}                    
                        /* className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        } */
                    >
                        Закладки
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/history"}   
                        className={s.link}                    
                        /* className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        } */
                    >
                        История
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation