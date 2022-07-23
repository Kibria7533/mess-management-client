import Layout from "../components/Layout";
import Styles from '../styles/manage.module.css';
const Manage=()=>{

    return(
        <Layout>
            <div className={Styles.dailymeal}>
                <div className={Styles.dailyMealCalc}>
                    Breakfast<p className='noOfMeal'>0</p>
                </div>
                <div  className={Styles.dailyMealCalc}>Lunch<p className='noOfMeal'>0</p>
                </div>
                <div  className={Styles.dailyMealCalc}>Dinner<p className='noOfMeal'>0</p>
                </div>
            </div>
        </Layout>

    )
}
export default  Manage;