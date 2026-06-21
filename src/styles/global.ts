import { createGlobalStyle } from "styled-components";
import { background } from "../assets";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;  
    font-family: "Plus Jakarta Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;    
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
`;

export default GlobalStyle;
