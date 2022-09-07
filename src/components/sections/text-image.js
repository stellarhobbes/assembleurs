import React from "react";

import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import Button from "../elements/button";
import Subtitle from "../elements/subtitle";

import { FaArrowCircleRight } from "react-icons/fa";

const Main = styled.section``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2em;
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

const TextImage = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <TextColumn>
          <Subtitle
            bulletColor={props.bulletColor}
            titleColor={props.titleColor}
            subtitleText={props.title}
          />
          <p>{props.text}</p>
          {props.bubbleText && (
            <Bubble>
              <FaArrowCircleRight color="#00BEE6" size="20" />
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
