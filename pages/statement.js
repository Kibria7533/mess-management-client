import Link from "next/link";
import Layout from "../components/Layout";


const Statement=()=>{

    return(
        <Layout>
            <div className={'net__meal'}>
                <span className={'net__breakfast'}>Breakfast:  2</span>
                <span className={'net__lunch'}>Lunch:  6</span>
                <span className={'net__dinner'}>Dinner:  20</span>
            </div>
        <div>
            <article className="statement">
                <div className={'statement__header'}>
                    <h1 className="statement__title"><span className="statement__title--top">Mess</span><span
                        className="statement__title--bottom">Statement</span></h1>
                </div>

                <main className="statement__profiles">
                    <article className="statement__profile">
                        <span className="statement__name">Totoal Deposite</span>
                        <span className="statement__value">35.7<span>B</span></span>
                    </article>

                    <article className="statement__profile">
                        <span className="statement__name">Cost</span>
                        <span className="statement__value">9.9<span>B</span></span>
                    </article>

                    <article className="statement__profile">
                        <span className="statement__name">Balance</span>
                        <span className="statement__value">9.9<span>B</span></span>
                    </article>


                    <article className="statement__profile">
                        <span className="statement__name">Total Meal</span>
                        <span className="statement__value">9.9<span>B</span></span>
                    </article>

                    <article className="statement__profile">
                        <span className="statement__name">Meal Rate</span>
                        <span className="statement__value">9.9<span>B</span></span>
                    </article>
                </main>
            </article>
            <article className="statement">
                <div className={'statement__header'}>
                    <h1 className="statement__title"><span className="statement__title--top">My</span><span
                        className="statement__title--bottom">statement</span></h1>
                </div>

                <main className="statement__profiles">
                    <article className="statement__profile">
                        <span className="statement__name">Deposite</span>
                        <span className="statement__value">35.7<span>B</span></span>
                    </article>

                    <article className="statement__profile">
                        <span className="statement__name">Balance</span>
                        <span className="statement__value">9.9<span>B</span></span>
                    </article>


                    <article className="statement__profile">
                        <span className="statement__name">Total Meal</span>
                        <span className="statement__value">9.9<span>B</span></span>
                    </article>
                </main>
            </article>
        </div>
            <br/>
            <hr/>
            <Link href='/manage'>Manage</Link>
            <Link href='/'>Summary</Link>
        </Layout>
    )
}

export default  Statement