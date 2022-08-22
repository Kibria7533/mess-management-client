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
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Request=()=>{

    const [bazarlist,setBazarlist]=useState("")
    const [deposit,setDsposit]=useState("")
    const [mealList,setMealList]=useState("");
    const [loading,setLoading]=useState(false);


    //Bazar list UseState
    const [date,setDate]=useState(" ")
    const [cost, setCost]=useState(" ");
    const [item_name, setItem_name]=useState(" ");

    useEffect( ()=>{
        getRequestData()
    },[])


//Get BazarList Deposit and MealList Table
const getRequestData=async ()=>{
        setLoading(true);
        await axios.get(`http://localhost:5000/request/all-request/${localStorage.getItem("mess_id")}`)
            .then((data)=>{
                if(data.data.status==404){
                    toast.error(data.data.msg);
                }else{
                    toast.success(data.data.msg);
                    setBazarlist(data.data.data.bazarList)
                    setDsposit(data.data.data.deposit)
                    setMealList(data.data.data.mealList)
                    setLoading(false);
                }
            })
            .catch((err)=>{
                toast.error(err.response.data)
            })
}




    // delete bazar-list..........
    const deleteBazaList=async (id)=>{
      await axios.delete(`http://localhost:5000/bazar-list/${id}`)
          .then((data)=>{
              if(data.data.deletedCount==1){
                  let filterBazarList=bazarlist.filter(el=>el._id!=id)
                  setBazarlist(filterBazarList);
                  if(data.data.success){
                      toast.success(data.data.msg);
                  }else if(! data.data.success){
                      toast.error(data.data.msg)
                  }
              }else{
                  toast.error(data.data.msg)
              }
          })
          .catch((err)=>{
              toast.error(err.response.data)
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
                if(res.data.success){
                    toast.error(res.data.msg);
                }else if(! res.data.msg){
                    toast.error(res.data.msg)
                }
            })
            .catch(err=>{
                toast.error(err.response.data.msg[0])
            })
    }
    //Delete Deposit List
    const deleteDepositList=async (id)=>{
        await axios.delete(`http://localhost:5000/deposit/${id}`)
            .then((data)=>{
                if(data.data.deletedCount==1){
                    let filterDepositList=deposit.filter(el=>el._id!=id)
                    setDsposit(filterDepositList);
                    if(data.data.success){
                        toast.success(data.data.msg);
                    }else if(! data.data.success){
                        toast.error(data.data.msg)
                    }
                }else {
                    toast.error(data.data.msg)
                }
            })
            .catch((err)=>{
                toast.error(err.response.data.msg[0]);
            })
    }

    //DeleteMealEntry
    const deleteMealEntry = async (id) => {
      await axios.delete(`http://localhost:5000/meal-entry/${id}`)
          .then((data)=>{
             toast.error(data.data)
              if(data.data.deletedCount==1){
                  let filterMeal = mealList.filter(el=>el._id!=id)
                setMealList(filterMeal);
                  if(data.data.success){
                      toast.success(data.data.msg);
                  }else if(! data.data.success){
                      toast.error(data.data.msg)
                  }
              }else {
                  toast.error(data.data.msg)
              }
          })
          .catch((err)=>{
              toast.error(err.response.data.msg[0]);
          })
    }

    return(
        <Layout>
            <div className={styleRequestTbale.table_contaier}>
            { !loading ?
                <div className={`table-responsive ${styleRequestTbale.border}` }>
                    <h2> Bazar List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bazarlist.length>0 && bazarlist.map((req,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{req.item_name}</td>
                                    <td>{req.cost}</td>
                                    <td scope="col">
                                        <button className='btn btn-primary'>{req.status? "Accepted":"Pending"}</button>
                                    </td>
                                    <td scope="col">
                                        <button className='btn btn-warning' onClick={()=>acceptMethod(req._id,"BazarList",req)}>Accept</button>
                                        / <button className='btn btn-danger' onClick={()=>{deleteBazaList(req._id)}} >Delete</button>

                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div> :<Skeleton/>
                }






                {/*Deposit List*/}
                {!loading ?  <div className="table-responsive">
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

                                    </td>
                                    <td scope="col">
                                        <button className='btn btn-warning'  onClick={()=>acceptMethod(req._id,"Deposit",req)}>Accept</button>/
                                        <button className='btn btn-danger' onClick={()=>{deleteDepositList(req._id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div> : <Skeleton/> }







                {/*Meal Entry List*/}
                {!loading ? <div className="table-responsive">
                    <h2> Meal Entry List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Break Fast</th>
                            <th scope="col">Lunch</th>
                            <th scope="col">Dinner</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mealList.length>0 && mealList.map((req,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{req.meal_of}</td>
                                    <td>{req.break_fast}</td>
                                    <td>{req.lunch}</td>
                                    <td>{req.dinner}</td>
                                    <td scope="col">
                                        <button className='btn btn-primary'>{req.status? "Accepted":"Pending"}</button>

                                    </td>
                                    <td scope="col">
                                        <button className='btn btn-warning' onClick={()=>acceptMethod(req._id,"MealEntry",req)}>Accept</button>/
                                        <button className='btn btn-danger' onClick={()=>{deleteMealEntry(req._id)}}>Delete</button>
                                    </td>

                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div> : <Skeleton/>
                }



            </div>

        </Layout>

    )
}
export default  Request;