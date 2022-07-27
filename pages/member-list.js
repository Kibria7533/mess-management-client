import Layout from "../components/Layout";
import Link from "next/link";
import axios from 'axios';
import {useEffect, useState} from "react";
const MemberList=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // deposit create usestate
    const [date, setDate]=useState(" ");
    const [name, setName]=useState(" ");
    const [amount, setAmount]=useState(" ");
    const [status, setStatus]=useState(" ");

    //get deposit
    const [memberList,setMemberList]=useState([])

    useEffect(()=>{
        getMemberList();
    })
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
    const Save=async ()=>{
        await axios.post("http://localhost:5000/member",{
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
        </Layout>

    )
}
export default  MemberList;