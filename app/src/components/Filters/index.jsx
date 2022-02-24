import styled from "styled-components";
import { SearchInput, SelectInput } from "./../Form";

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    width: 100%;


    @media screen and (max-width:767px){
        flex-direction: column;
        gap: 10px;
    }

`;

const BoxInput = styled.div`
    width: 50%;

    @media screen and (max-width:767px){
        width: 100%;
    }
`;

const BoxSelect = styled.div`
    width: 48%;

    @media screen and (max-width: 767px){
        width: 100%;
    }

    @media screen and (min-width: 768px){
        display: flex;
        justify-content: flex-end;
    }
`;

const Filters = ({onSearchSubmit}) => {

    return (
        <>
            <FlexContainer>
                <BoxInput>
                    <SearchInput onSubmit={onSearchSubmit}/>
                </BoxInput>
                    <BoxSelect>
                        <SelectInput />
                    </BoxSelect>
            </FlexContainer>
        </>
    );
};

export default Filters;
