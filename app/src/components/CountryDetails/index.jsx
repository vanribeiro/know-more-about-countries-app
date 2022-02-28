import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCountriesBordersName } from "../../service/api";
import { Error, Loader } from "../MessageStatus";
import {
  FlexContainer,
  HeaderSection,
  Strong,
  Img,
  H2,
  Button,
  Figure,
  CountryInfoSection,
  Content,
  FooterSection,
  BorderCountriesContainer,
  BorderCountriesText,
  Text,
} from "./style";

const CountryDetails = ({ countryInfo }) => {
  const [countryBorderNames, setCountryBorderNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const countriesBorderAcronomys = countryInfo[0].borders;
    fetchCountriesBordersName(
      countriesBorderAcronomys,
      setCountryBorderNames,
      setError,
      setIsLoading
    );

    document.title = countryInfo[0].name.common;

    return () => controller.abort();
  }, [countryInfo]);

  const handleClick = () => window.scrollTo(0, 0);

  if (error) {
    return <Error error={error.name} />;
  } else if (isLoading) {
    return <Loader />;
  } else {
    return (
      <FlexContainer>
        <Figure>
          <Img
            src={`
                  ${
                    countryInfo[0].flags.svg !== undefined
                      ? countryInfo[0].flags.svg
                      : countryInfo[0].flags.png !== undefined
                      ? countryInfo[0].flags.png
                      : "Not Specified"
                  }
                `}
            alt={`${
              countryInfo[0].name.common !== undefined
                ? countryInfo[0].name.common
                : "Not Specified"
            }
              `}
          />
        </Figure>
        <CountryInfoSection>
          <HeaderSection>
            <H2>
              {countryInfo[0].name.common !== undefined
                ? countryInfo[0].name.common
                : "Not Specified"}
            </H2>
          </HeaderSection>
          <Content>
            <Text>
              <Strong>Native Name: </Strong>
              {countryInfo[0].name.nativeName !== undefined
                ? Object.keys(countryInfo[0].name.nativeName)
                    .map((name) => {
                      return countryInfo[0].name.nativeName[`${name}`].official;
                    })
                    .join(", ")
                : "Not Specified"}
            </Text>
            <Text>
              <Strong>Population: </Strong>
              {countryInfo[0].population !== undefined
                ? countryInfo[0].population.toLocaleString("en-us")
                : "Not Specified"}
            </Text>
            <Text>
              <Strong>Region: </Strong>
              {countryInfo[0].region !== undefined
                ? countryInfo[0].region
                : "Not Specified"}
            </Text>
            <Text>
              <Strong>Sub Region: </Strong>
              {countryInfo[0].subregion !== undefined
                ? countryInfo[0].subregion
                : "Not Specified"}
            </Text>
            <Text>
              <Strong>Capital: </Strong>
              {countryInfo[0].capital !== undefined
                ? countryInfo[0].capital
                : "Not Specified"}
            </Text>
            <Text>
              <Strong>Top Level Domain: </Strong>
              {countryInfo[0].tld !== undefined
                ? countryInfo[0].tld["0"]
                : "Not Specified"}
            </Text>
            <Text>
              <Strong>Currencies: </Strong>
              {countryInfo[0].currencies !== undefined
                ? Object.keys(countryInfo[0].currencies)
                    .map((currency) => {
                      return countryInfo[0].currencies[`${currency}`].name;
                    })
                    .join(",")
                : "Not Specified"}
            </Text>
            <Text>
              <Strong>Languages: </Strong>
              {countryInfo[0].languages !== undefined ||
              countryInfo[0].languages !== ""
                ? Object.keys(countryInfo[0].languages)
                    .map((language) => {
                      return countryInfo[0].languages[`${language}`];
                    })
                    .join(", ")
                : "Not Specified"}
            </Text>
          </Content>
          {countryInfo[0].borders === undefined ||
          countryInfo[0].borders.lenght === 0 ? (
            <></>
          ) : (
            <FooterSection>
              <BorderCountriesText>Border Countries: </BorderCountriesText>
              <BorderCountriesContainer>
                {countryBorderNames.map((border, index) => {
                  return (
                    <Link key={index} to={`/country/${border.name.common}`}>
                      <Button onClick={handleClick}>
                        {border.name.common}
                      </Button>
                    </Link>
                  );
                })}
              </BorderCountriesContainer>
            </FooterSection>
          )}
        </CountryInfoSection>
      </FlexContainer>
    );
  }
};

export default CountryDetails;
