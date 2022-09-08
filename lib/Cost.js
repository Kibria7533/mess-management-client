import Layout from "../components/Layout";
import {FaPlus} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "react-loading-skeleton/dist/skeleton.css";
import {toast} from "react-toastify";
import {apiGet, apiPost} from "../services/http-methods";

import useSWR from "swr";

const Cost = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(" ");
  const [cost, setCost] = useState(" ");
  const [item_name, setItem_name] = useState(" ");

  const Save = async ({}) => {
   const res= await apiPost(
      "private/bazar-list",
      {
        date,
        cost,
        item_name,
        mess_id: localStorage.getItem("mess_id"),
      },
    )
      if(res.status=201){
          setShow(prev=>!prev);
      }
  };

const {data, error}=useSWR(["private/bazar-list"],apiGet)
if(error){
   toast.error('Something went wrong!')
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
                        </tr>
                        </thead>
                        <tbody>
                        {data && data.length > 0 && data.map((cost, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{cost.createdAt}</td>
                                    <td>{cost.item_name}</td>
                                    <td>{cost.cost}</td>
                                    <td>pending</td>
                                </tr>
                            );
                        })}

                        </tbody>
                    </table>
                </div>

            <div className={"row d-flex justify-content-end"}>
                <Button
                    className="btn btn-primary"
                    variant="primary"
                    onClick={()=>setShow(true)}
                >
                    <FaPlus/>
                </Button>
            </div>


                <Modal show={show} onHide={()=>setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deposit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="Date"
                                    placeholder="Enter date"
                                    autoFocus
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Cost</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter cost"
                                    autoFocus
                                    onChange={(e) => {
                                        setCost(e.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter item name"
                                    autoFocus
                                    onChange={(e) => {
                                        setItem_name(e.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setShow(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => Save()}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
        </Layout>
    );
};
export default Cost;
