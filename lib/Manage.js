import Layout from "../components/Layout";
import Styles from '../styles/manage.module.css';
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useState} from "react";


const Manage=()=>{


    const [loading,setLoading]=useState(false);


    return(
        <Layout>
            {!loading ?
                <div className={Styles.dailymeal}>
                    <div className="row">

                        <div className={`${Styles.dailyMealCalc} col-md-4`}>
                            Breakfast<p className='noOfMeal'>0</p>
                        </div>
                        <div className={`${Styles.dailyMealCalc} col-md-4`}>Lunch<p className='noOfMeal'>0</p>
                        </div>
                        <div className={`${Styles.dailyMealCalc} col-md-4`}>Dinner<p className='noOfMeal'>0</p>
                        </div>
                    </div>
                </div> : <Skeleton/>
            }

                    {/* cards */}
            {!loading ?
                <div className={`mt-10`}>
                    <div className="row">
                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/cost'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        cost
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/deposit'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        deposit
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/management'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        management
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/request'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        request
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/member-list'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        member-list
                                    </div>
                                </div>
                            </Link>

                        </div>


                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/meal-report'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        meal-report
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/meal-entry'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        meal-entry
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={`col-md-4 mb-10`}>
                            <Link href={'/monthly-statement'}>
                                <div className={`card ${Styles.cardBg}`}>
                                    <div className="card-body">
                                        Monthly Statement
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div> : <Skeleton/>
            }

        </Layout>

    )
}
export default  Manage;