import styled from "styled-components";

const Main = styled.main`
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 24px;
`;

const Strong = styled.strong`
  font-weight: 600;
`;

const P = styled.p`
  letter-spacing: 0.3px;
  line-height: 1.5;
`;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: transparent;
    border: 1px solid transparent;
    box-shadow: 1px 1px 5px #cacaca;
    border-radius: 4px;
    cursor: pointer;
    text-transform: initial;
`;

export { H2, Strong, P, Img, Main, Button};
