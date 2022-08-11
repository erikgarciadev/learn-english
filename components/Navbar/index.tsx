import { NextPage } from 'next'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar: NextPage = () => {

    return (
        <header className={styles.header} >
            <nav
                className="container"
            >
                <Link href="/">
                   <p >Learning English</p>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar