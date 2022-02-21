import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';

const Cardsx = {
    maxWidth: '100%', 
    boxShadow: '1px 1px 5px #e2e2e2'
}

const CardContentsx = {
    padding: '28px 24px'
}

const TitleCard = styled.h2`
    font-size: 16px;
    margin-bottom: 10px;
`;
const Strong = styled.strong`
    font-weight: 600;
`;

const P = styled.p`
    letter-spacing: 0.3px;
    line-height: 1.5;
`;

const CountryCard = ({info}) => {
    return(
        <>
            <Card sx={Cardsx}>
                <CardMedia 
                    component="img"
                    alt={`${info.name.common} Flag`}
                    height="180"
                    image={`${info.flags.png}`}
                />
                <CardContent sx={CardContentsx}>
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
                        {info.capital}
                    </P>
                    
                </CardContent>
            </Card>
        </>
    )
}

export default CountryCard;