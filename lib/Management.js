
import Layout from "../components/Layout";
import stylemanagement from '../pages/management/management.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

import {Button} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiGet } from "../services/http-methods";
import { apiDelete } from "../services/http-methods";
import { apiPatch } from "../services/http-methods";


const Management=()=>{

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [bazarShow, setBazarShow] = useState(false);
    const bazarHandleClose = () => setBazarShow(false);
    const bazarHandleShow = () => setBazarShow(true);

    const [depositShow, setDepositShow] = useState(false);
    const depositHandleClose = () => setBazarShow(false);
    const depositHandleShow = () => setBazarShow(true);

    const [mealShow, setMealShow] = useState(false);
    const mealHandleClose = () => setBazarShow(false);
    const mealHandleShow = () => setBazarShow(true);


    const [loading,setLoading]=useState(false);

    //Bazar list UseState
    const [date,setDate]=useState(" ")
    const [cost, setCost]=useState(" ");
    const [item_name, setItem_name]=useState(" ");
    const [bazarid,setbazarId]=useState(" ")


    //Deposit List UseState

    const [name, setName]=useState("");
    const [amount, setAmount]=useState(0);
    const [depositId, setDepositId]=useState("")


    //Update bazar-list..........


   const setBazarupdate=(cost)=>{
       setbazarId(cost._id)
       setCost(cost.cost);
       setItem_name(cost.item_name);
       setBazarShow(true);
    }
    const updateBazar=async (id)=>{

        await apiPatch(`/bazar-list/${id}`,{
            date,
            cost,
            item_name,
            mess_id: localStorage.getItem("mess_id")
        },{headers: {'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }})

        // await axios.patch(`${process.env.NEXT_PUBLIC_HOST}/bazar-list/${id}`, {
        //     date,
        //     cost,
        //     item_name,
        //     mess_id: localStorage.getItem("mess_id")
        // },{headers: {'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${localStorage.getItem('access_token')}`
        //     }})
            .then((data)=>{
                if(data.data.status==404){
                    toast.error(data.data.msg)
                }else{
                    toast.success(data.data.msg);
                    setBazarShow(false);
                }
            })
            .catch(err=>{
                toast.error(err.response.data);
            })
    }
//Update Deposit
    const setdepositupdate=(depo)=>{
        setDepositId(depo._id)
       setName(depo.name)
       setAmount(depo.amount)
        setDepositShow(true);

    }
    const updateDeposit=async (id)=>{
        await apiPatch(`/deposit/${id}`,{
            date,
            name,
            amount,
            mess_id: localStorage.getItem("mess_id")
        },{headers: {'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }})

        // await axios.patch(`${process.env.NEXT_PUBLIC_HOST}/deposit/${id}`,{
        //     date,
        //     name,
        //     amount,
        //     mess_id: localStorage.getItem("mess_id")
        // },{headers: {'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${localStorage.getItem('access_token')}`
        //     }})

            .then((data)=>{
                if(data.data.status==404){
                    toast.error(data.data.msg)
                }else{
                    toast.success(data.data.msg)
                    setDepositShow(false);
                }
            }).catch(err=>{
                toast.error(err.response.data);
            })
    }



    //update MealEntry useState
    const [meal_of, setMeal_of]=useState("");
    const [break_fast,setBreakFast]=useState(0);
    const [lunch,setLunch]=useState(0);
    const [dinner,setDinner]=useState(0);
    const [mealEntryId, setMealEntryId]=useState("")

    const setMealEntryUpdate=(meal)=>{
        setMealEntryId(meal._id);
        setMeal_of(meal.meal_of)
        setBreakFast(meal.break_fast)
        setLunch(meal.dinner)
        setDinner(meal.lunch)
        setMealShow(true);

    }

//Update Meal ............
    const updateMealEntry=async (id)=>{
        
        await apiPatch(`/meal-entry/${id}`,{
            date,
            break_fast,
            lunch,
            dinner,
        },{headers: {'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }})

        // axios.patch(`${process.env.NEXT_PUBLIC_HOST}/meal-entry/${id}`,{
        //     date,
        //     break_fast,
        //     lunch,
        //     dinner,
        // },{headers: {'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${localStorage.getItem('access_token')}`
        //     }})
            .then((data)=>{

                if(data.data.status==404){
                    toast.error(data.data.msg);
                }else{
                    toast.success(data.data.msg)
                    setMealShow(false);

                }
            }).catch(err=>{
            toast.error(err.response.data);
        })
    }

    const [costData,setCostdata]=useState([ ])
    useEffect(()=>{
        getBazarlist();
    },[])
    const getBazarlist=async()=>{

        await apiGet('/bazar-list')
       // await axios.get(`${process.env.NEXT_PUBLIC_HOST}/bazar-list`)
            .then((data)=>{
                if(data.data.status==404){
                    toast.error(data.data.msg)
                }else{
                    toast.success(data.data.success);
                    setCostdata(data.data);
                }
            })
            .catch((err)=>{
                toast.error(err.response.data);
            })
    }

    //get deposit
    const [depositList,setdepositlist]=useState([ ])
    useEffect(()=>{
        getDeposit();
    },[])
    const getDeposit=async()=>{
        await apiGet('/deposit')
       // await axios.get(`${process.env.NEXT_PUBLIC_HOST}/deposit`)
            .then((data)=>{

                if(data.data.status==404){
                    toast.error(data.data.msg);

                }else{
                    toast.success(data.data.msg);
                    setdepositlist(data.data);
                }
            })
            .catch((err)=>{
                toast.error(err.response.data);
            })
    }

    //get MealEntry
    const [mealEntry, setMealEntry]=useState([]);
    useEffect( ()=>{
     getMealEntry();
    },[])
const getMealEntry=async ()=>{

    await apiGet('/meal-entry')
      //  await axios.get(`${process.env.NEXT_PUBLIC_HOST}/meal-entry`)
            .then((data)=>{
                if(data.data.status==404){
                    toast.error(data.data.msg);

                }else{
                    toast.success(data.data.msg);
                    setMealEntry(data.data);
                }
            })
            .catch((err)=>{
                toast.error(err.response.data);
            })
    }
    const[member,setMember]=useState([])

    //Member List Get data
    useEffect(()=>{
        memberList();
    },[])
    const memberList=async ()=>{
        await apiGet('/member')
        //await axios.get(`${process.env.NEXT_PUBLIC_HOST}/member/`)
            .then((data)=>{
                if (data.data.status==404){
                    toast.error(data.data.msg);
                }else{
                    toast.success(data.data.msg)
                    setMember(data.data);
                }
            }).catch(err=>{
                toast.error(err.response.data)
            })
    }
    //Delete Member
    const deleteMember=async (id)=>{
        console.log(id);
        await axios.delete('')

    }

    return(
        <Layout>
            <div className={stylemanagement.table_contaier}>
                { !loading ?
                    <div className={`table-responsive ${stylemanagement.border}` }>
                        <h2>Edit Bazar List</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col"> Item name</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {costData.length>0 && costData.map((cost,idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{cost.createdAt}</td>
                                        <td>{cost.item_name}</td>
                                        <td>{cost.cost}</td>
                                        <td>
                                            <Button className="btn btn-warning" variant="warning" onClick={()=>setBazarupdate(cost)}>Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div> :<Skeleton/>
                }

                {/*Modal*/}
                {!loading ?
                    <Modal show={bazarShow} onHide={bazarHandleShow}>
                        <Modal.Header closeButton>
                            <Modal.Title> Update BazarList</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        type="Date"
                                        placeholder="Enter date"
                                        autoFocus
                                        onChange={(e)=>{
                                            setDate(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter cost"
                                        autoFocus
                                        value={cost}

                                        onChange={(e)=>{
                                            setCost(e.target.value)
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter item name"
                                        autoFocus
                                        value={item_name}
                                        onChange={(e)=>{
                                            setItem_name(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={bazarHandleClose}>
                                Close
                            </Button>
                                    <Button variant="primary" onClick={()=>updateBazar(bazarid)}>
                                        Update
                                    </Button>

                        </Modal.Footer>
                    </Modal>:<Skeleton/>
                }




                {/*Deposit List*/}
                {!loading ?  <div className="table-responsive">
                    <h2>Edit Deposit List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {depositList.length > 0 && depositList.map((depo, idx) => {

                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{depo.createdAt}</td>
                                    <td>{depo.name}</td>
                                    <td>{depo.amount}</td>
                                    <Button className="btn btn-warning" variant="warning" onClick={()=>setdepositupdate(depo)}>Edit</Button>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div> : <Skeleton/> }



                {/*Modal*/}
                {!loading ?
                    <Modal show={depositShow} onHide={depositHandleShow}>
                        <Modal.Header closeButton>
                            <Modal.Title> Update Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        type="Date"
                                        placeholder="Enter date"
                                        autoFocus
                                        onChange={(e)=>{
                                            setDate(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        autoFocus
                                        value={name}

                                        onChange={(e)=>{
                                            setName(e.target.value)
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Amonut</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter amount"
                                        autoFocus
                                        value={amount}
                                        onChange={(e)=>{
                                            setAmount(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={depositHandleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={()=>updateDeposit(depositId)}>
                                Update
                            </Button>

                        </Modal.Footer>
                    </Modal>:<Skeleton/>
                }





                {/*Meal Entry List*/}
                {!loading ? <div className="table-responsive">
                    <h2>Edit Meal Entry List</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Break Fast</th>
                            <th scope="col">Lunch</th>
                            <th scope="col">Dinner</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mealEntry.length>0 && mealEntry.map((meal,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{meal.createdAt}</td>
                                    <td>{meal.meal_of}</td>
                                    <td>{meal.break_fast}</td>
                                    <td>{meal.dinner}</td>
                                    <td>{meal.lunch}</td>
                                    <td scope="col">
                                        <td><button className='btn btn-warning' onClick={()=>setMealEntryUpdate(meal)} >Edit</button></td>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div> : <Skeleton/>
                }


                {/*Modal*/}
                {!loading ?
                    <Modal show={mealShow} onHide={mealHandleShow}>
                        <Modal.Header closeButton>
                            <Modal.Title> Update Meal Entry </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        type="Date"
                                        placeholder="Enter date"
                                        autoFocus
                                        onChange={(e)=>{
                                            setDate(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        autoFocus
                                        value={meal_of}
                                        onChange={(e)=>{
                                            setName(e.target.value)
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Break Fast</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter item name"
                                        autoFocus
                                        value={break_fast}
                                        onChange={(e)=>{
                                            setBreakFast(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lunch</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter lunch"
                                        autoFocus
                                        value={lunch}
                                        onChange={(e)=>{
                                            setLunch(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Dinner</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your dinner"
                                        autoFocus
                                        value={dinner}
                                        onChange={(e)=>{
                                            setDinner(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={mealHandleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={()=>updateMealEntry(mealEntryId)}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal>:<Skeleton/>
                }





                {/*Meal Entry Modal */}


                { !loading ?
                    <div className={`table-responsive ${stylemanagement.border}` }>
                        <h2>Delete Member</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {member.length>0 && member.map((member,idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{member.name}</td>
                                        <td>{member.email}</td>
                                        <td>{member.phone_no}</td>
                                        <td><button className='btn btn-danger' onClick={()=>{deleteMember(member._id)}}>Delete</button></td>

                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div> :<Skeleton/>
                }



            </div>

        </Layout>

    )

}
export default Management