import Header from "./Header";

const Layout=({props})=>{
    return(
        <div>
            <Header/>
            {props}
        </div>
    )
}

export  default Layout;