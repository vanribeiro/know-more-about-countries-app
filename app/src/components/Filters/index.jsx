import styled from "styled-components";
import { SearchInput, SelectInput } from "./../Form";

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    @media screen and (max-width:767px){
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }

    @media screen and (min-width:768px){
        width: 100%;
    }
`;

const BoxInput = styled.div`
    width: 50%;

    @media screen and (max-width:767px){
        width: 100%;
    }
`;

const BoxSelect = styled.div`
    width: 30%;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`;

const Filters = () => {  
    return (
        <>
            <FlexContainer>
                <BoxInput>
                    <SearchInput />
                </BoxInput>
                <BoxSelect>
                    <SelectInput />
                </BoxSelect>
            </FlexContainer>
        </>
    );
};

export default Filters;
