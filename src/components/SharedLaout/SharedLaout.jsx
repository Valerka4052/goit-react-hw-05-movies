import { Outlet, NavLink } from "react-router-dom";

export function SharedLaout() {
    
    return (
        <section>
         <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
            </nav>
            <Outlet/>
            </section>
    )
}