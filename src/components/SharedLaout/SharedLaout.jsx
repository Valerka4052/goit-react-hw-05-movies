import { Outlet } from "react-router-dom";
import { NavContainer, NavLink } from "./SharedLaout.styled";
import { Suspense } from "react";

export function SharedLaout() {
    
    return (
        <section>
            <NavContainer>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </NavContainer>
             <Suspense fallback={<div>Loading........</div>}>
            <Outlet />
            </Suspense>
        </section>
    );
};