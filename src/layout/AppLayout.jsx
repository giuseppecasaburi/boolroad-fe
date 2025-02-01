import { Outlet } from "react-router-dom"
import SingleTravel from "../pages/SingleTravel"
import Homepage from "../pages/Homepage"
import Header from "../components/Header";

function AppLayout () {

    return(
        <>
        <Header/>
        <Outlet/>
        {/* <footer>Social</footer> */}
        </>
    )

};

export default AppLayout;