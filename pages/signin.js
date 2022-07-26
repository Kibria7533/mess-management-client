import Layout from "../components/Layout";
import styleSignup from "../styles/signup.module.css";
import {useState} from "react";
import axios from "axios";

 const  Signin=()=>{
     const [username,setUsername]=useState(" ");
     const [password,setPassword]=useState(" ");
     const Save=async ()=>{
         await axios.post("http://localhost:5000/auth/login",{
             username,
             password
         },{headers: {'Accept': 'application/json',
                 'Content-Type': 'application/json'}})
             .then((data)=>{
                 console.log(data)
             })
     }

     return(
         <Layout>
             <main className="container">
                 <div className="row">
                     <form className="form-horizontal">
                         <fieldset>
                             {/* Form Name */}
                             <legend  className={styleSignup.legend}>Sign In </legend>
                             {/* Text input*/}
                             <div className="control-group">
                                 <label className={styleSignup.label}>
                                    User Name
                                 </label>
                                 <div className="controls">
                                     <input
                                         id=" name"
                                         name=" name"
                                         placeholder="Enter your user name"
                                         className={styleSignup.inputs}
                                         type="text"
                                         onChange={(e)=>{
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
                                         onChange={(e)=>{
                                             setPassword(e.target.value)
                                         }}
                                     />
                                 </div>
                             </div>
                             {/* Button */}
                             <label className="control-label"  />
                             <div className="controls">

                                     <button className={styleSignup.button}
                                     onClick={()=>Save()}
                                     >
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