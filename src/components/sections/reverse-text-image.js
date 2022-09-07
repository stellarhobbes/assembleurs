import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import Subtitle from "../elements/subtitle";

import EyeImage from "../../images/icons/redeye-assembleurs.png";
import ArrowImage from "../../images/icons/arrow-down-assembleurs.png";

import { motion } from "framer-motion";

const Main = styled.section``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3em;
  grid-auto-rows: 1fr;
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

const Text = styled.p`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 1.8em;
  color: #252d80;
`;

const ScrollImages = styled.div`
  width: 40px;
  position: absolute;
  right: 50px;
  top: 600px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const ReverseTextImage = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <ImageColumn>
          <ImageWrapper src={props.imageUrl} alt=""></ImageWrapper>
        </ImageColumn>
        <TextColumn>
          <Subtitle
            bulletColor={props.bulletColor}
            titleColor={props.titleColor}
            subtitleText={props.title}
          />
          <Text>{props.text}</Text>
          <ScrollImages>
            <motion.div
              transition={bounceTransition}
              animate={{ y: ["10%", "-10%"] }}
            >
              <img src={ArrowImage} alt="" style={{ width: "40px" }}></img>
              <img src={EyeImage} alt="" style={{ width: "40px" }}></img>
            </motion.div>
          </ScrollImages>
        </TextColumn>
      </Wrapper>
    </Main>
  );
};

export default ReverseTextImage;
