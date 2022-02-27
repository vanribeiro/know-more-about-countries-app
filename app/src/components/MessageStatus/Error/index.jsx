import styled from "styled-components";
import { Message } from "../../UI";

const ErrorMessage = styled(Message)`
    color: ${({theme}) => theme.errorMessageColor};
    
    strong, p{
        font-size: 1.125em;
    }
`;

const Error = ({error}) =>{
    return (
        <>
            <ErrorMessage>
                <p>
                    <strong>Error:</strong> {error.message}
                </p>
            </ErrorMessage>
        </>
    )
}

export default Error;