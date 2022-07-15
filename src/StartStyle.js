import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("../img/background.jpg");
    background-repeat: no-repeat;
  
    background-size: cover;
    padding: 0;
    margin: 0;
    background-color: #8fcde5;
  }`

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Btn = styled.button`
  text-align: center;
  border: 2px solid #34e943;
  font-size: 30px;
  width: 150px;
  padding: 4px;
  margin: 3px;
  border-radius: 20px;
  outline: none;
  background-color: #5b3a97;
  cursor: pointer;
  color: white;
  cursor: pointer;
`

const DirectionBtn = styled.button`
  position: relative;
  bottom: ${(props) => props.direction === "down" || props.direction === "right" ? "50px" : ""};
  left: ${(props) => (props.direction === "right" ? "100px" : "")};
  right: ${(props) => (props.direction === "left" ? "100px" : "")};
  text-align: center;
  border: 2px solid #34e943;
  font-size: 30px;
  width: 150px;
  padding: 4px;
  margin: 3px;
  border-radius: 20px;
  outline: none;
  background-color: #5b3a97;
  cursor: pointer;
  color: white;
`
const SelectBtn = styled.select`
  text-align: center;
  border: 2px solid #34e943;
  font-size: 30px;
  width: 150px;
  padding: 4px;
  margin: 3px;
  border-radius: 20px;
  outline: none;
  background-color: #5b3a97;
  cursor: pointer;
  color: white;
`
export { Wrapper, Btn, DirectionBtn, SelectBtn, GlobalStyle }
