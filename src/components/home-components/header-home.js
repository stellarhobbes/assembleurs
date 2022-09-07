import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { motion } from "framer-motion";

import Logos from "../../images/icons/Bandeau-logo-REACT.jpg";
import EyeImage from "../../images/icons/redeye-assembleurs.png";
import ArrowImage from "../../images/icons/arrow-down-assembleurs.png";

import ImageHeader from "../../images/pictures/image-header-home.png";

const Main = styled.div`
  background-image: url(${ImageHeader});
  background-size: cover;
  padding: 100px 50px;
  @media (max-width: 960px) {
    padding: 100px 0px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 250px;
  padding: 15px 25px;
  background-color: white;
  border-radius: 50px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
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

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const HeaderHome = () => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <Image src={Logos} alt=""></Image>
        <Title>
          Agir collectivement pour que chacun trouve sa place dans la société
          numérique&nbsp;!
        </Title>
        <Content>
          Nous accompagnons, formons et animons l’écosystème de l’inclusion
          numérique en Hauts-de-France. Formations pour les aidants et les
          médiateurs, accompagnement des collectivités, rencontres et projets
          éducatifs, lutte contre la pauvreté...
        </Content>
        <ScrollImages>
          <motion.div
            transition={bounceTransition}
            animate={{ y: ["10%", "-10%"] }}
          >
            <img src={ArrowImage} alt="" style={{ width: "40px" }}></img>
            <img src={EyeImage} alt="" style={{ width: "40px" }}></img>
          </motion.div>
        </ScrollImages>
      </Wrapper>
    </Main>
  );
};

export default HeaderHome;
