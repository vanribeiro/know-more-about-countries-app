import styled from "styled-components";
import {lightMode} from './variables';

const Main = styled.main`
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 24px;
  color: ${ lightMode.textColor };
  `;

const Strong = styled.strong`
  font-weight: 600;
  color: ${ lightMode.textColor };
  `;

const P = styled.p`
  letter-spacing: 0.3px;
  line-height: 1.5;
  color: ${ lightMode.textColor };
`;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  `;

const Button = styled.button`
    color: ${ lightMode.textColor };
    padding: 8px 16px;
    background-color: transparent;
    border: 1px solid transparent;
    box-shadow: 1px 1px 5px #cacaca;
    border-radius: 4px;
    cursor: pointer;
    text-transform: initial;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`;

export { H2, Strong, P, Img, Main, Button, Message};
