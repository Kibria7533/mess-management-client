import Layout from "../components/Layout";
import Link from "next/link";
import axios from 'axios';
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const MemberList=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // deposit create usestate
    const [date, setDate]=useState(" ");
    const [name, setName]=useState(" ");
    const [amount, setAmount]=useState(" ");
    const [status, setStatus]=useState(" ");
    const [members,setMembers]=useState([]);


    //get deposit
    const [memberList,setMemberList]=useState([])

    useEffect(()=>{
         getMemberList();
    },[])
    const getMemberList=async()=>{
        await axios.get("http://localhost:5000/member")
            .then((data)=>{
                console.log(data.data);
                setMemberList(data.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const Save=async (search_term)=>{
        await axios.get(`http://localhost:5000/search/member/elastic-search/?search_term=${search_term}`)
            .then((data)=>{
                setMembers(data.data)
            })
    }

    return(
        <Layout>
            <>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {memberList.length>0 && memberList.map((member,idx)=>{
                            return(
                                <tr key={idx+1}>
                                    <td>{idx+1}</td>
                                    <td>{member.name}</td>
                                    <td>{member.phone_no}</td>
                                    <td>{member.status ?? 'pending'}</td>
                                    <td><Link href={"/"}>Delete</Link></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </>

            <div className={'row d-flex justify-content-end'}>
                <Button className="btn btn-primary" variant="primary"  onClick={handleShow} >Add Member</Button>
            </div>

            {/*Modal*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                name={"search_term"}
                                placeholder="Enter member phone number"
                                autoFocus
                                onChange={(e)=>Save(e.target.value)
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {members.length>0 && members.map((member,idx)=>{
                                return(
                                    <tr key={idx+1}>
                                        <td>{idx+1}</td>
                                        <td>{member.name}</td>
                                        <td>{member.email}</td>
                                        <td>{member.phone_no}</td>
                                        <td> <button className='btn btn-warning'>Add</button></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </Modal.Footer>
            </Modal>


        </Layout>

    )
}
export default  MemberList;