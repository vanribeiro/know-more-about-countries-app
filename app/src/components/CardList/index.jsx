import styled from "styled-components";
import Filters from "../../components/Filters";
import CountryCard from "../../components/CountryCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const CountryCardsSection = styled.section`
  width: 100%;
  margin-top: 50px;
  display: grid;
  row-gap: 50px;
  justify-content: space-between;

  @media screen and (max-width: 539px) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }

  @media screen and (min-width: 540px) {
    grid-template-columns: repeat(2, 48%);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 22%);
  }
`;

const CardList = ({cardsInfo}) => {
  const [nameSearched, setNameSearched] = useState('');
  const [clearInput, setClearInput] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const onSearchSubmit = (text) => {
    if(text !== ''){
      setNameSearched(text);
    } 
  }

  const searchCountry = (cardsInfo) => {

    return cardsInfo.filter(cardInfo => {
      if(cardInfo.region === selectValue){
        return cardsInfo;
      } else if(cardInfo.name.common.includes(nameSearched)){
          return cardInfo.name.common.includes(nameSearched);
        }else{

          if(clearInput){
            return cardsInfo
          }
        }
        return '';
      }


     );
  }


  return (
    <>
      <Filters 
        onSearchSubmit={onSearchSubmit}
        setClearInput={setClearInput}
        clearInput={clearInput}
        setSelectValue={setSelectValue}
        selectValue={selectValue}
      />
      <CountryCardsSection>
            {searchCountry(cardsInfo)
              .map((info, id) => {
                  return (
                    <Link
                      key={id}
                      to={`/${info.name.common}`}
                    >
                      <CountryCard info={info} />
                    </Link>
                  );
              })
            }
      </CountryCardsSection>
    </>
  );

  

};

export default CardList;
