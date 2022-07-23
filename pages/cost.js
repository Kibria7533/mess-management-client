import Layout from "../components/Layout";
import Link from "next/link";
import { FaPlus ,FaTrashAlt} from 'react-icons/fa';
import {Button} from "react-bootstrap";

const Cost = () => {

    return (
        <Layout>
            <>

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>19-07-2022</td>
                            <td>kibria</td>
                            <td>Pending</td>
                            <td><FaTrashAlt/></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div className={'row d-flex justify-content-end'}>
                    <Button className={''}><FaPlus/></Button>
                </div>

            </>
        </Layout>

    )
}
export default Cost;