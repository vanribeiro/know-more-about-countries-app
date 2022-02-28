import styled from "styled-components";

const CountryCardsSection = styled.section`
  width: 100%;
  margin-top: 50px;
  display: grid;
  row-gap: 50px;
  justify-content: space-between;

  @media screen and (max-width: 539px) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }

  @media screen and (min-width: 540px) {
    grid-template-columns: repeat(2, 48%);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 22%);
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 21%);
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, 20%);
  }
`;

export {
    CountryCardsSection
}