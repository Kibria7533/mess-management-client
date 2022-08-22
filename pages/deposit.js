import Layout from "../components/Layout";
import {FaPlus, FaTrashAlt} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {toast} from "react-toastify";


const Deposit=()=>{
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loading,setLoading]=useState(false);

    // deposit create usestate
    const [date, setDate]=useState("");
    const [name, setName]=useState("");
    const [amount, setAmount]=useState(0);

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
    const Save=async ()=>{

        if(!date || !name || !amount ){
            toast.error('Please fill the form')
            return;
        }
        await axios.post("http://localhost:5000/deposit",{
            date,
            name,
            amount,
            mess_id: localStorage.getItem("mess_id")
        },{headers: {'Accept': 'application/json',
            'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }})
            .then((data)=>{
                if(data.data.status==404){
                    toast.error(data.data.msg)
                }else{
                    toast.success(data.data.msg)
                    setShow(false);
                }
            }).catch(err=>{
                toast.error(err.response.data);
            })
    }

    return(
        <Layout>

                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">PERSONAL</a>
                    </li>
                    <li className="ml-1 nav-item">
                        <a className="nav-link " href="#">MESS</a>
                    </li>
                </ul>
                {!loading ?
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
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
                                    <td>{depo.status}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>:<Skeleton/>
            }

            <div className={'row d-flex justify-content-end'}>
                <Button className="btn btn-primary" variant="primary"  onClick={handleShow} ><FaPlus/></Button>
            </div>

            {/*Modal*/}
            {!loading ?
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deposit</Modal.Title>
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
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal> : <Skeleton/>
            }
        </Layout>

    )
}
export default  Deposit;