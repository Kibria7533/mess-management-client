import Layout from "../components/Layout";
import {FaPlus, FaTrashAlt} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Deposit=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your amount"
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>

    )
}
export default  Deposit;