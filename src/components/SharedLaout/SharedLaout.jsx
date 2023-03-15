import { Outlet } from "react-router-dom";
import { NavContainer, NavLink } from "./SharedLaout.styled";

export function SharedLaout() {
    
    return (
        <section>
            <NavContainer>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </NavContainer>
            <Outlet />
        </section>
    );
}