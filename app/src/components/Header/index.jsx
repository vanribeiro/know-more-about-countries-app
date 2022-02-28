import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwitcherTheme from '../SwitcherTheme';
import Container from '../Container';
import { Link } from 'react-router-dom';
import {FlexContainer, HeaderElement, Title} from './style';

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