import Layout from "../components/Layout";
import styleSignup from "../styles/signup.module.css";
import {useState} from "react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import 'react-loading-skeleton/dist/skeleton.css'

import Skeleton from "react-loading-skeleton";

 const  Signin=()=>{
     const [username,setUsername]=useState("");
     const [password,setPassword]=useState("");
     const [loading,setLoading]=useState(false);

     const Save=async (e)=>{
         e.preventDefault();
         if(!username || !password){
             toast.error('Please fill the form')
             return;
         }
         await axios.post("http://localhost:5000/auth/login",{
             username,
             password
         },{headers: {'Accept': 'application/json',
                 'Content-Type': 'application/json'}})
             .then((data)=>{
                 if(data.data.status==404){
                     toast.error(data.data.msg);
                 }else{
                     toast.success(data.data.msg);
                     localStorage.setItem("access_token",data.data.access_token);
                     Router.push('/welcome')
                 }
             }).catch(err=>{
                 toast.error(err.response.data.msg)
             })
     }

     return(

             <main className="container">
                 {! loading ?
                     <div className="row">

                         <form className="form-horizontal" onSubmit={Save}>
                             <fieldset>
                                 {/* Form Name */}
                                 <legend className={styleSignup.legend}>Sign In</legend>
                                 {/* Text input*/}
                                 <div className="control-group">
                                     <label className={styleSignup.label}>
                                         User Name
                                     </label>
                                     <div className="controls">
                                         <input
                                             id="username"
                                             name="username"
                                             placeholder="Enter your user name"
                                             className={styleSignup.inputs}
                                             type="text"
                                             onChange={(e) => {
                                                 setUsername(e.target.value)
                                             }}
                                         />
                                     </div>
                                 </div>
                                 {/* Text input*/}
                                 <div className="control-group">
                                     <label className={styleSignup.label}>
                                         Password
                                     </label>
                                     <div className="controls">
                                         <input
                                             id="password"
                                             name="password"
                                             placeholder="Enter your Password"
                                             className={styleSignup.inputs}
                                             type="text"
                                             onChange={(e) => {
                                                 setPassword(e.target.value)
                                             }}
                                         />

                                     </div>
                                 </div>
                                 {/* Button */}
                                 <label className="control-label"/>
                                 <div className="controls">

                                     <button className={styleSignup.button}
                                             type={"submit"}
                                     >
                                         SignIn
                                     </button>
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
                                     {/* Same as */}
                                     <ToastContainer/>


                                 </div>
                                 <div className="controls">
                                     <Link href={'/'}>
                                         <button className={styleSignup.button}>
                                             SignUp
                                         </button>
                                     </Link>

                                 </div>

                             </fieldset>
                         </form>
                     </div>:<Skeleton/>
                 }
             </main>

     )
 }
 export  default Signin