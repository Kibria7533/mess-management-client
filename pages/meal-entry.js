import styleMealEntry from "../styles/mealEntry.module.css";
import Layout from "../components/Layout";
const mealEntry = () => {
  return (
    <Layout>
      <div className="container">
      <main className={styleMealEntry.main}>
        <div>
          <label className={styleMealEntry.label} >Date</label>
          <input type={"date"} className={styleMealEntry.meal_entry} />
        </div>
        <label className={styleMealEntry.label}>Break Fast</label>
        <input className={styleMealEntry.meal_entry} />
        <label className={styleMealEntry.label}>Lunch</label>
        <input className={styleMealEntry.meal_entry} />
        <label className={styleMealEntry.label}>Dinner</label>
        <input className={styleMealEntry.meal_entry} />
        <label form={"meal"} className={styleMealEntry.label}>
          Meal of:
        </label>
        <select className={styleMealEntry.meal_entry}>
          <option>Rafi</option>
          <option>Bappy</option>
        </select>
        <button className={styleMealEntry.button}>Add</button>
      </main>
      </div>
    </Layout>
  );
};

export default mealEntry;
