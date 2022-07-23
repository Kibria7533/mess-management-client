import Head from 'next/head'
import Image from 'next/image'
import CreateMessstyles from '../styles/CreateMess.module.css'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Layout from "../components/Layout";

export default function createmess() {
    return (
        <Layout>
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <input className={CreateMessstyles.creat_mess} placeholder={`Enter Name`}/>
                <input className={CreateMessstyles.creat_mess} placeholder={`Enter Email`}/>
                <input className={CreateMessstyles.creat_mess} placeholder={`Enter Phone`}/>
                <input className={CreateMessstyles.creat_mess} placeholder={`Enter Password`}/>
                <input className={CreateMessstyles.creat_mess} placeholder={`Confirm Password`}/>
                <span> <button style={{marginRight:"5px"}}><a href={`/`}>Back</a></button>

                <Link href='/statement'>Create</Link>
                     </span>


            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
        </Layout>
    )
}
