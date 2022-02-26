import { Message } from "../../UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
    0%{ 
        transform: translateY(0px);
        opacity: 1;
    }

    25%{ 
        transform: translateY(-20px);
        opacity: 0.75;
    }

    50%{ 
        transform: translateY(0px); 
        opacity: 0.1;
    }

    75%{ 
        transform: translateY(20px); 
        opacity: 0.75;
    }

    100%{ 
        transform: translateY(0px); 
        opacity: 1;
    }
`;

const AnimationArea = styled.main`
    width: 50%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px){
        width: 25%;
    }

    @media screen and (min-width: 1200px){
        width: 20%;
    }

    svg{
        font-size: 50px;
        color: ${({theme}) => theme.text};
    }

    .globe-icon--01{
        animation: ${bounce} 1s 0.5s linear infinite;
    }

    .globe-icon--02{
        animation: ${bounce} 1s 0.3s linear infinite;
    }

    .globe-icon--03{
        animation: ${bounce} 1s 0.1s linear infinite;
    }


`;

const Loader = () =>{
    return (
        <>
            <Message>
                <AnimationArea>
                    <FontAwesomeIcon className="globe-icon globe-icon--01" icon={faGlobe} />
                    <FontAwesomeIcon className="globe-icon globe-icon--02" icon={faGlobe} />
                    <FontAwesomeIcon className="globe-icon globe-icon--03" icon={faGlobe} />
                </AnimationArea>
            </Message>
        </>
    )
}

export default Loader;