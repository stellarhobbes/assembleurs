import React from "react";

import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import Button from "../elements/button";
import Subtitle from "../elements/subtitle";

import { FaArrowCircleRight } from "react-icons/fa";
import Pattern from "../../images/pictures/pattern-logo.png";

const Main = styled.div`
  background-color: ${(props) =>
    props.backgroundColor === "darkblue" ? "#252d80" : "transparent"};
  background-image: url(${(props) => props.isPattern === "yes" ? {Pattern} : ""});
  background-size: cover;
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2em;
  align-items: center;
  padding: 50px 0px 50px 0px;
  @media (max-width: 960px) {
    display: initial;
  }
`;

const TextColumn = styled.div``;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.img`
  width: 100%;
`;

const Bubble = styled.p`
  display: grid;
  grid-template-columns: 1fr 10fr;
  font-size: 0.8em;
  padding-top: 30px;
  border-top: 0.2px solid #252d80;
`;

const Content = styled.p`
  color: ${(props) => (props.contentColor === "white" ? "#ffffff" : "#252d80")};
`;

const TextImage = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor} isPattern={props.isPattern} > 
      <GlobalStyle />
      <Wrapper>
        <TextColumn>
          <Subtitle
            bulletColor={props.bulletColor}
            titleColor={props.titleColor}
            subtitleText={props.title}
          />
          <Content contentColor={props.contentColor}>{props.children}</Content>
          {props.bubbleText && (
            <Bubble>
              <FaArrowCircleRight color="#252d80" size="20" />
              {props.bubbleText}
            </Bubble>
          )}
          {props.buttonText && (
            <Button url={props.buttonURL} buttonText={props.buttonText} />
          )}
        </TextColumn>
        <ImageColumn>
          <ImageWrapper src={props.imageUrl} alt=""></ImageWrapper>
        </ImageColumn>
      </Wrapper>
    </Main>
  );
};

export default TextImage;
