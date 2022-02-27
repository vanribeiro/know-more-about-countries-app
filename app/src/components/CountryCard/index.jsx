import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import { Strong, P } from '../UI';

const CardContainer = styled(Card)`
    max-width: 100%;
    box-shadow: 1px 1px 5px ${({theme}) => theme.boxShadowColor};
    background-color: ${({theme}) => theme.cardBackgroundColor};
`;

const CardImage = styled(CardMedia)`

    @media screen and (max-width: 640px){
        height: 180px;
    }

    @media screen and (min-width: 641px){
        height: 160px;
    }

    @media screen and (min-width: 768px){
        height: 120px;
    }

    @media screen and (min-width: 892px){
        height: 150px;
    }

    @media screen and (min-width: 992px){
        height: 144px;
    }

    @media screen and (min-width: 1200px){
        height: 150px;
    }

    @media screen and (min-width: 1400px){
        height: 165px;
    }

`;

const TitleCard = styled.h2`
    font-size: 16px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
`;

const CardContentContainer = styled(CardContent)`
    background-color: ${({theme}) => theme.cardContentBackgroundColor};
    padding: 24px 24px 36px !important;
`;

const CountryCard = ({info}) => {

    return(
        <>
            <CardContainer sx={{backgroundColor: "transparent"}}>
                <CardImage 
                    component="img"
                    alt={`${info.name.common} Flag`}
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
                            info.capital === undefined || info.capital.length === 0
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