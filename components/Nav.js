
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/statement'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav