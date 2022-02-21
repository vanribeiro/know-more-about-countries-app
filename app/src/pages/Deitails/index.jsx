import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { urlBase } from "../../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Main, Img, P, H2, Strong, Button } from './../../components/UI';

const FlexContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 992px){
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`;

const BorderCountriesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
`;

const BorderCountriesText = styled(P)`
  white-space: nowrap;
  width: 134px;
  font-weight: 600;
`;

const Figure = styled.figure`
  width: 50%;

  @media screen and (max-width: 992px){
    width: 80%;
  }
`;

const CountryInfoSection = styled.section`
  width: 50%;
  @media screen and (max-width: 992px){
    width: 80%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const BackButton = styled.div`
  width: 100%;
`;

const Details = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = () =>{
    const url = `${urlBase}/name/usa`;
    fetch(url)
      .then((response) => response.json())
      .then(
        (info) => {
          setCountryInfo(info);
          setIsLoaded(true);
        }, (error) => {
          setIsLoaded(true);
          setError(error);
        });
  }

  useEffect(fetchAPI, []);

  if(error){
    return (
      <>
        <Header />
        <Main>
          <Container>
            <Message>Error: {error.message}</Message>
          </Container>
        </Main>
      </>
    )
  } else if(!isLoaded){
    return (
      <>
        <Header />
        <Main>
          <Container>
            <Message> Loading... </Message>
          </Container>
        </Main>
      </>
    )
  } 
  else if(isLoaded){
    return (
      <>
        <Header />
        <Main>
          <Container>
            <BackButton>
              <Button>Back</Button>
            </BackButton>
            <FlexContainer>
              <Figure>
                <Img src={`${countryInfo[0].flags.svg}`} alt={`${countryInfo[0].name.common}`}/>
              </Figure>
              <CountryInfoSection>
                <header>
                  <H2>{countryInfo[0].name.common}</H2>
                </header>
                <Content>
                  <P>
                    <Strong>Native Name: </Strong>
                      {Object.keys(countryInfo[0].name.nativeName).map(name => {
                        return countryInfo[0].name.nativeName[`${name}`].official
                      }).join(', ')}
                  </P>
                  <P>
                    <Strong>Population: </Strong>
                      {countryInfo[0].population.toLocaleString('en-us')}
                  </P>
                  <P>
                    <Strong>Region: </Strong>
                      {countryInfo[0].region}
                  </P>
                  <P>
                    <Strong>Sub Region: </Strong>
                      {countryInfo[0].subregion}
                  </P>
                  <P>
                    <Strong>Capital: </Strong>
                      {countryInfo[0].capital}
                  </P>
                  <P>
                    <Strong>Top Level Domain: </Strong>
                      {countryInfo[0].tld["0"]}
                  </P>
                  <P>
                    <Strong>Currencies: </Strong>
                      {Object.keys(countryInfo[0].currencies).map(currency => {
                        return countryInfo[0].currencies[`${currency}`].name
                      }).join(',')}
                  </P>
                  
                  <P>
                    <Strong>Languages: </Strong>
                      {countryInfo[0].languages.por}
                      {Object.keys(countryInfo[0].languages).map(language => {
                        return countryInfo[0].languages[`${language}`]
                      }).join(', ')}
                  </P>
                </Content>
                <FooterSection>
                  <BorderCountriesText>Border Countries: </BorderCountriesText>
                  <BorderCountriesContainer>
                    { countryInfo[0].borders.map((border, index) => {
                        return (
                          <Link key={index} to={`/${border.toLowerCase()}`}>
                            <Button>{border}</Button>
                          </Link>
                        )
                      })
                    }
                  </BorderCountriesContainer>
                </FooterSection>
              </CountryInfoSection>
            </FlexContainer>
          </Container>
        </Main>
      </>
    );
  }
};

export default Details;
