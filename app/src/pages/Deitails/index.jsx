import Header from "../../components/Header";
import Container from "../../components/Container";
import { urlBase } from "../../service/api";
import { useEffect, useState } from "react";
import { Main } from "./../../components/UI";
import CountryDetails from "../../components/CountryDetails";
import BackButton from "./../../components/BackButton";
import { Loader, Error } from "./../../components/MessageStatus";
import { useParams } from "react-router-dom";

const Details = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  let { id } = useParams();
  
  useEffect(() => {
    const fetchAPI = async () => {
      const url = `${urlBase}/name/${id}`;
      await fetch(url)
        .then((response) => response.json())
        .then(
          (info) => {
            setCountryInfo(info);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    fetchAPI(); 
  
  }, [id]);



  if (error) {
    return (
      <>
        <Header />
        <Main>
          <Container>
            <Error />
          </Container>
        </Main>
      </>
    );
  } else if (!isLoaded) {
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
  } else if (isLoaded) {
    return (
      <>
        <Header />
        <Main>
          <Container>
            <BackButton />
            <CountryDetails countryInfo={countryInfo} />
          </Container>
        </Main>
      </>
    );
  }
};

export default Details;
