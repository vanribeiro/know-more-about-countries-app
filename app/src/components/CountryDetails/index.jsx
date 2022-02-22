import styled from "styled-components";
import { P, Strong, Img, H2, Button } from "../UI";
import { Link } from "react-router-dom";
import { lightMode } from "../UI/variables";

const FlexContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 992px) {
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
    width: 80%;
  }
`;

const CountryInfoSection = styled.section`
  width: 50%;
  @media screen and (max-width: 992px) {
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
  color: ${lightMode.textColor};
`;

const Text = styled(P)`
    line-height: 1.8;
`;

const CountryDetails = ({ countryInfo }) => {
  // const [ borderCountries, setBorderCountries ] = useState([]);
  
  // useEffect(() => {
  //   const arr = [];
  //   const borderAcronyms = countryInfo[0].borders.map(borderCountry => borderCountry.toLowerCase());
  //   borderAcronyms.map(async border => {
  //     return await fetch(`https://restcountries.com/v3.1/name/${border}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       arr.push(data[0].name.common)
  //       // console.log(arr)
  //       setBorderCountries(arr);
  //     });
  //   })
  // }, [countryInfo])

  return (
    <FlexContainer>
      <Figure>
        <Img
          src={`${countryInfo[0].flags.svg}`}
          alt={`${countryInfo[0].name.common}`}
        />
      </Figure>
      <CountryInfoSection>
        <HeaderSection>
          <H2>{countryInfo[0].name.common}</H2>
        </HeaderSection>
        <Content>
          <Text>
            <Strong>Native Name: </Strong>
            {Object.keys(countryInfo[0].name.nativeName)
              .map((name) => {
                return countryInfo[0].name.nativeName[`${name}`].official;
              })
              .join(", ")}
          </Text>
          <Text>
            <Strong>Population: </Strong>
            {countryInfo[0].population.toLocaleString("en-us")}
          </Text>
          <Text>
            <Strong>Region: </Strong>
            {countryInfo[0].region}
          </Text>
          <Text>
            <Strong>Sub Region: </Strong>
            {countryInfo[0].subregion}
          </Text>
          <Text>
            <Strong>Capital: </Strong>
            {countryInfo[0].capital}
          </Text>
          <Text>
            <Strong>Top Level Domain: </Strong>
            {countryInfo[0].tld["0"]}
          </Text>
          <Text>
            <Strong>Currencies: </Strong>
            {Object.keys(countryInfo[0].currencies)
              .map((currency) => {
                return countryInfo[0].currencies[`${currency}`].name;
              })
              .join(",")}
          </Text>

          <Text>
            <Strong>Languages: </Strong>
            {countryInfo[0].languages.por}
            {Object.keys(countryInfo[0].languages)
              .map((language) => {
                return countryInfo[0].languages[`${language}`];
              })
              .join(", ")}
          </Text>
        </Content>
        {console.log(countryInfo[0].borders)}
        {
          countryInfo[0].borders 
          ? <FooterSection>
              <BorderCountriesText>Border Countries: </BorderCountriesText>
              <BorderCountriesContainer>
                {countryInfo[0].borders.map((border, index) => {
                  return (
                    <Link key={index} to={`/${border.toLowerCase()}`}>
                      <Button>{border}</Button>
                    </Link>
                  );
                })}
              </BorderCountriesContainer>
            </FooterSection>
          : <></>
        }
      </CountryInfoSection>
    </FlexContainer>
  );
};

export default CountryDetails;
