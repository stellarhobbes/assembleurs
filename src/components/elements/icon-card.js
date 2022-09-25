import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import ReactMarkdown from "react-markdown";

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
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  position: absolute;
  top: -25px;
  width: 50px;
`;

const Subtitle = styled.h3`
  text-transform: none;
  font-size: 1.6em;
  letter-spacing: 0.3px;
  font-weight: 700;
`;

const Accroche = styled.p`
  font-size: 1em;
  font-weight: 600;
`

const Content = styled(ReactMarkdown)`
  font-size: 0.9em;
  line-height: 1.2em;
`;

const IconCard = (props) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor} backgroundImage={props.backgroundImage}>
      <GlobalStyle />
      <Icon src={props.imageUrl} alt={props.imageAlt}></Icon>
      {props.subtitleText && <Subtitle>{props.subtitleText}</Subtitle>}
      {props.accrocheText && <Accroche>{props.accrocheText}</Accroche>}
      <Content>{props.children}</Content>
      {props.buttonText && <Button url={props.buttonUrl} buttonText={props.buttonText}></Button>}
    </Wrapper>
  );
};

export default IconCard;
