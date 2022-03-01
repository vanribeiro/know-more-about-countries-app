import Header from "../../components/Header";
import Container from "../../components/Container";
import { fetchCountryDetails } from "../../service/api";
import { useEffect, useState } from "react";
import { Main } from "./../../components/UI";
import CountryDetails from "../../components/CountryDetails";
import BackButton from "./../../components/BackButton";
import { Loader, Error } from "./../../components/MessageStatus";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const Details = ({ toggleTheme }) => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    
    const controller = new AbortController();

    let timer = setTimeout(() => {
      fetchCountryDetails(id, setCountryInfo, setError, setIsLoading);
    }, 2000);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };

  }, [id]);

  if (error) {
    return (
      <>
        <Header toggleTheme={toggleTheme} />
        <Main>
          <Container>
            <Error error={error} />
          </Container>
        </Main>
        <Footer />
      </>
    );
  } else if (isLoading) {
    return (
      <>
        <Header toggleTheme={toggleTheme} />
        <Main>
          <Container>
            <Loader />
          </Container>
        </Main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header toggleTheme={toggleTheme} />
        <Main>
          <Container>
            <>
              <BackButton />
              <CountryDetails countryInfo={countryInfo} />
            </>
          </Container>
        </Main>
        <Footer />
      </>
    );
  }
};

export default Details;
