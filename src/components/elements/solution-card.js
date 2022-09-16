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
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  padding: 25px 50px;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
`;

const Subtitle = styled.h3`
  text-transform: none;
  letter-spacing: 0.4px;
  font-weight: 700;
`;
const Content = styled.p`
  font-size: 1em;
  line-height: 1.2em;
`;

const SolutionCard = (props) => {
  return (
    <Wrapper
      backgroundColor={props.backgroundColor}
      backgroundImage={props.backgroundImage}
    >
      <GlobalStyle />
      <Subtitle>{props.subtitleText}</Subtitle>
      <Content>{props.children}</Content>
      {props.buttonText && (
        <Button url={props.buttonUrl} buttonText={props.buttonText}></Button>
      )}
    </Wrapper>
  );
};

export default SolutionCard;
