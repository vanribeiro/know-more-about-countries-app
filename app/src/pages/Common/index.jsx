import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import { Error, Loader } from "../../components/MessageStatus";
import CardList from "../../components/CardList";
import { fetchListCountries } from "../../service/api";

const Main = styled.main`
  width: 100%;
  margin-bottom: 30px;
`;

const Common = ({toggleTheme, url, titlePage}) => {
  const [info, setInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const controller = new AbortController();
    fetchListCountries(url, setError, setInfo, setIsLoaded);
    document.title = titlePage;
    
    return () => {
      controller.abort();
      setTimeout(() => controller.abort(), 5000);
    };
    
  }, [titlePage, url]);

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
              <CardList cardsInfo={info}/>
          </Container>
        </Main>
      </>
    );
  }

};

export default Common;
