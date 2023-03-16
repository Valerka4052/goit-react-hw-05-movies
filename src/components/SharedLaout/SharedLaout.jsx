import { Outlet } from "react-router-dom";
import { NavContainer, NavLink } from "./SharedLaout.styled";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";

export function SharedLaout() {
    
    return (
        <section>
            <NavContainer>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </NavContainer>
             <Suspense fallback={<Loader />}>
            <Outlet />
            </Suspense>
        </section>
    );
};