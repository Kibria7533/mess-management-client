import styles from '../styles/Layout.module.css'
import Nav from "./Nav";
const Layout=({children})=>{
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