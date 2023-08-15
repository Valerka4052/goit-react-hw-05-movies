import styled from "@emotion/styled";
import { Link as LinkNav } from "react-router-dom";

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  border-radius: 12px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  transform: scale(1.05);
    };
`;
export const Thumb = styled.div`
width: 100%;
height:90%;
`

export const Link = styled(LinkNav)`
text-decoration: none;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:12px;
`
export const Text = styled.p`
color: black;
font-size:16px;
font-weight:600;
font-style:italic;
text-align:center;
`