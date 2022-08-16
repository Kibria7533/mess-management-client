import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Router from 'next/router'
import {FaFortAwesomeAlt} from "react-icons/fa";

const Nav = () => {

    const logout=()=>{

            localStorage.removeItem('access_token');
            localStorage.removeItem('mess_id');

        Router.push({
            pathname: '/signin',
        });

    }
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/statement'>Home</Link>
                </li>
                <li>
                    <Link href='/profile'><button>Profile  <FaFortAwesomeAlt/></button></Link>
                </li>

                <li>
                    <button  onClick={()=>logout()}>Logout</button>
                </li>

            </ul>
        </nav>
    )
}

export default Nav