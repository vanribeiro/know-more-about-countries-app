import Filters from "../../components/Filters";
import CountryCard from "../../components/CountryCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NotFoundCountry } from "../MessageStatus";
import { CountryCardsSection } from './style';

const CardList = ({ cardsInfo }) => {
  const [nameSearched, setNameSearched] = useState("");
  const [clearInput, setClearInput] = useState(false);

  const onSearchSubmit = (text) => text !== "" ? setNameSearched(text) : setNameSearched("");

  const countrySearch = (cardsInfo) => {
    return cardsInfo.filter((cardInfo) => {
      if (cardInfo.name.common.includes(nameSearched)) {
        return cardInfo.name.common.includes(nameSearched);
      } else if (clearInput) {
        return cardsInfo;
      }
      return "";
    });
  };

  return (
    <>
      <Filters
        onSearchSubmit={onSearchSubmit}
        setClearInput={setClearInput}
        clearInput={clearInput}
      />
      <>
        {countrySearch(cardsInfo).length === 0 ? <NotFoundCountry /> : ""}
        <CountryCardsSection>
          {countrySearch(cardsInfo).map((info, id) => {
            return (
              <Link
                key={id}
                to={`/country/${info.name.common
                  .replaceAll(/\s/ig, "%20")
                  .replaceAll(/\(/ig, "%28")
                  .replaceAll(/\)/ig, "%29")
                  .toLowerCase()}`}
              >
                <CountryCard info={info} />
              </Link>
            );
          })}
        </CountryCardsSection>
      </>
    </>
  );
};

export default CardList;
