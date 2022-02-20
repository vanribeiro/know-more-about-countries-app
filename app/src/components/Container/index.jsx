import styled from "styled-components";

const Container = styled.div`
    margin: auto;

    @media screen and (max-width: 1199px){
        width: 90%;
    }

    @media screen and (min-width: 1200px){
        max-width: 1100px;
        width: 100%;
    }

    @media screen and (min-width: 1300px){
        max-width: 1280px;
        width: 100%;
    }

    @media screen and (min-width: 1440px){
        max-width: 1400px;
        width: 100%;
    }
`;

export default Container;