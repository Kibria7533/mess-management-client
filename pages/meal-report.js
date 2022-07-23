import Layout from "../components/Layout";
import Link from "next/link";
import Style from '../styles/Table.module.css'
const MealReport=()=>{

    return(
        <Layout>
            <>
                <div className="table-responsive ">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col" >Person 1</th>
                            <th scope="col">Person 2</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <td>02-01-2022</td>
                            <td className={`${Style.alignCntr}`}>0</td>
                            <td className={`${Style.alignCntr}`}>0</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>03-01-2022</td>
                            <td className={`${Style.alignCntr}`}>0</td>
                            <td className={`${Style.alignCntr}`}>0</td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>04-01-2022</td>
                            <td className={`${Style.alignCntr}`}>0</td>
                            <td className={`${Style.alignCntr}`}>0</td>

                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>05-01-2022</td>
                            <td className={`${Style.alignCntr}`}>0</td>
                            <td className={`${Style.alignCntr}`}>0</td>

                        </tr>

                        </tbody>
                    </table>
                </div>
            </>
        </Layout>

    )
}
export default  MealReport;