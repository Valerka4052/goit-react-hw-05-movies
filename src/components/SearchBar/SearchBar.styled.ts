import styled from "@emotion/styled";
export const Container = styled.div`
margin-bottom:30px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
    margin-left:auto;
  margin-right:auto;
  
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const Input = styled.input`
  display: inline-block;
  width: 100%;

  font: inherit;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 14px;
&::placeholder {
  font: inherit;
  font-size: 18px;
}
`

export const Button = styled.button`
  display: inline-block;
  width: 80px;
  height: 48px;
margin-left:10px;
  border-radius: 10px;

  background-color: antiquewhite;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
  opacity: 1;
}
`