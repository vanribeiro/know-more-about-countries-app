import styled from 'styled-components';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Select = styled.div`
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

  @media screen and (max-width:767px){
    margin-top: 30px;
  }


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

const SelectInput = ({setSelectValue}) => {
  const [selectTitle, setSelectTitle] = useState('Find By Region: ');
  const [region, setRegion] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const toggleSelectList = () => isOpen ? setIsOpen(false) : setIsOpen(true);

  const handleItemClick = (event) => {
    setRegion(event.target.dataset.valueRegion);
    setSelectValue(event.target.dataset.valueRegion);
    setSelectTitle(event.target.dataset.valueRegion);
    toggleSelectList();
  };
  
  const handleSelectClick = () => toggleSelectList();
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return(
      <>
        <Select
            id="select-filter"
            onClick={handleSelectClick}
            selectValue={region}
        >
          <span className="select-header__text">
            {selectTitle}
            <FontAwesomeIcon 
              className="angle-icon" 
              icon={isOpen ? faAngleDown : faAngleUp} 
            />
          </span>
        </Select>

          <List style={isOpen ? {display: 'none'} : {display: 'block'}}>
            {
              regions.map((region, id) => {
                return (
                  <Link key={id} to={`/region/${region.toLowerCase()}`}>
                    <Item 
                      onClick={handleItemClick} 
                      data-value-region={`${region}`}
                    >
                        {region}
                    </Item>
                  </Link> 
                )
              })
              }
              <Link to="/">
              <Item onClick={handleItemClick} data-value-region="Home">
                  All Countries
              </Item>
            </Link> 
          </List>
      </>
  );
}

export default SelectInput;