import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Button from "./button";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
};

const Wrapper = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0px;
  padding: 50px 100px;
  border-radius: 30px;
  @media (max-width: 960px) {
    padding: 25px 25px;
    width: 95%;
  }
`;
const Title = styled.h3`
  text-transform: none;
  letter-spacing: 0.5px;
  margin-bottom: 25px;
`;
const Content = styled.div``;

const RoundCard = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      {props.titleText && <Title>{props.titleText}</Title>}
      {props.children && <Content>{props.children}</Content>}
      {props.buttonText && (
        <Button url={props.buttonUrl} buttonText={props.buttonText} />
      )}
    </Wrapper>
  );
};

export default RoundCard;
