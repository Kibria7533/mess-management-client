import React from "react";
import styleMealEntry from "../styles/mealEntry.module.css";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {toast} from "react-toastify";

const MealEntry = () => {
  const [date, setDate]= useState(" ")
  const [break_fast,setBreak_fast]=useState(0);
  const [lunch,setLunch]=useState(0);
  const [dinner,setDinner]=useState(0);
  const [meal_of,setMeal_of]=useState(" ");
    const [loading,setLoading]=useState(false);


    const Save=async ()=>{
  await axios.post("http://localhost:5000/meal-entry",{
    date,
    break_fast,
    lunch,
    dinner,
    meal_of, mess_id: localStorage.getItem("mess_id")
  },{headers: {'Accept': 'application/json',
      'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }})
      .then((data)=>{

        if(data.data.status==404){
          toast.error(data.data.msg);

        }else{
          toast.success(data.data.msg)
          setBreak_fast(0);
          setLunch(0);
          setDinner(0);
          setDate(0);
          setMeal_of(0);
        }
      }).catch(err=>{
        toast.error(err.response.data);
      })
}
  return (
    <Layout>
        {!loading ?
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Date
                    </Form.Label>
                    <Form.Control type="date" className={styleMealEntry.meal_entry} name={date} value={date} placeholder="Enter your date"
                                  onChange={(e) => {
                                      setDate(e.target.value);
                                  }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Break Fast
                    </Form.Label>
                    <Form.Control className={styleMealEntry.meal_entry} name={break_fast} value={break_fast} type="number"
                                  placeholder="Enter your break fast"
                                  onChange={(e) => {
                                      setBreak_fast(e.target.value);
                                  }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lunch
                    </Form.Label>
                    <Form.Control className={styleMealEntry.meal_entry} name={lunch} value={lunch} type="number" placeholder="Enter your lunch"
                                  onChange={(e) => {
                                      setLunch(e.target.value);
                                  }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Dinner
                    </Form.Label>
                    <Form.Control className={styleMealEntry.meal_entry} name={dinner} value={dinner} type="number" placeholder="Enter your dinner"
                                  onChange={(e) => {
                                      setDinner(e.target.value)
                                  }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className={styleMealEntry.label}>Meal of :
                    </Form.Label>
                    <Form.Control className={styleMealEntry.meal_entry} name={meal_of} value={meal_of}  type="text" placeholder="Enter meal of"
                                  onChange={(e) => {
                                      setMeal_of(e.target.value)
                                  }}
                    />
                </Form.Group>
                <Button variant="primary" className={styleMealEntry.button} onClick={() => Save()}>
                    Add
                </Button>
            </Form> : <Skeleton/>
        }
    </Layout>
  );
};

export default MealEntry;
