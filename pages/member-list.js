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
 console.log('lool')

    //get deposit
    const [memberList,setMemberList]=useState([])

    useEffect(()=>{
        console.log('hello')
        getMemberList();
    })
    const getMemberList=async()=>{
        await axios.get("http://localhost:5000/member-list")
            .then((data)=>{
                console.log(data.data);
                setMemberList(data.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const Save=async ()=>{
        await axios.post("http://localhost:5000/member-list",{
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
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark Otto</td>
                            <td>Otto@gmail.com</td>
                            <td>01720588884</td>
                            <td>Pending</td>
                            <td><Link href={"/"}>Delete</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark Otto</td>
                            <td>Otto@gmail.com</td>
                            <td>01720588884</td>
                            <td>Pending</td>
                            <td><Link href={"/"}>Delete</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark Otto</td>
                            <td>Otto@gmail.com</td>
                            <td>01720588884</td>
                            <td>Pending</td>
                            <td><Link href={"/"}>Delete</Link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
        </Layout>

    )
}
export default  MemberList;