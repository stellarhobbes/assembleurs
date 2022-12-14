import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import Subtitle from "../elements/subtitle";
import Button from "../elements/button";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
  darkblue: "#252D80",
};

const Main = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 2em;
  padding: 50px 0px 50px 0px;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const TextColumn = styled.div``;

const Htrois = styled.h3`
  text-transform: initial;
`;

const CitationColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CitationContainer = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 50%;
  padding: 30px 50px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 960px) {
    width: 80%;
  }
`;

const Icon = styled.img`
  width: 50px;
  position: absolute;
  top: -25px;
`;

const CitationText = styled.p`
  text-align: center;
  font-family: "Big Shoulders Display", cursive;
  line-height: normal;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 2.5em;
`;

const TextCitation = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <TextColumn>
          <Subtitle
            bulletColor={props.bulletColor}
            titleColor={props.titleColor}
            subtitleText={props.title}
          />
          {props.htroisText && <Htrois>{props.htroisText}</Htrois>}
          <p>{props.text}</p>
          {props.buttonURL && (
            <Button url={props.buttonURL} buttonText={props.buttonText} />
          )}
        </TextColumn>
        <CitationColumn>
          <CitationContainer>
            {props.iconUrl && <Icon src={props.iconUrl}></Icon>}
            <CitationText>{props.citationText}</CitationText>
          </CitationContainer>
        </CitationColumn>
      </Wrapper>
    </Main>
  );
};

export default TextCitation;
