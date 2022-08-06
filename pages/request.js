import Layout from "../components/Layout";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";
import styleRequestTbale from '../styles/requestTable.module.css'


const Request=()=>{

    const [bazarlist,setBazarlist]=useState("")
    const [deposit,setDsposit]=useState("")
    const [mealList,setMealList]=useState("")


    useEffect( ()=>{
        getRequestData()
    },[])

const getRequestData=async ()=>{
        await axios.get('http://localhost:5000/request/all-request/123456')
            .then((data)=>{
                console.log(data.data.data.bazarList)
                setBazarlist(data.data.data.bazarList)
                setDsposit(data.data.data.deposit)
                setMealList(data.data.data.mealList)

            })
            .catch((err)=>{
                console.log(err);
            })
}
    return(
        <Layout>
            <div className={styleRequestTbale.table_contaier}>
                <div className={`table-responsive ${styleRequestTbale.border}` }>
                    <h2> Bazar List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bazarlist.length>0 && bazarlist.map((req,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{req.cost}</td>
                                    <td></td>
                                    <td></td>

                                    <td scope="col">Pending</td>
                                    <td scope="col">Delete</td>


                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>



                <div className="table-responsive">
                    <h2> Deposit List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {deposit.length>0 && deposit.map((req,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td scope="col">Pending</td>
                                    <td scope="col">Delete</td>


                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>





                <div className="table-responsive">
                    <h2> Meal Entry List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mealList.length>0 && mealList.map((req,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td scope="col">Pending</td>
                                    <td scope="col">Delete</td>


                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>

            </div>

        </Layout>

    )
}
export default  Request;