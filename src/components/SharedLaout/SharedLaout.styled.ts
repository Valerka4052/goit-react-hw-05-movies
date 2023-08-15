import styled from "@emotion/styled";
import { NavLink as LinkNav  } from "react-router-dom";
export const NavContainer = styled.nav`
display:flex;
align-items:center;
justify-content:space-between;
padding:0 50px;
background-color: cornflowerblue;
height: 60px;
margin-bottom:30px;
`;

export const NavLink = styled(LinkNav)`
text-decoration: none;
color: black;
font-size:30px;
font-weight:600;
&.active{
    color: red;
}
`