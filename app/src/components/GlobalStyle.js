import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        background-color: ${({theme})=> theme.backgroundColor};
    }

`;

export default GlobalStyle;