import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Message } from "../../UI";

const NotFoundCountryMessage = styled(Message)`
    color: ${({theme}) => theme.text};
    height: auto;
    width: 100%;
    flex-direction: column;
    margin-top: 10%;

    strong, h2,p{
        opacity: 0.6;
    }

    strong, h2{
        font-size: 2em;
    }
    
    p{
        font-size: 1.5em;
    }

    svg{
        font-size: 1em;
        margin-right: 5px;
    }
`;

const Tooltip = styled.div`
    color: ${({theme}) => theme.text};

    svg, a{
        font-size: 1em;
        margin-right: 5px;
    }

    p{
        font-size: 1.2em;
    }
`

const NotFoundCountry = () =>{
    return (
        <>
            <NotFoundCountryMessage>
                <h2>Sorry... </h2>
                <p>Country Not Found... <strong> :-/</strong></p>
                <Tooltip>
                    <p>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Try capitalizing the first country name letter and type something like <Link to='/country/Greece'>Greece</Link>, for example.
                    </p>
                </Tooltip>
            </NotFoundCountryMessage>
        </>
    )
}

export default NotFoundCountry;