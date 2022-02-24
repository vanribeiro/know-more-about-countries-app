import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import { urlBase } from "../../service/api";
import { Error, Loader } from "../../components/MessageStatus";
import CardList from "../../components/CardList";

const Main = styled.main`
  width: 100%;
  margin-bottom: 30px;
`;

const Home = ({toggleTheme}) => {
  const [cardsInfo, setCardInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const getCardsInfo = () => {
      const url = `${urlBase}/all?fields=flags,name,population,region,capital,cca3`
      fetch(url, { signal: controller.signal })
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
        <Header toggleTheme={toggleTheme}/>
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
        <Header toggleTheme={toggleTheme}/>
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
        <Header toggleTheme={toggleTheme}/>
        <Main>
          <Container>
              <CardList cardsInfo={cardsInfo}/>
          </Container>
        </Main>
      </>
    );
  }

};

export default Home;
