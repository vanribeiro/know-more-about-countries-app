import styled from "styled-components";

const Main = styled.main`
  width: 100%;

  @media screen and (min-width: 768px){
    height: calc(100vh - 180px);
  }
`;

const H2 = styled.h2`
  font-size: 24px;
  color: ${({theme}) => theme.text};
`;

const Strong = styled.strong`
  font-weight: 600;
  color: ${({theme}) => theme.text};
  `;

const P = styled.p`
  letter-spacing: 0.3px;
  line-height: 1.5;
  color: ${({theme}) => theme.text};
`;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  `;

const Button = styled.button`
    color: ${({theme}) => theme.text};
    padding: 6px 14px;
    background-color: ${({theme}) => theme.buttonBackgroundColor};
    border: 1px solid transparent;
    box-shadow: 1px 1px 5px ${({theme}) => theme.boxShadowButtonColor};
    border-radius: 4px;
    cursor: pointer;
    text-transform: initial;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({theme}) => theme.text};

  @media screen and (min-width: 768px){
    height: calc(100vh - 130px);
  }
`;

export { H2, Strong, P, Img, Main, Button, Message};
