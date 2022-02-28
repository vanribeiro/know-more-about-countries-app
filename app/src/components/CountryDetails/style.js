import styled from "styled-components";
import { P, Strong, Img, H2, Button } from "../UI";

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
  color: ${({ theme }) => theme.text};
`;

const Text = styled(P)`
  line-height: 1.8;
`;

export {
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
};
