import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import { motion } from "framer-motion";

import Button from "../elements/button";

const Main = styled.div``;
const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  @media (max-width: 960px) {
    width: 90%;
  }
`;
const Title = styled.h2`
  margin: 20px 0px 0px 0px;
  text-align: center;
`;
const Content = styled.p`
  text-align: center;
`;

const Icon = styled.img`
  width: 50px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const Image = styled.img`
  width: 150px;
  position: absolute;
  bottom: -85px;
`;

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const SimpleSection = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        {props.iconUrl && (
          <motion.div
            transition={bounceTransition}
            animate={{ y: ["10%", "-10%"] }}
          >
            <Icon src={props.iconUrl} alt={props.iconAlt}></Icon>
          </motion.div>
        )}
        {props.titleText && <Title>{props.titleText}</Title>}
        {props.children && <Content>{props.children}</Content>}
        {props.buttonText && (
          <Button url={props.buttonUrl} buttonText={props.buttonText} />
        )}
        {props.imageUrl && (
          <Image src={props.imageUrl} alt={props.imageAlt}></Image>
        )}
      </Wrapper>
    </Main>
  );
};

export default SimpleSection;
