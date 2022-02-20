import styled from 'styled-components';
import { lightMode } from '../UI/variables';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwitcherTheme from '../SwitcherTheme';
import Container from '../Container';

const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 8px ${lightMode.boxShadowColor};
    background-color: ${lightMode.backgroundColor};
    height: 80px;
`;

const Title = styled.h1`
    color: ${lightMode.textColor};
    font-size: 1.142857142857143rem;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderElement>
            <Container>
                <FlexContainer>
                    <Title>Where in the world?</Title>
                    <div>
                        <SwitcherTheme>
                            <FontAwesomeIcon icon={faMoon} />
                            Dark Mode 
                        </SwitcherTheme>
                    </div>
                </FlexContainer>
            </Container>
        </HeaderElement>
    )
}

export default Header;