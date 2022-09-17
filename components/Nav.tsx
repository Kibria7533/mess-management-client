import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Router from 'next/router'
import {FaFortAwesomeAlt} from "react-icons/fa";
import mealLogo from '../image/meal.logo.png'
import Image from 'next/image'
import {getSSOLoginUrl} from "../keycloak/keycloak";
const Nav = () => {

    const logout=()=>{

            localStorage.removeItem('access_token');
            localStorage.removeItem('mess_id');

        Router.push({
            pathname: '/signin/signin',
        });

    }
    return (
        <nav className={navStyles.nav}>

           <div className={navStyles.nav_logo}>
           <Link href='/'>
               <Image
                   alt="Mess Meal Logo"
                   src={mealLogo}
                   layout="fill"
                   objectFit="contain"
               />

           </Link>

        </div>

            <ul>
                <li>
                    <Link href='/statements/statement'>Home</Link>
                </li>
                <li>
                    <Link href='/profile/profile'><button className={navStyles.nav_button}>Profile  <FaFortAwesomeAlt/></button></Link>
                </li>

                <li>
                    <button className={navStyles.nav_button}  onClick={()=>logout()}>Logout</button>
                </li>

            </ul>
        </nav>
    )
}

export default Nav