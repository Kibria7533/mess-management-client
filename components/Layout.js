import styles from '../styles/Layout.module.css'
import Nav from "./Nav";
import {useRouter} from "next/router";
import {useEffect} from "react";
const Layout=({children,token})=>{
    console.log(token,'loool');
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem('access_token')) {
            router.push('/');
        }
    }, []);
    return(
        <div>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout