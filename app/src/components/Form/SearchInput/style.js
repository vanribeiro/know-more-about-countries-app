import styled from 'styled-components';
import { TextField } from "@mui/material";

const InputTypeSearch = styled(TextField)`
    background-color: ${({theme}) => theme.inputBackgroundColor};
    border-radius: 4px; 
    width: 100%;

    @media screen and (min-width:1200px){
        width: 90%;
    }

    @media screen and (min-width:1200px){
        width: 70%;
    }

    fieldset{
        border: transparent !important;
        box-shadow: 1px 1px 5px ${({theme}) => theme.inputBoxShadowColor}; 
    }

    ::placeholder,
    .search-icon,
    input {
        color: ${({theme}) => theme.text};
    }
`;

export {
    InputTypeSearch
}