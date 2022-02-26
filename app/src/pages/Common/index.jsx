import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import { Error, Loader } from "../../components/MessageStatus";
import CardList from "../../components/CardList";

const Main = styled.main`
  width: 100%;
  margin-bottom: 30px;
`;

const Common = ({toggleTheme, id, url, titlePage}) => {
  const [info, setInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let isActive = true;

    const getRegionInfo = async () => {
      await fetch(url, { signal: controller.signal })
        .then((response) => response.json())
        .then(
          (info) => {
            if(isActive) setInfo(info);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    getRegionInfo();
    document.title = titlePage;
    
    return () => {
      isActive = false
    };
  }, [id, info, url, titlePage]);

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
