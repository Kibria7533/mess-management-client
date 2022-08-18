import Link from "next/link";
import Layout from "../components/Layout";
import styleSignup from "../styles/signup.module.css";
import statementStyle from "../styles/statement.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from 'next/router'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {toast} from "react-toastify";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Statement = () => {
    const router = useRouter();
    const [mess_id,setMessId]=useState('');

    const [loading,setLoading]=useState(false);




    useEffect(() => {

        // localStorage.setItem("mess_id", router.query.mess_id);
        setMessId(localStorage.getItem('mess_id'));
        getMonthlyStatement();
    },[])

        const getMonthlyStatement=async()=>{
            await axios.get(`http://localhost:5000/monthly-statement/get-statement/${localStorage.getItem('mess_id')}`,{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }})
                .then((data)=>{
                    toast.error(data.data)
                    // setMealReportList(data.data);
                })
                .catch((err)=>{
                  toast.error("Something Went Wrong")
                })
        }


    return (
        <Layout>
            {!loading ?
                <div>
                    <h1 className={statementStyle.mess_name}> Mess Id {router.query.mess_id ?? mess_id}</h1>

                    <div className={statementStyle.grid}>

                        <div>
                            <Card className={statementStyle.card_size}>

                                <Card.Header className={statementStyle.card_header}>Today All Meal</Card.Header>
                                <Card.Body>
                                    <Card.Title> Break fast : <span> 5</span></Card.Title>
                                    <Card.Title> Lunch : <span> 10</span></Card.Title>
                                    <Card.Title> Dinner : <span>20</span></Card.Title>
                                </Card.Body>
                            </Card>
                        </div>


                        <div>
                            <Card className={statementStyle.card_size}>

                                <Card.Header className={statementStyle.card_header}>Mess Statement</Card.Header>
                                <Card.Body>
                                    <Card.Title>Total Deposit : <span>500</span></Card.Title>
                                    <Card.Title>Total Cost : <span> 400</span></Card.Title>
                                    <Card.Title> Balance : <span>1000</span></Card.Title>
                                    <Card.Title> Total Meal : <span>20</span></Card.Title>
                                    <Card.Title>Meal Rate : <span>30</span></Card.Title>


                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card className={statementStyle.card_size}>

                                <Card.Header className={statementStyle.card_header}>My Statement</Card.Header>
                                <Card.Body >
                                    <Card.Title>Total Deposit : <span>500</span></Card.Title>
                                    <Card.Title>Total Cost : <span> 400</span></Card.Title>
                                    <Card.Title> Balance : <span>1000</span></Card.Title>
                                    <Card.Title> Total Meal : <span>20</span></Card.Title>
                                    <Card.Title>Meal Rate : <span>30</span></Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <label className="control-label"/>
                        <div className="controls">
                            <Link href={'/manage'}>
                                <Button  variant="outline-primary" className={statementStyle.statement_button}
                                >
                                    Manage
                                </Button>
                            </Link>
                        </div>


                        {/*<div className={'net__meal'}>*/}
                        {/*    <span className={'net__breakfast'}>Breakfast:  2</span>*/}
                        {/*    <span className={'net__lunch'}>Lunch:  6</span>*/}
                        {/*    <span className={'net__dinner'}>Dinner:  20</span>*/}
                        {/*</div>*/}


                        {/*<div>*/}

                        {/*    <article className="statement">*/}
                        {/*        <div className={'statement__header'}>*/}
                        {/*            <h1 className="statement__title"><span*/}
                        {/*                className="statement__title--top">Mess</span><span*/}
                        {/*                className="statement__title--bottom">Statement</span></h1>*/}
                        {/*        </div>*/}

                        {/*        <main className="statement__profiles">*/}
                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Totoal Deposite</span>*/}
                        {/*                <span className="statement__value">35.7<span></span></span>*/}
                        {/*            </article>*/}

                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Cost</span>*/}
                        {/*                <span className="statement__value">9.9<span></span></span>*/}
                        {/*            </article>*/}

                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Balance</span>*/}
                        {/*                <span className="statement__value">9.9<span></span></span>*/}
                        {/*            </article>*/}


                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Total Meal</span>*/}
                        {/*                <span className="statement__value">9.9<span>B</span></span>*/}
                        {/*            </article>*/}

                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Meal Rate</span>*/}
                        {/*                <span className="statement__value">9.9<span></span></span>*/}
                        {/*            </article>*/}
                        {/*        </main>*/}
                        {/*    </article>*/}
                        {/*    <article className="statement">*/}
                        {/*        <div className={'statement__header'}>*/}
                        {/*            <h1 className="statement__title"><span className="statement__title--top">My</span><span*/}
                        {/*                className="statement__title--bottom">statement</span></h1>*/}
                        {/*        </div>*/}

                        {/*        <main className="statement__profiles">*/}
                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Deposite</span>*/}
                        {/*                <span className="statement__value">35.7<span></span></span>*/}
                        {/*            </article>*/}

                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Balance</span>*/}
                        {/*                <span className="statement__value">9.9<span></span></span>*/}
                        {/*            </article>*/}


                        {/*            <article className="statement__profile">*/}
                        {/*                <span className="statement__name">Total Meal</span>*/}
                        {/*                <span className="statement__value">9.9<span></span></span>*/}
                        {/*            </article>*/}
                        {/*        </main>*/}
                        {/*    </article>*/}
                        {/*</div>*/}
                        {/*<br/>*/}
                        {/*<hr/>*/}

                    </div>
                    </div>:<Skeleton/>
            }

        </Layout>
    )
}

export default Statement