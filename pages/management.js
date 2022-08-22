import Layout from "../components/Layout";
import stylemanagement from '../styles/management.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import mealEntry from "./meal-entry";
import {Button} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


const Management=()=>{

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Bazar list UseState
    const [date,setDate]=useState(" ")
    const [cost, setCost]=useState(" ");
    const [item_name, setItem_name]=useState(" ");

    const [loading,setLoading]=useState(false);
    //Update bazar-list..........

    const updateBazaList=async (id)=>{
        await axios.patch(`http://localhost:5000/bazar-list/${id}`, {
            date,
            cost,
            item_name
        })
            .then(res=>{
                setShow(false);
                if(res.data.success){
                    toast.success(res.data.msg);
                }else if(! res.data.success){
                    toast.error(res.data.msg)
                }
            })
            .catch(err=>{
                toast.error(err.response.data);
            })
    }



    const [costData,setCostdata]=useState([ ])
    useEffect(()=>{
        getBazarlist();
    },[])
    const getBazarlist=async()=>{
        await axios.get("http://localhost:5000/bazar-list")
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
        await axios.get("http://localhost:5000/deposit")
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
        await axios.get("http://localhost:5000/meal-entry")
            .then((data)=>{
                console.log(data.data)
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
                                <th scope="col">Name</th>
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
                                            <Button className="btn btn-warning" variant="primary"  onClick={handleShow} >Edit</Button>
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
                    <Modal show={show} onHide={handleClose}>
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
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter cost"
                                        autoFocus
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
                                        onChange={(e)=>{
                                            setItem_name(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={()=>Save()}>
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
                                    <td><button className='btn btn-warning' onClick={handleShow} >Edit</button></td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div> : <Skeleton/> }

                {/*Modal*/}
                {!loading ?
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title> Update Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Enter date"
                                        autoFocus
                                        onChange={(e) => {
                                            setDate(e.target.value)
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter your amount"
                                        onChange={(e) => {
                                            setAmount(e.target.value)
                                        }}
                                    />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => Save()}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal> : <Skeleton/>
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
                                        <button className='btn btn-warning' >Edit</button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div> : <Skeleton/>
                }


                {/*Meal Entry Modal */}


                { !loading ?
                    <div className={`table-responsive ${stylemanagement.border}` }>
                        <h2>Delete Member</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Add Date</th>
                                <th scope="col">Name</th>
                            </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div> :<Skeleton/>
                }



            </div>

        </Layout>

    )
}
export default  Management;