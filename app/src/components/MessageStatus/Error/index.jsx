import { Message } from "../../UI";

const Error = ({error}) =>{
    return (
        <>
            <Message>Error: {error.message}</Message>
        </>
    )
}

export default Error;