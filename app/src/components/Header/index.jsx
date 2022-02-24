import styled from 'styled-components';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwitcherTheme from '../SwitcherTheme';
import Container from '../Container';
import { Link } from 'react-router-dom';

const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 8px ${({theme}) => theme.boxShadowColor};
    background-color: ${({theme}) => theme.headerBackground};
    height: 80px;
`;

const Title = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 1.142857142857143rem;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = ({toggleTheme}) => {
    return (
        <HeaderElement>
            <Container>
                <FlexContainer>
                    <Link to="/">
                        <Title>Where in the world?</Title>
                    </Link>
                    <div>
                        <SwitcherTheme onClick={toggleTheme}>
                            <FontAwesomeIcon className="theme-moon-icon" icon={faMoon} />
                            Dark Mode 
                        </SwitcherTheme>
                    </div>
                </FlexContainer>
            </Container>
        </HeaderElement>
    )
}

export default Header;