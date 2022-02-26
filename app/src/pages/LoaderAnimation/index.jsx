import Header from "../../components/Header";
import { Loader } from "../../components/MessageStatus";

const LoaderAnimation = ({toggleTheme}) => {
    return (
        <>
            <Header toggleTheme={toggleTheme}/>
            <Loader />
        </>
    );
}

export default LoaderAnimation;