import styled from "styled-components";
import { Button } from '../UI';

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  @media screen and (max-width: 992px) {
    padding: 0 10px;
  }
`;

const TopButton = styled(Button)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  color: ${({theme}) => theme.text};
  box-shadow: 1px 1px 5px ${({theme}) => theme.boxShadowButtonColor};
  background-color: ${({theme}) => theme.buttonBackgroundColor};

  .arrow-left-icon{
    fill: ${({theme}) => theme.text};
  }
`;

export {
    ButtonContainer,
    TopButton
}