import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import { Error, Loader } from "../../components/MessageStatus";
import CardList from "../../components/CardList";
import { fetchListCountries } from "../../service/api";
import Footer from "../../components/Footer";

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
        <Footer />
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
        <Footer />
      </>
    );
  } else{
    return (
      <>
        <Header toggleTheme={toggleTheme}/>
        <Main>
          <Container>
              <CardList className="card-list" cardsInfo={info}/>
          </Container>
        </Main>
        <Footer />
      </>
    );
  }

};

export default Common;
