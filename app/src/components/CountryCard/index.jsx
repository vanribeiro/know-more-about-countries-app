import { Strong, P } from "../UI";
import {
  TitleCard,
  CardContainer,
  CardContentContainer,
  CardImage,
} from "./style";

const CountryCard = ({ info }) => {
  return (
    <>
      <CardContainer sx={{ backgroundColor: "transparent" }}>
        <CardImage
          component="img"
          alt={`${info.name.common} Flag`}
          image={`${info.flags.svg}`}
        />
        <CardContentContainer>
          <TitleCard>{info.name.common}</TitleCard>
          <P>
            <Strong>Population: </Strong>
            {info.population.toLocaleString("en-us")}
          </P>
          <P>
            <Strong>Region: </Strong>
            {info.region}
          </P>
          <P>
            <Strong>Capital: </Strong>
            {info.capital === undefined || info.capital.length === 0
              ? "Not Specified"
              : info.capital}
          </P>
        </CardContentContainer>
      </CardContainer>
    </>
  );
};

export default CountryCard;
