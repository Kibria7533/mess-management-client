import Layout from "../components/Layout";
import styleSignup from "../styles/signup.module.css";
 const  Signin=()=>{
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
                                    User Name
                                 </label>
                                 <div className="controls">
                                     <input
                                         id=" name"
                                         name=" name"
                                         placeholder="Enter your user name"
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

                                     <button className={styleSignup.button} id="submit" name="submit"  >
                                         SignIn
                                     </button>


                             </div>

                         </fieldset>
                     </form>
                 </div>
             </main>
         </Layout>
     )
 }
 export  default Signin