import Layout from "../components/Layout";
import Link from "next/link";
import Style from '../pages/mealreport/mealReport.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {toast} from "react-toastify";

const MealReport=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [loading,setLoading]=useState(false);

    // deposit create usestate
    const [date, setDate]=useState(" ");
    const [name, setName]=useState(" ");
    const [amount, setAmount]=useState(" ");
    const [status, setStatus]=useState(" ");

    //get deposit
    const [mealReportList,setMealReportList]=useState([])

    useEffect(()=>{
        getMealReportList();
    },[])
    const getMealReportList=async()=>{
        await axios.get("http://localhost:5000/meal-entry")
            .then((data)=>{
                toast.error(data.data)
                console.log(data.data)
                setMealReportList(data.data);
            })
            .catch((err)=>{
                toast.error("Something Went Wrong")
            })
    }
    // const Save=async ()=>{
    //     await axios.post("http://localhost:5000/member",{
    //         date,
    //         name,
    //         amount,
    //         status
    //     },{headers: {'Accept': 'application/json',
    //             'Content-Type': 'application/json'}})
    //         .then((data)=>{
    //             toast.error(data.data)
    //         })
    // }

    return(
        <Layout>
            <>
                {!loading ?
                    <div className="table-responsive ">
                        <table className="table table-striped">
                            <thead>
                            {/*{mealReportList.length>0 && mealReportList.map()}*/}
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Person 1</th>
                                <th scope="col">Person 2</th>
                            </tr>
                            </thead>
                            <tbody>
                            {mealReportList.length > 0 && mealReportList.map((member, idx) => {
                                return (
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>02-01-2022</td>
                                        <td className={`${Style.alignCntr}`}>0</td>
                                        <td className={`${Style.alignCntr}`}>0</td>

                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div> : <Skeleton/>
                }
            </>
        </Layout>

    )
}
export default  MealReport;