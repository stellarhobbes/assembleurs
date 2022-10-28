import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import Logos from "../../images/icons/Bandeau-logo-REACT.jpg";
import LogoCapsule from "../../images/icons/logo-assembleurs-capsule.png";
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

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  padding: 15px 25px;
  background-color: white;
  border-radius: 50px;
`;

const Title = styled(motion.h1)`
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
  top: 600px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const animationProperties = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -30 },
};

const HeaderHome = () => {
  const homeContent = useStaticQuery(graphql`
    query {
      strapiHomepage {
        title
        accroche
      }
    }
  `);
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <Logo src={LogoCapsule}></Logo>
        <Title
          initial="hidden"
          variants={animationProperties}
          animate="visible"
        >{homeContent.strapiHomepage.title}</Title>
        <Content>{homeContent.strapiHomepage.accroche}</Content>
        <Image src={Logos} alt=""></Image>
        <ScrollImages>
          <AnchorLink to="/#target">
            <img src={ArrowImage} alt="" style={{ width: "40px", height: "auto" }}></img>
            <img src={EyeImage} alt="" style={{ width: "40px", height: "auto" }}></img>
          </AnchorLink>
        </ScrollImages>
      </Wrapper>
    </Main>
  );
};

export default HeaderHome;
