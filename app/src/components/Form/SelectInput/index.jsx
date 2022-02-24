import { MenuItem, Select } from "@mui/material";
import styled from 'styled-components';
import { useState } from "react";

const SelectCustomized = styled(Select)`

    width: 100%;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
    position: relative;
    background-color: ${({theme}) => theme.inputBackgroundColor};
    border: 1px solid transparent;
    box-shadow: 1px 1px 5px ${({theme}) => theme.inputBoxShadowColor};

    & > div {
      background-color: ${({theme}) => theme.inputBackgroundColor};
    }

    & > svg{
      fill: ${({theme}) => theme.text};
    }

    #select-filter{
      color: ${({theme}) => theme.text};
    }

`;

const Option = styled(MenuItem)`
  color: ${({theme}) => theme.text};
`;

const SelectInput = () => {
    const [continent, setContinent] = useState('');

    const handleChange = (event) => {
      setContinent(event.target.value);
    };

    return(
        <>
          <SelectCustomized
              id="select-filter"
              onChange={handleChange}
              value={continent}
              displayEmpty
              placeholder="Find By Region"
              variant="outlined"
          >
            <Option value="" style={{display:'none'}}>Find By Region</Option>
            <Option value="africa">Africa</Option>
            <Option value="america">America</Option>
            <Option value="asia">Asia</Option>
            <Option value="europe">Europe</Option>
            <Option value="oceania">Oceania</Option>
          </SelectCustomized>
        </>
    );
}

export default SelectInput;