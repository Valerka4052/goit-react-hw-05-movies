import styled from "@emotion/styled";
import { NavLink as LinkNav ,Link as BackLink } from "react-router-dom";
export const List = styled.ul`
 display: flex;
`
export const GenreItem = styled.li`
list-style: none;
margin-bottom:15px;
margin-right:30px;
`
export const Item = styled.li`
list-style: none;
margin-bottom:15px;
margin-right:40px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  transform: scale(1.5);
    };
`
export const Image = styled.img`

`
export const TextContainer = styled.div`
width:50%;
padding:20px;
`
export const Text = styled.p`
color: black;
font-size:16px;
font-weight:400;
font-style:italic;
`
export const MainText = styled.p`
color: black;
font-size:30px;
font-weight:700;
`
export const Link = styled(BackLink)`
text-decoration:none;
font-size:20px;
font-weight:700;
color: chocolate;
`
export const NavLink = styled(LinkNav)`
text-decoration:none;
color: blueviolet;
font-size:20px;
font-weight:400;
&.active{
  color:red;
  font-weight:500;
}
`;
export const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
padding:30px;
`
export const LinkContainer = styled.div`
padding-left:40px;
`