import Link from "next/link";


const Statement=()=>{

    return(
        <div>
            <h2> this Statement page</h2>

            <Link href='/manage'>Manage</Link>
            <Link href='/'>Summary</Link>
        </div>
    )
}

export default  Statement