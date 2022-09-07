import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { motion } from "framer-motion";

import EyeImage from "../../images/icons/redeye-assembleurs.png";
import ArrowImage from "../../images/icons/arrow-down-assembleurs.png";
import Pattern from "../../images/pictures/pattern-logo.png";

const Main = styled.div`
  background-color: #252d80;
  padding: 100px 50px;
  background-image: url(${Pattern});
  background-size: cover;
  @media (max-width: 960px) {
    padding: 100px 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin: 20px 0px;
`;

const Content = styled.p`
  width: 50%;
  color: white;
  text-align: center;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const ScrollImages = styled.div`
  width: 40px;
  position: absolute;
  right: 50px;
  top: 500px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ChildrenWrap = styled.div`
  padding: 50px 0px 0px 0px;
`;

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const Header = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <motion.div transition={bounceTransition}
              animate={{ y: ["10%", "-10%"] }}>
          <Image src={props.iconUrl} alt={props.iconAlt}></Image>
        </motion.div>
        <Title>{props.titleText}</Title>
        <Content>{props.contentText}</Content>
        {props.isChildren && (
          <ChildrenWrap isChildren={props.isChildren}>
            {props.children}
          </ChildrenWrap>
        )}
        {props.isScrollAnimation && (
          <ScrollImages>
            <motion.div
              transition={bounceTransition}
              animate={{ y: ["10%", "-10%"] }}
              isScrollAnimation={props.isScrollAnimation}
            >
              <img src={ArrowImage} alt="" style={{ width: "40px" }}></img>
              <img src={EyeImage} alt="" style={{ width: "40px" }}></img>
            </motion.div>
          </ScrollImages>
        )}
      </Wrapper>
    </Main>
  );
};

export default Header;
