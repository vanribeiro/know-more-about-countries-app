import Header from "../../components/Header";
import Container from "../../components/Container";
import { urlBase } from "../../service/api";
import { useEffect, useState } from "react";
import { Main } from "./../../components/UI";
import CountryDetails from "../../components/CountryDetails";
import BackButton from "./../../components/BackButton";
import { Loader, Error } from "./../../components/MessageStatus";
import { useParams } from "react-router-dom";

const Details = ({toggleTheme}) => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams();
  
  useEffect(() => {
    const url = `${urlBase}/name/${id}?fullText=true`;
    const controller = new AbortController();
    let isActive = true;
        
    const timer = setTimeout(async ()=> {
       await fetch(url, { signal: controller.signal })
        .then((response) => response.json())
        .then(
          (info) => { if(isActive) setCountryInfo(info) },
          (error) => setError(error)
        );
      
      setIsLoading(false);
    }, 1000);
  
    return () => {
      isActive = false;
      controller.abort();
      clearTimeout(timer);
    };
  }, [id, countryInfo]);

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Main>
        <Container>
          {error && <Error error={error}/>}
          {isLoading && <Loader />}
          {!isLoading && 
            <>
              <BackButton />
              <CountryDetails countryInfo={countryInfo} />
            </>
          }
        </Container>
      </Main>
    </>
  );
};

export default Details;
