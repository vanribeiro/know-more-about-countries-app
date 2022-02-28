import styled from 'styled-components';

const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 8px ${({theme}) => theme.boxShadowColor};
    background-color: ${({theme}) => theme.headerBackground};
    height: 80px;
`;

const Title = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 1.142857142857143rem;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {
    HeaderElement,
    FlexContainer,
    Title
}