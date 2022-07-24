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
                    <Link href='/signup'>SignUp</Link>
                </li>
                <li>
                    <Link href='/signin'>SignIn</Link>
                </li>

                <li>
                    <Link href='/logout'>Logout</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav