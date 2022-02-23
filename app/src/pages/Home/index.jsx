import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Filters from "../../components/Filters";
import CountryCard from "../../components/CountryCard";
import { useEffect, useState, useContext } from "react";
import { urlBase } from "../../service/api";
import { Link } from "react-router-dom";
import { Error, Loader } from "../../components/MessageStatus";
import SearchContext from "../../contexts/SearchContext";

const Main = styled.main`
  width: 100%;
  margin-bottom: 30px;
`;

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

const Home = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const search = useContext(SearchContext);

  useEffect(() => {
    const getCardsInfo = async () => {
      await fetch(`${urlBase}/all?fields=flags,name,population,region,capital,cca3`)
        .then((response) => response.json())
        .then(
          (info) => {
            setCardInfo(info);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    getCardsInfo();

  }, []);
  
  if(error){
    return (
      <>
        <Header />
        <Main>
          <Container>
            <Error error={error} />
          </Container>
        </Main>
      </>
    );
  } else if(!isLoaded){
    return (
      <>
        <Header />
        <Main>
          <Container>
            <Loader />
          </Container>
        </Main>
      </>
    );
  } else{

    return (
      <>
        <Header />
        <Main>
          <p>{search}</p>
          <Container>
            <Filters />
            <CountryCardsSection>
              {cardInfo.map((info, id) => {
                    return (
                      <Link
                        key={id}
                        to={`/${info.name.common}`}
                      >
                        <CountryCard info={info} />
                      </Link>
                    );
              })}
            </CountryCardsSection>
          </Container>
        </Main>
      </>
    );
  }

};

export default Home;
