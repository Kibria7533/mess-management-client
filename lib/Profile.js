import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import {toast} from "react-toastify";
import Layout from "../components/Layout";
import {FaUserAlt} from "react-icons/fa";
import {RiDeleteBin6Line} from "react-icons/ri";
import {AiFillStar, AiOutlineRight} from "react-icons/ai";
import profileStyle from '../pages/profile/profile.module.css';

import {BsMoonStarsFill} from "react-icons/bs";



const Profile=()=>{

    const [profileUser,setProfileUser]=useState({});
    const [loading,setLoading]=useState(false);


    useEffect(()=>{
        getMemberList();
    },[])
    const getMemberList=async()=>{
        await axios.get("http://localhost:5000/member/profile",{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }})
            .then((data)=>{
                setProfileUser(data.data);
            })
            .catch((err)=>{
                toast.error("Something Went Wrong")
            })
    }



    return(
        <Layout>
            {!loading ?
                <div className="container bootstrap snippet" >
                    <div className="row">
                        <div className="col-sm-10">
                            <h1>My Account</h1>
                        </div>
                        <div className="col-sm-2">
                            <a href="/users" className="pull-right">
                                <img
                                    title="profile image"
                                    className="img-circle img-responsive"
                                    src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${profileStyle.grid} row`} >
                        <div >
                            {/*left col*/}
                            <div className="text-center">
                                <img
                                    src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                    className="avatar img-circle img-thumbnail"
                                    alt="avatar"
                                />
                                <h6>Upload a different photo...</h6>
                                <input type="file" className="text-center center-block file-upload"/>
                            </div>
                            <br/>
                            <div>
                                <div className={profileStyle.profile_main}>
                                    <div className={profileStyle.profile_child}>
                                        <span className={profileStyle.icon}><FaUserAlt/></span>
                                        <h4>Account</h4>
                                    </div>
                                    <span> <AiOutlineRight/> </span>

                                </div>
                                <div className={profileStyle.profile_main}>
                                    <div className={profileStyle.profile_child}>
                                        <span className={profileStyle.icon}><AiFillStar/></span>
                                        <h4>Change Password</h4>
                                    </div>
                                    <span> <AiOutlineRight/> </span>

                                </div>
                                <div className={profileStyle.profile_main}>
                                    <div className={profileStyle.profile_child}>
                                        <span className={profileStyle.icon}><RiDeleteBin6Line/></span>
                                        <h4>Delete Account</h4>
                                    </div>
                                    <span> <AiOutlineRight/> </span>

                                </div>
                            </div>
                        </div>



                        <div className="col-sm-9">
                            {/*<ul className="nav nav-tabs">*/}


                            <div className="tab-content">
                                <div className="tab-pane active" id="home">
                                       <h2 className={profileStyle.heading}><FaUserAlt/> Account</h2>
                                    <form
                                        className="form"
                                        action="##"
                                        method="post"
                                        id="registrationForm"
                                    >



                                                <div>
                                                    <h3>Name  : {profileUser.name}</h3>
                                                    <hr/>
                                                    <h3>Email: {profileUser.email}</h3>
                                                    <hr/>
                                                    <h3>Phone no : {profileUser.phone_no}</h3>
                                                    <hr/>
                                                    <h3> Address : {profileUser.address}</h3>

                                                </div>



                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>

                </div> : <Skeleton/>
            }

        </Layout>

    )
}

export default Profile;