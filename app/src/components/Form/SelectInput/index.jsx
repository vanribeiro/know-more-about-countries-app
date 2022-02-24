import styled from 'styled-components';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Select = styled.div`
  margin-top: 30px;
  width: 240px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
  background-color: ${({theme}) => theme.inputBackgroundColor};
  border: 1px solid transparent;
  box-shadow: 1px 1px 5px ${({theme}) => theme.inputBoxShadowColor};
  padding: 18px 24px;
  cursor: pointer;

  .select-header__text{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .select-header__text,
  .angle-icon{
    color: ${({theme}) => theme.text};
  }
    
`;

const List = styled.ul`
  background-color: ${({theme}) => theme.inputBackgroundColor};
  box-shadow: 1px 1px 5px ${({theme}) => theme.inputBoxShadowColor};
  color: ${({theme}) => theme.text};
  list-style: none;
  width: 240px;
  border-radius: 4px;
  margin-top: 4px;
  padding: 16px 0;
  position: absolute;
  z-index: 1;

  @media screen and (min-width: 767px){
    top: 188px;
  }
`;

const Item = styled.li`
  color: ${({theme}) => theme.text};
  height: 30px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-weight: 600;

  :hover{
    background-color: ${({theme}) => theme.backgroundColor};
  }
`;

const SelectInput = () => {
  const [region, setRegion] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleItemClick = (event) => {
    setRegion(event.target.dataset.valueRegion);
  };

  const handleSelectClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return(
      <>
        <Select
            id="select-filter"
            onClick={handleSelectClick}
        >
          <span className="select-header__text">
            Find By Region: {region}
            <FontAwesomeIcon 
              className="angle-icon" 
              icon={isOpen ? faAngleDown : faAngleUp} 
            />
          </span>
        </Select>
          <List style={isOpen ? {display: 'none'} : {display: 'block'}}>
            <Item onClick={handleItemClick} data-value-region="Africa">Africa</Item>
            <Item onClick={handleItemClick} data-value-region="Americas">America</Item>
            <Item onClick={handleItemClick} data-value-region="Asia">Asia</Item>
            <Item onClick={handleItemClick} data-value-region="Europe">Europe</Item>
            <Item onClick={handleItemClick} data-value-region="Oceania">Oceania</Item>
          </List>
      </>
  );
}

export default SelectInput;