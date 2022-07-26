import Layout from "../components/Layout";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const monthlystatement=()=>{
    return(
        <Layout>
           <div className='row'>

               <div className={`col-md-4`}>
                   <Card  style={{ width: '18rem' }} >

                       <Card.Header>Month Name</Card.Header>
                       <Card.Body>
                           <Card.Title>All details for month</Card.Title>
                           <Card.Text>
                               Total Deposit
                           </Card.Text>
                           <Card.Text>
                               Total Cost
                           </Card.Text>
                           <Card.Text>
                               Balance
                           </Card.Text>
                           <Card.Text>
                               Total Meal
                           </Card.Text>
                           <Card.Text>
                               Meal Rate
                           </Card.Text>

                       </Card.Body>
                   </Card>
               </div>


               <div className={`col-md-4`}>
                   <Card  style={{ width: '18rem' }} >

                       <Card.Header>Month Name</Card.Header>
                       <Card.Body>
                           <Card.Title>All details for month</Card.Title>
                           <Card.Text>
                               Total Deposit
                           </Card.Text>
                           <Card.Text>
                               Total Cost
                           </Card.Text>
                           <Card.Text>
                               Balance
                           </Card.Text>
                           <Card.Text>
                               Total Meal
                           </Card.Text>
                           <Card.Text>
                               Meal Rate
                           </Card.Text>

                       </Card.Body>
                   </Card>
               </div>

               <div className={`col-md-4`}>
                   <Card style={{ width: '18rem' }} >

                       <Card.Header>Month Name</Card.Header>
                       <Card.Body>
                           <Card.Title>All details for month</Card.Title>
                           <Card.Text>
                               Total Deposit
                           </Card.Text>
                           <Card.Text>
                               Total Cost
                           </Card.Text>
                           <Card.Text>
                               Balance
                           </Card.Text>
                           <Card.Text>
                               Total Meal
                           </Card.Text>
                           <Card.Text>
                               Meal Rate
                           </Card.Text>

                       </Card.Body>
                   </Card>
               </div>
           </div>




        </Layout>
    )
}
export default monthlystatement
