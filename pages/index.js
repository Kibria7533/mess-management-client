import Layout from "../components/Layout";
import styleSignup from '../styles/signup.module.css'
import {useEffect, useState} from "react";
import axios from 'axios';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'

const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone_no, setPhone_no]=useState("");
    const [address, setAddress]=useState("");
    const [password, setPassword] =useState("");

    useEffect(()=>{
        if(localStorage.getItem('access_token')){
            Router.push({
                pathname: '/statement',
                query: {mess_id: localStorage.getItem('mess_id')}
            });
        }
    },[])
    const Save=async(e)=>{
        e.preventDefault();
        if(!name || !email || !phone_no || !address || !password){

            toast.error('Please fill the form')
            return;
        }


        await axios.post("http://localhost:5000/auth/signup",{
            name,
            email,
            phone_no,
            address,
            password
        },{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'}})
            .then((data)=>{
                if(data.data.status == 404)
                    toast.error(data.data.msg)
                else if(data.data.status==201){
                    toast.error(data.data.msg)
                      Router.push('/signin')
                }

            }).catch(err=>{
                toast.error("Something Wrong")
        })
    }

    return(

            <main className="container">
                <div className="row">
                    <form className="form-horizontal" onSubmit={Save}>
                        <fieldset>
                            {/* Form Name */}
                            <legend  className={styleSignup.legend}>Sign Up </legend>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignup.label} >
                                    User Name
                                </label>
                                <div className="controls">
                                    <input
                                        id="name"
                                        name="name"
                                        placeholder="Enter your user name"
                                        className={styleSignup.inputs}
                                        type="text"
                                        onChange={(e)=>{
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="control-group">
                                <label className={styleSignup.label} >
                                    Email
                                </label>
                                <div className="controls">
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className={styleSignup.inputs}
                                        type="email"
                                        onChange={(e)=>{
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div >
                                <label className={styleSignup.label}>
                                    Phone Number
                                </label>
                                <div className="controls">
                                    <input
                                        id="phone_number"
                                        name="phone_number"
                                        placeholder=" Enter your phone number"
                                        className={styleSignup.inputs}
                                        type="tel"
                                        onChange={(e)=>{
                                            setPhone_no(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignup.label} >
                                    Address
                                </label>
                                <div className="controls">
                                    <input
                                        id="address"
                                        name="address"
                                        placeholder=" Enter your address"
                                        className={styleSignup.inputs}
                                        type="text"
                                        onChange={(e)=>{
                                            setAddress(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignup.label} >
                                    Password
                                </label>
                                <div className="controls">
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder="Enter your Password"
                                        className={styleSignup.inputs}
                                        type="text"
                                        onChange={(e)=>{
                                            setPassword(e.target.value)
                                        }}

                                    />
                                </div>
                            </div>

                            {/* Button */}

                            <label className="control-label"/>
                            <div className="controls">
                                    <button type={'submit'} className={styleSignup.button}  >
                                        SignUp
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
                                <ToastContainer />

                            </div>



                        </fieldset>
                    </form>
                    <label className="control-label"/>
                    <div className="controls">
                        <Link href={'/signin'} >
                            <button className={styleSignup.button}>
                                SignIn
                            </button>
                        </Link>

                    </div>
                </div>
            </main>
    )
}

export default Signup;