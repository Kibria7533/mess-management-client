import styleMealEntry from '../styles/mealEntry.module.css'
const mealEntry=()=>{

    return(
        <main className={styleMealEntry.main}>
            <label className={styleMealEntry.label}>Date</label>
            <input type={"date"} className={styleMealEntry.meal_entry} />
            <label className={styleMealEntry.label}>Break Fast</label>
            <input className={styleMealEntry.meal_entry}  />
            <label className={styleMealEntry.label}>Lunch</label>
            <input className={styleMealEntry.meal_entry}  />
            <label className={styleMealEntry.label}>Dinner</label>
            <input className={styleMealEntry.meal_entry} />
            <label form={'meal'} className={styleMealEntry.label}>Meal of:</label>
            <select className={styleMealEntry.meal_entry}>
                <option>Rafi</option>
                <option>Bappy</option>
            </select>
            <button className={styleMealEntry.button}>Add</button>
        </main>
    )
}

export default mealEntry