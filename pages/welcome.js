import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
import Router from "next/router";

export default function Home() {
const [mess_id,setMessId]=useState('');
    const Join=async ()=>{
        await axios.post("http://localhost:5000/mess/join-mess",{
            mess_id
        },{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`}})
            .then((data)=>{
                if(data.data.status==400){
                    toast.error(data.data.msg)
                }else{
                    Router.push({
                        pathname: '/statement',
                        query: { mess_id: data.data.mess_id }
                    });
                }
            })
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h5 className={styles.title}>
                    Welcome to <a href="">MESS APP</a>
                </h5>

                <Link href={'/createmess'}>
                    <Button variant={"primary"}>Create A Mess</Button>
                </Link>

                <span style={{fontZize: "20px",
                    margin: "21px",
                    background: "bisque",
                    border: 8,
                    borderRadius: "9px"}}>
              <input placeholder={'Enter Mess Id'} type="text" name={"mess_name"}
                     onChange={(e) => {
                         setMessId(e.target.value);
                     }} />
               <button type={'button'} onClick={()=>Join()}> Join</button>
                     <ToastContainer
                         position="top-right"
                         autoClose={5000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                     />
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
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}



