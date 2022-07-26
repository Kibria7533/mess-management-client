import Layout from "../components/Layout";
import styleSignIn from "../pages/signin/signin.module.css";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import 'react-loading-skeleton/dist/skeleton.css'

import Skeleton from "react-loading-skeleton";
import { apiPost } from "../services/http-methods";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const Save = async (e) => {
        e.preventDefault();

        await apiPost('/auth/login',{
            username,
            password
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        // await axios.post("http://localhost:5000/auth/login", {
        //     username,
        //     password
        // }, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
            .then((data) => {
                toast.error(data.data)
                localStorage.setItem("access_token", data.data.access_token);
                Router.push('/welcomes/welcome')
            }).catch(err => {
                toast.error('Wrong Credentials')
            })
    }

    return (

        <main className="container">
            {!loading ?
                <div className="row">

                    <form className="form-horizontal" onSubmit={Save}>
                        <fieldset>
                            {/* Form Name */}
                            <legend className={styleSignIn.legend}>Sign In</legend>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignIn.label}>
                                    User Name
                                </label>
                                <div className="controls">
                                    <input
                                        id="username"
                                        name="username"
                                        placeholder="Enter your user name"
                                        className={styleSignIn.inputs}
                                        type="text"
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignIn.label}>
                                    Password
                                </label>
                                <div className="controls">
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder="Enter your Password"
                                        className={styleSignIn.inputs}
                                        type="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />

                                </div>
                            </div>
                            {/* Button */}
                            <label className="control-label" />
                            <div className="controls">

                                <button className={styleSignIn.button}
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
                                <ToastContainer />


                            </div>
                            <div className="controls">
                                <Link href={'/'}>
                                    <button className={styleSignIn.button}>
                                        SignUp
                                    </button>
                                </Link>

                            </div>

                        </fieldset>
                    </form>
                </div> : <Skeleton />
            }
        </main>

    )
}
export default Signin