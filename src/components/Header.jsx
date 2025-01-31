import { NavLink } from "react-router-dom";

function Header() {

    return(
        <>
        <NavLink to="/" className={`p-5`}>Homepage</NavLink>
        <NavLink to="/travel">Viaggi</NavLink>
        </>
    )
}

export default Header;