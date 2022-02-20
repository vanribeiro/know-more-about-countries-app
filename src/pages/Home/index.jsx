import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Filters from '../../components/Filters';

const Main = styled.main`
    width: 100%;
`;

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Filters />
                </Container>
            </Main>
        </>
    )
}

export default Home;