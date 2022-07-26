import Layout from "../components/Layout";
import {FaPlus, FaTrashAlt} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const Deposit=()=>{
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // deposit create usestate
    const [date, setDate]=useState(" ");
    const [name, setName]=useState(" ");
    const [amount, setAmount]=useState(" ");
    const [status, setStatus]=useState(" ");


    //get deposit
    const [depositList,setdepositlist]=useState(" ")
    useEffect(()=>{
        getDeposit();
    })
   const getDeposit=async()=>{
    await axios.get("http://localhost:5000/deposit")
        .then((data)=>{
            console.log(data.data);
            setdepositlist(data.data);
        })
        .catch((err)=>{
            console.log(err)
       })
    }
    const Save=async ()=>{
        await axios.post("http://localhost:5000/deposit",{
            date,
            name,
            amount,
            status
        },{headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'}})
            .then((data)=>{
                console.log(data);
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
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*{depositList.length>0 && depositList.map((depo,idx,index)=>{*/}
                    {/*    return(*/}
                    {/*        <tr key={idx}>*/}
                    {/*            <td>{index}</td>*/}
                    {/*            <td>{depo.createdAt}</td>*/}
                    {/*            <td>{depo.name}</td>*/}
                    {/*            <td>{depo.amount}</td>*/}
                    {/*            <td>{depo.status}</td>*/}
                    {/*        </tr>*/}
                    {/*    )*/}
                    {/*})}*/}

                    <tr>

                        <th scope="row">1</th>
                        <td>19-07-2022</td>
                        <td>kibria</td>
                        <td>500.0</td>
                        <td>Pending</td>
                        <td><FaTrashAlt/></td>
                    </tr>

                    </tbody>
                </table>
            </div>

            <div className={'row d-flex justify-content-end'}>
                <Button className="btn btn-primary" variant="primary"  onClick={handleShow} ><FaPlus/></Button>
            </div>

            {/*Modal*/}
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
                                onChange={(e)=>{
                                    setName(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your amount"
                                onChange={(e)=>{
                                    setAmount(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your amount"
                                onChange={(e)=>{
                                    setStatus(e.target.value)
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
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>

    )
}
export default  Deposit;