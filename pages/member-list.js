import Layout from "../components/Layout";
import Link from "next/link";
const MemberList=()=>{
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