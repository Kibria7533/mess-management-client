import Layout from "../components/Layout";
import Link from "next/link";
import { FaPlus ,FaTrashAlt} from 'react-icons/fa';
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Cost = () => {

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // cost  usestate
    const [date,setDate]=useState(" ")
    const [cost, setCost]=useState(" ");
    const [item_name, setItem_name]=useState(" ");
    const [name_of_person, setName_of_person]=useState("");




    //cost data save post route
    const Save=async()=>{
        await axios.post("http://localhost:5000/bazar-list",{
            date,
            cost,
            item_name,
            name_of_person
        },{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'}})
            .then((data)=>{
                console.log(data)
                setShow(false);
            })
    }

    //cost data show usestate


    const [costData,setCostdata]=useState([ ])
    useEffect(()=>{
        getDeposit();
    })
    const getDeposit=async()=>{
        await axios.get("http://localhost:5000/bazar-list")
            .then((data)=>{
                console.log(data)
                setCostdata(data.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    }



    return (
        <Layout>
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
                        {costData.length>0 && costData.map((cost,idx)=>{
                           return(
                               <tr>
                                   <td>{idx+1}</td>
                                   <td>{cost.createdAt}</td>
                                   <td>{cost.name_of_person}</td>
                                   <td>{cost.cost}</td>
                                   <td>pending</td>
                                   <td><FaTrashAlt/></td>
                               </tr>
                           )
                        })}
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

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name of Person</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name of person"
                                autoFocus
                                onChange={(e)=>{
                                    setName_of_person(e.target.value)
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
export default Cost;