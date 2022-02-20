import styled from "styled-components";
import { lightMode } from "../UI/variables";

const SwitcherTheme = styled.button`
    border: none;
    background-color: transparent;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: ${lightMode.textColor};
`;

export default SwitcherTheme;