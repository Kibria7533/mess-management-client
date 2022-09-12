import Layout from "../components/Layout";
import {FaPlus} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "react-loading-skeleton/dist/skeleton.css";
import {toast} from "react-toastify";
import {apiGet, apiPost} from "../services/http-methods";
import DataTable from "react-data-table-component";
import useSWR from "swr";
import dayjs from "dayjs";

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

// const {data, error}=useSWR(["private/bazar-list"],apiGet)
// if(error){
//    toast.error('Something went wrong!')
// }

const  {data,error} =useSWR(['/bazar-list'],apiGet)
if(error){
    toast.error('Something went wrong!')
}
console.log(data)

const columns =[
    {
        name:"Date",
        selector: row=>row.updatedAt,
        cell:(data)=>dayjs(data["updatedAt"]).format("YYYY/MM/DD HH:mm:ss"),
           sortable: true,
       

    },
    {
        name:"Item Name",
        selector: row=>row.item_name,
        sortable:true
    },
    {
        name:"Amount",
        selector: row=>row.cost,
        sortable:true
    },
    {
        name: "Status",
        cell:(row)=>(<button className="btn btn-primary" onClick={()=>alert(row.status)}>Pending</button>)
    }
    
]

    return (
        <Layout>
                <div className="table-responsive w-75 ">
                 
                    {/* <table className="table">
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
                    </table> */}

                <DataTable
                width="15rem"
                 title="Cost List" 
                 columns={columns} 
                 data={data} 
                 pagination
                 fixedHeader
                 selectableRows
                 selectableRowsHighlight
                 highlightOnHover
                    subHeader
                 subHeaderComponent={
                    <input type="text" 
                    placeholder="Search here"
                    className=" w-25 form-control"
                    />
                 }

        
                 />

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
