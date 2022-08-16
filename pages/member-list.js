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
        await axios.get(`http://localhost:5000/mess/all-member/${localStorage.getItem('mess_id')}`)
            .then((data)=>{
                console.log(data.data);
                setMemberList(data.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }
const CheckExist=(phone_no)=>{
    members.forEach((e)=>{
        console.log(e.phone_no,phone_no,e.phone_no==phone_no)
     if(e.phone_no==phone_no)
         return true;
    })
    return false;
}
    const Save=async (search_term)=>{
        await axios.get(`http://localhost:5000/search/member/elastic-search/?search_term=${search_term}`)
            .then((data)=>{
                let mem=[...memberList];
                let search=[...data.data];
                mem.forEach((b)=>{
                    search.forEach((a)=>{
                        if(b.phone_no=== a.phone_no){
                            a.check = true;
                        }
                    })
                })
                console.log(data.data,'data.data')
                setMembers(data.data)
            })
    }

    const AddMemberToMess=async (phone_no)=>{
        await axios.post("http://localhost:5000/mess/add-member-to-mess",{
             phone_no:phone_no,
             mess_id: localStorage.getItem("mess_id")
        },{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }})
            .then((data)=>{
               getMemberList();
                let mem=[...memberList];
                let search=[...members];
                mem.forEach((b)=>{
                    search.forEach((a)=>{
                        if(b.phone_no=== a.phone_no){
                            a.check = true;
                        }
                    })
                })
                setMembers(search)
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
                        </tr>
                        </thead>
                        <tbody>
                        {memberList.length>0 && memberList.map((member,idx)=>{
                            return(
                                <tr key={idx+1}>
                                    <td>{idx+1}</td>
                                    <td>{member.name}</td>
                                    <td>{member.phone_no}</td>
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
                    {members.length>0  ?  <div className="table-responsive">
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
                                        <td>{member.check?  <button className='btn btn-warning' disabled={true}>Added</button> : <button className='btn btn-warning' onClick={()=>AddMemberToMess(member.phone_no)}>Add</button>}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div> :<div><p>No Result Found</p></div> }
                </Modal.Footer>
            </Modal>


        </Layout>

    )
}
export default  MemberList;