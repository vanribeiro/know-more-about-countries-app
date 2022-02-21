import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
// import { useEffect, useState } from "react";
// import { urlBase } from "../../service/api";

const Main = styled.main`
  width: 100%;
  margin-bottom: 30px;
`;

const CountrySection = styled.section`
  width: 100%;
  margin-top: 50px;
`;

const Details = () => {
//   const [cardInfo, setCardInfo] = useState([]);

//   useEffect(() => {
//     getCardsInfo();
//   }, []);

//   const getCardsInfo = async () => {
//     await fetch(`${urlBase}/all`)
//       .then((response) => response.json())
//       .then((info) => setCardInfo(info));
//   };

  return (
    <>
      <Header />
      <Main>
        <Container>
          <CountrySection>
            <h2>Details</h2>
          </CountrySection>
        </Container>
      </Main>
    </>
  );
};

export default Details;
