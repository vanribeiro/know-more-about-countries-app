import { ReactComponent as ArrowLeft } from './../../assets/icons/arrow-left.svg';
import styled from "styled-components";
import { Button } from '../UI';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const TopButton = styled(Button)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`;

const BackButton = () => {
  let navigate = useNavigate();

  const handleClick = () => navigate(-1);
  
    return (
        <>
          <ButtonContainer>
            <TopButton onClick={handleClick}>
                <ArrowLeft style={{width: '18px'}}/>Back
            </TopButton>
          </ButtonContainer>
        </>
    );
}

export default BackButton;