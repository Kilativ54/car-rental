import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
// import { Suspense } from 'react';

function Layout(){
    return(
        <div>
            <Header/>
            <main><Outlet/></main>
            
        </div>
    )
}

export default Layout;