import Layout from "../components/Layout";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";
import styleRequestTbale from '../styles/requestTable.module.css'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {error} from "next/dist/build/output/log";



const Request=()=>{

    const [bazarlist,setBazarlist]=useState("")
    const [deposit,setDsposit]=useState("")
    const [mealList,setMealList]=useState("")




    //Bazar list UseState
    const [date,setDate]=useState(" ")
    const [cost, setCost]=useState(" ");
    const [item_name, setItem_name]=useState(" ");




    useEffect( ()=>{
        getRequestData()
    },[])


//Get BazarList Deposit and MealList Table
const getRequestData=async ()=>{
        await axios.get(`http://localhost:5000/request/all-request/${localStorage.getItem("mess_id")}`)
            .then((data)=>{

                setBazarlist(data.data.data.bazarList)
                setDsposit(data.data.data.deposit)
                setMealList(data.data.data.mealList)
            })
            .catch((err)=>{
                toast.error("Something Went worng")
            })
}


    //Update bazar-list..........

    const updateBazaList=async (id)=>{
        await axios.patch(`http://localhost:5000/bazar-list/${id}`, {
            date,
            cost,
            item_name
        })
            .then(res=>{
                console.log(res.data)
                setShow(false);
            })
            .catch(err=>{
                console.log(err)
            })
    }


    // delete bazar-list..........
    const deleteBazaList=async (id)=>{
      await axios.delete(`http://localhost:5000/bazar-list/${id}`)
          .then((data)=>{
              if(data.data.deletedCount==1){
                  let filterBazarList=bazarlist.filter(el=>el._id!=id)
                  setBazarlist(filterBazarList);
              }else{
                toast.error("Something Went worng")
              }
          })
          .catch((err)=>{
              toast.error("Something Went worng")
          })
    }


    //u List
    const acceptMethod=async (id,requestType,data)=>{
        await axios.post(`http://localhost:5000/request/accept`,{
            id:id,
            type:requestType,
            data:{
        ...data,
                status:1
            }
        },{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }})
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    //Delete Deposit List
    const deleteDepositList=async (id)=>{
        await axios.delete(`http://localhost:5000/deposit/${id}`)
            .then((data)=>{
                if(data.data.deletedCount==1){
                    let filterDepositList=deposit.filter(el=>el._id!=id)
                    setDsposit(filterDepositList);
                }else {
                    toast.error("Something Went Worng")
                }
            })
            .catch((err)=>{
                toast.error("Something Went Worng")
            })
    }


    //DeleteMealEntry
    const deleteMealEntry = async (id) => {
      await axios.delete(`http://localhost:5000/meal-entry/${id}`)
          .then((data)=>{
              console.log(data)
              if(data.data.deletedCount==1){
                  let filterMeal = mealList.filter(el=>el._id!=id)
                setMealList(filterMeal);
              }else{
                  toast.error("Something Went Worng");
              }
          })
          .catch((error)=>{
              toast.error("Something Went Worng");
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

                                    <td scope="col">
                                        <button className='btn btn-primary'>Pending</button>
                                        <button className='btn btn-warning'>Accept</button>
                                    </td>
                                    <td scope="col"> <button className='btn btn-danger' onClick={()=>{deleteBazaList(req._id)}}>Delete</button></td>
                                </tr>
                            )

                        })}
                        </tbody>


                    </table>
                </div>







                {/*Deposit List*/}
                <div className="table-responsive">
                    <h2> Deposit List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {deposit.length>0 && deposit.map((req,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{req.name}</td>
                                    <td>{req.amount}</td>
                                    <td scope="col">
                                        <button className='btn btn-primary'>{req.status? "Accepted":"Pending"}</button>
                                        <button className='btn btn-warning'  onClick={()=>acceptMethod(req._id,"Deposit",req)}>Accept</button>
                                    </td>
                                    <td scope="col"> <button className='btn btn-danger' onClick={()=>{deleteDepositList(req._id)}}>Delete</button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>






                {/*Meal Entry List*/}
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
                                    <td scope="col">
                                        <button className='btn btn-primary'>Pending</button>
                                        <button className='btn btn-warning'>Edit</button>
                                    </td>
                                    <td scope="col"> <button className='btn btn-danger' onClick={()=>{deleteMealEntry(req._id)}}>Delete</button></td>

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