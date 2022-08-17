import Layout from "../components/Layout";
import Card from "react-bootstrap/Card";
import deposit from "./deposit";
import stylemanagement from '../styles/management.module.css'
import Link from "next/link";
import { FaBeer } from 'react-icons/fa';
import {AiOutlineArrowRight, AiOutlineDownload} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import {MdDinnerDining, MdFreeBreakfast, MdLunchDining, MdRestaurant} from "react-icons/md";
import {BsMoonStarsFill} from "react-icons/bs";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useState} from "react";

const Management=()=>{

    const [loading,setLoading]=useState(false);


    return(
        <Layout>
            {!loading ?
                <div className={`row ${stylemanagement.card}`}>

                    <div className={`col-md-4`}>
                        <Card style={{width: '40rem', height: '28rem'}}>

                            <Card.Body>
                                <Card.Header className={stylemanagement.title}>Meal Of Time</Card.Header>
                                <div className={stylemanagement.meal}>
                                    <div className={stylemanagement.name}>
                                        <span><MdFreeBreakfast/></span>
                                        <h3>Breakfast</h3>
                                    </div>
                                    <span> Time </span>
                                </div>

                                <div className={stylemanagement.meal}>
                                    <div className={stylemanagement.name}>
                                        <span><MdLunchDining/></span>
                                        <h3>Lunch</h3>
                                    </div>
                                    <span> Time </span>

                                </div>

                                <div className={stylemanagement.meal}>
                                    <div className={stylemanagement.name}>
                                        <span><MdDinnerDining/></span>
                                        <h3>Dinner</h3>
                                    </div>
                                    <span> Time </span>

                                </div>

                                <div className={stylemanagement.meal}>
                                    <div className={stylemanagement.name}>
                                        <span><BsMoonStarsFill/></span>
                                        <h3>Day End</h3>
                                    </div>
                                    <span> Time </span>

                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div> : <Skeleton/>
            }


            {!loading ?
                <div className={`row ${stylemanagement.card}`}>

                    <div className={`col-md-4`}>
                        <Card style={{width: '40rem'}}>

                            <Card.Body>
                                <Link href={'/deposit'}>
                                    <div className={stylemanagement.cards}>

                                        <div className={stylemanagement.card1}>
                                            <AiOutlineDownload/>
                                            <Card.Title>Add Deposit</Card.Title>
                                        </div>
                                        <AiOutlineArrowRight/>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div> : <Skeleton/>
            }

            {!loading ?
                <div className={`row ${stylemanagement.card}`}>

                    <div className={`col-md-4`}>
                        <Card style={{width: '40rem'}}>

                            <Card.Body>
                                <div className={stylemanagement.cards}>

                                    <div className={stylemanagement.card1}>
                                        <AiOutlineDownload/>
                                        <Card.Title>Edit Deposit</Card.Title>
                                    </div>
                                    <AiOutlineArrowRight/>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div> : <Skeleton/>
            }

            {!loading ?
                <div className={`row ${stylemanagement.card}`}>

                    <div className={`col-md-4`}>
                        <Card style={{width: '40rem'}}>

                            <Card.Body>

                                <div className={stylemanagement.cards}>

                                    <div className={stylemanagement.card1}>
                                        <MdRestaurant/>
                                        <Card.Title>Add Previous Meal</Card.Title>
                                    </div>
                                    <AiOutlineArrowRight/>
                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                </div> : <Skeleton/>
            }


            {!loading ?
                <div className={`row ${stylemanagement.card}`}>

                    <div className={`col-md-4`}>
                        <Card style={{width: '40rem'}}>

                            <Card.Body>
                                <div className={stylemanagement.cards}>

                                    <div className={stylemanagement.card1}>
                                        <MdRestaurant/>
                                        <Card.Title>Edit Meal</Card.Title>
                                    </div>
                                    <AiOutlineArrowRight/>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div> : <Skeleton/>
            }

        </Layout>

    )
}
export default  Management;