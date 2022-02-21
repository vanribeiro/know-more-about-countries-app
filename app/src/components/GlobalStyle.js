import { createGlobalStyle } from "styled-components";
import { lightMode } from "./UI/variables";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body{
        background-color: ${lightMode.backgroundColor};
    }

`;

export default GlobalStyle;