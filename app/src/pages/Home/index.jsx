import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Filters from "../../components/Filters";
import CountryCard from "../../components/CountryCard";
import { useEffect, useState } from "react";
import { urlBase } from "../../service/api";
import { Link } from "@mui/material";

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

  useEffect(() => {
    getCardsInfo();
  }, []);

  const getCardsInfo = async () => {
    await fetch(`${urlBase}/all`)
      .then((response) => response.json())
      .then((info) => setCardInfo(info));
  };

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Filters />
          <CountryCardsSection>
            {cardInfo.map((info, id) => {
            //   console.log();
              return (
                <Link
                  key={id}
                  to={`/${info.name.common
                    .replaceAll(" ", "-")
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .toLowerCase()}`}
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
};

export default Home;
