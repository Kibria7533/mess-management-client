import Layout from "../components/Layout";
import styleSignup from '../styles/signup.module.css'

import Link from "next/link";
const Signup=()=>{
    return(
        <Layout>
            <main className="container">
                <div className="row">
                    <form className="form-horizontal">
                        <fieldset>
                            {/* Form Name */}
                            <legend  className={styleSignup.legend}>Sign Up </legend>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignup.label} htmlFor="full_name">
                                    Name
                                </label>
                                <div className="controls">
                                    <input
                                        id=" name"
                                        name=" name"
                                        placeholder="Enter your name"
                                        className={styleSignup.inputs}
                                        type="text"
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
                                    />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignup.label} htmlFor="mother_name">
                                    Address
                                </label>
                                <div className="controls">
                                    <input
                                        id="address"
                                        name="address"
                                        placeholder=" Enter your address"
                                        className={styleSignup.inputs}
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Text input*/}
                            <div className="control-group">
                                <label className={styleSignup.label} htmlFor="mother_name">
                                    Password
                                </label>
                                <div className="controls">
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder="Enter your Password"
                                        className={styleSignup.inputs}
                                        type="text"

                                    />
                                </div>
                            </div>

                            {/* Button */}

                                <label className="control-label" htmlFor="submit" />
                                <div className="controls">
                                    <Link href={'/signin'} >
                                        <button className={styleSignup.button} id="submit" name="submit"  >
                                            SignUp
                                        </button>
                                    </Link>

                                </div>

                        </fieldset>
                    </form>
                </div>
            </main>
        </Layout>
    )
}

export default Signup;