import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
  top: 600px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const HeaderHome = () => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <StaticImage
          src="../../images/icons/logo-assembleurs-capsule.png"
          alt=""
          placeholder="blurred"
          layout="fixed"
          width={200}
        ></StaticImage>
        <Title>
          Les Assembleurs : agir collectivement pour que chacun trouve sa place
          dans la société numérique&nbsp;!
        </Title>
        <Content>
          Nous accompagnons, formons et animons l’écosystème de l’inclusion
          numérique en Hauts-de-France. Formations pour les aidants et les
          médiateurs, accompagnement des collectivités, rencontres et projets
          éducatifs, lutte contre la pauvreté...
        </Content>
        <Image src={Logos} alt=""></Image>
        <ScrollImages>
          <AnchorLink to="/#target">
            <img src={ArrowImage} alt="" style={{ width: "40px" }}></img>
            <img src={EyeImage} alt="" style={{ width: "40px" }}></img>
          </AnchorLink>
        </ScrollImages>
      </Wrapper>
    </Main>
  );
};

export default HeaderHome;
