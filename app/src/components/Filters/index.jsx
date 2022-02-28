import { SearchInput, SelectInput } from "./../Form";
import { FlexContainer, BoxInput, BoxSelect } from "./style";

const Filters = ({ onSearchSubmit, setClearInput, clearInput }) => {
  return (
    <>
      <FlexContainer>
        <BoxInput>
          <SearchInput
            setClearInput={setClearInput}
            onSearchSubmit={onSearchSubmit}
            clearInput={clearInput}
          />
        </BoxInput>
        <BoxSelect>
          <SelectInput />
        </BoxSelect>
      </FlexContainer>
    </>
  );
};

export default Filters;
