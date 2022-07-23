import Layout from "../components/Layout";
import Styles from '../styles/manage.module.css';
import Link from "next/link";
const Manage=()=>{

    return(
        <Layout>

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
                    </div>

                    {/* cards */}
                <div className={`mt-10`}>
                    <div className="row">
                        <div className={`col-md-4`}>
                            <div className={`card ${Styles.cardBg}`}>
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>


                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>

                        <div className="col-md-4">
                            <Link href={''}>
                                <div className="card">
                                    <div className="card-body">

                                    </div>
                                </div>
                            </Link>

                        </div>
                </div>
                </div>

        </Layout>

    )
}
export default  Manage;