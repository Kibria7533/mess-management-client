import Layout from "../components/Layout";
import Link from "next/link";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
import { apiPost } from "../services/http-methods";
import { apiGet } from "../services/http-methods";

import useSWR from "swr";


const fetcher =async(...args)=>{
  const res = await fetch(...args);
   if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  
  return await res.json();
}


const Cost = () => {
  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

  // cost  usestate
  const [date, setDate] = useState(" ");
  const [cost, setCost] = useState(" ");
  const [item_name, setItem_name] = useState(" ");


  //cost data save post route
  const Save = async ({}) => {
    await apiPost(
      "/bazar-list",
      {
        date,
        cost,
        item_name,
        mess_id: localStorage.getItem("mess_id"),
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
      // await axios.post("http://localhost:5000/bazar-list",{
      //     date,
      //     cost,
      //     item_name,
      //     mess_id: localStorage.getItem("mess_id")
      // },{headers: {'Accept': 'application/json',
      //         'Content-Type': 'application/json',
      //         Authorization: `Bearer ${localStorage.getItem('access_token')}`

      //     }})
      .then((data) => {
        setShow(false);
      })
      .catch((err) => {
        toast.error("Something Went Wrong");
      });
  };

  //cost data show usestate

  // const [costData, setCostdata] = useState([]);
  // useEffect(() => {
  //   getDeposit();
  // }, []);
  // const getDeposit = async () => {
  //   await apiGet("/bazar-list")
  //     //await axios.get("http://localhost:5000/bazar-list")
  //     .then((data) => {
  //       toast.error(data.data);
  //       setCostdata(data.data);
  //     })
  //     .catch((err) => {
  //       toast.error("Something Went Wrong");
  //     });
  // };

const {data, error}=useSWR('http://localhost:5000/bazar-list',fetcher,{
  suspense:true
})
if(error){
  return <h1>There was an error</h1>
}else{
  return <h1>There was an error</h1>
}

  return (
    <Layout>
      {!loading ? (
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
                {data.length > 0 &&
                data.map((cost, idx) => {
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
      ) : (
        <Skeleton />
      )}
      <div className={"row d-flex justify-content-end"}>
        <Button
          className="btn btn-primary"
          variant="primary"
          onClick={handleShow}
        >
          <FaPlus />
        </Button>
      </div>

      {/*Modal*/}
      {!loading ? (
        <Modal show={show} onHide={handleClose}>
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => Save()}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Skeleton />
      )}
    </Layout>
  );
};
export default Cost;
