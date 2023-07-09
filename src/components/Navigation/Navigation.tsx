import Link from 'next/link'
import s from './Navigation.module.scss'
import {useRouter} from "next/router";
import clsx from "clsx";

const Navigation = () => {
    const router = useRouter();
    return (
        <nav className={s.header}>
            <ul className={s.navList}>
                <li>
                    <Link
                        href={"/"}
                        className={clsx({[s.link]: true, [s.link_active]: router.pathname == "/"})}
                    >
                        Поиск
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/bookmarks"}
                        className={clsx({[s.link]: true, [s.link_active]: router.pathname == "/bookmarks"})}
                    >
                        Закладки
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/history"}
                        className={clsx({[s.link]: true, [s.link_active]: router.pathname.includes("/history")})}
                    >
                        История
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation