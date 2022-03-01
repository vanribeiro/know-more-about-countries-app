import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Message, H2, Main } from "../../components/UI";

const Title = styled(H2)`
    font-size: 2em;
`;

const MessageContainer = styled(Message)`
    height: calc(100vh - 225px);
    flex-direction: column;
`;

const PageNotFound = ({toggleTheme}) =>{
    return (
        <>
        <Header toggleTheme={toggleTheme}/>
        <Main>
          <Container>
            <BackButton />
            <MessageContainer>
                <Title>
                    Page Not Found
                </Title>
                <Link to="/" >Home</Link>
            </MessageContainer>

          </Container>
        </Main>
        <Footer />
        </>
    )
}

export default PageNotFound;