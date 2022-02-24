import styled from "styled-components";

const SwitcherTheme = styled.button`
    border: none;
    background-color: transparent;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: ${({theme}) => theme.text};

    .theme-moon-icon{
        color: ${({theme}) => theme.text};
    }
`;

export default SwitcherTheme;