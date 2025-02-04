import { Outlet } from "react-router-dom"
import AppHeader from "../components/Header";
import AppFooter from "../components/AppFooter";


function AppLayout () {

    return(
        <>
        <AppHeader />
        <Outlet/>
        {/* <footer>Social</footer> */}
        <AppFooter />
        </>
    )

};

export default AppLayout;