import styled from "styled-components";
import { P, Strong, Img, H2, Button } from "../UI";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { urlBase } from "../../service/api";

const FlexContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const HeaderSection = styled.header`
  margin-bottom: 18px;
`;

const Figure = styled.figure`
  width: 50%;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const CountryInfoSection = styled.section`
  width: 50%;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 992px) {
    grid-template-columns: 100%;
  }
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const BorderCountriesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
`;

const BorderCountriesText = styled(P)`
  white-space: nowrap;
  width: 160px;
  font-weight: 600;
  color: ${({theme}) => theme.text};
`;

const Text = styled(P)`
  line-height: 1.8;
`;

const CountryDetails = ({ countryInfo}) => {
  const [countryBorderNames, setCountryBorderNames] = useState([]);

  useEffect(() => {
    const countriesBorderAcronomys = countryInfo[0].borders;
    const controller = new AbortController();
    
    const fetchAcronomys = async () => {
      if (countriesBorderAcronomys !== undefined) {
        const url = `${urlBase}/alpha?codes=${
          countriesBorderAcronomys !== undefined
            ? countriesBorderAcronomys.join().toLowerCase()
            : countriesBorderAcronomys
        }`;

        await fetch(url, { signal: controller.signal })
          .then((response) => response.json())
          .then(
            (info) => {setCountryBorderNames(info);},
            (error) => {console.log(`Message: ${error.message}`);
            }
          );         
      }
    };

    fetchAcronomys();

  }, [countryInfo]);
  
  const handleClick = () => window.scrollTo(0,0);

  return (
    <FlexContainer>
      <Figure>
        <Img
          src={`
                ${countryInfo[0].flags.svg !== undefined
                  ? countryInfo[0].flags.svg
                  : countryInfo[0].flags.png !== undefined 
                    ? countryInfo[0].flags.png 
                    : "Not Specified"
                }
              `}
          alt={`${
            countryInfo[0].name.common !== undefined
            ? countryInfo[0].name.common
            : "Not Specified"}
            `}
        />
      </Figure>
      <CountryInfoSection>
        <HeaderSection>
          <H2>
            {
              countryInfo[0].name.common !== undefined
              ? countryInfo[0].name.common
              : "Not Specified"
            }
          </H2>
        </HeaderSection>
        <Content>
          <Text>
            <Strong>Native Name: </Strong>
            {
              countryInfo[0].name.nativeName !== undefined
              ? Object.keys(countryInfo[0].name.nativeName)
                .map((name) => {
                  return countryInfo[0].name.nativeName[`${name}`].official;
                }).join(", ")
              : "Not Specified"
            }
          </Text>
          <Text>
            <Strong>Population: </Strong>
            { 
              countryInfo[0].population !== undefined
              ? countryInfo[0].population.toLocaleString("en-us")
              : "Not Specified"
            }
          </Text>
          <Text>
            <Strong>Region: </Strong>
            { 
              countryInfo[0].region !== undefined
              ? countryInfo[0].region
              : "Not Specified"
            }
          </Text>
          <Text>
            <Strong>Sub Region: </Strong>
            { 
              countryInfo[0].subregion !== undefined
              ? countryInfo[0].subregion
              : "Not Specified"
            }
          </Text>
          <Text>
            <Strong>Capital: </Strong>
            {
              countryInfo[0].capital !== undefined
              ? countryInfo[0].capital
              : "Not Specified"
            }
          </Text>
          <Text>
            <Strong>Top Level Domain: </Strong>
            {
              countryInfo[0].tld["0"] !== undefined
              ? countryInfo[0].tld["0"]
              : "Not Specified"
            }
          </Text>
          <Text>
            <Strong>Currencies: </Strong>
            {
              countryInfo[0].currencies !== undefined 
              ? Object.keys(countryInfo[0].currencies)
                .map((currency) => {
                  return countryInfo[0].currencies[`${currency}`].name;
                }).join(",")
              : "Not Specified" 
            }
          </Text>
          <Text>
            <Strong>Languages: </Strong>
            {
              countryInfo[0].languages !== undefined ||
              countryInfo[0].languages !== "" 
              ? Object.keys(countryInfo[0].languages)
                .map((language) => {
                  return countryInfo[0].languages[`${language}`];
                }).join(", ")
              : "Not Specified" 
            }
          </Text>
        </Content>
        {
          countryInfo[0].borders === undefined ||
          countryInfo[0].borders.lenght === 0 
          ? (<></>)
          : (
              <FooterSection>
                <BorderCountriesText>Border Countries: </BorderCountriesText>
                <BorderCountriesContainer>
                  {countryBorderNames.map((border, index) => {
                    return (
                      <Link key={index} to={`/${border.name.common}`}>
                        <Button
                          onClick={handleClick}
                        >
                          {border.name.common}
                        </Button>
                      </Link>
                    );
                  })}
                </BorderCountriesContainer>
              </FooterSection>
            ) 
        }
      </CountryInfoSection>
    </FlexContainer>
  );
};

export default CountryDetails;
