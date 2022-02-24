import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import { Strong, P } from '../UI';
// import { styled as muiStyled } from '@mui/system';


const CardContainer = styled(Card)`
    max-width: 100%;
    box-shadow: 1px 1px 5px ${({theme}) => theme.boxShadowColor};
    background-color: ${({theme}) => theme.cardBackgroundColor};
`;

const CardContentContainer = styled(CardContent)`
    background-color: ${({theme}) => theme.cardContentBackgroundColor};
    padding: '28px 24px';
`;

const TitleCard = styled.h2`
    font-size: 16px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
`;



const CountryCard = ({info}) => {

    return(
        <>
            <CardContainer sx={{backgroundColor: "transparent"}}>
                <CardMedia 
                    component="img"
                    alt={`${info.name.common} Flag`}
                    height="180"
                    image={`${info.flags.svg}`}
                />
                <CardContentContainer>
                    <TitleCard>{info.name.common}</TitleCard>
                    <P>
                        <Strong>Population: </Strong> 
                        {(info.population).toLocaleString('en-us')}
                    </P>
                    <P>
                        <Strong>Region: </Strong> 
                        {info.region}
                    </P>
                    <P>
                        <Strong>Capital: </Strong>
                        {
                            info.capital.length === 0 || info.capital === undefined
                            ? "Not Specified" 
                            : info.capital
                        }
                    </P>
                    
                </CardContentContainer>
            </CardContainer>
        </>
    )
}

export default CountryCard;