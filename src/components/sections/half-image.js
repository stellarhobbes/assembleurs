import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import SimpleBloc from "../blocs/simple-bloc";

import EyeImage from "../../images/icons/redeye-assembleurs.png";
import ArrowImage from "../../images/icons/arrow-down-assembleurs.png";

const colors = {
  lightblue: "#E0F3F9",
  lightred: "#FFE0DB",
  lightgrey: "#F4F4F4",
  white: "#ffffff",
};

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 960px) {
    display: flex;
  }
`;
const ImageBloc = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;
const ContentBloc = styled.div`
  background-color: ${(props) => {
    return colors[props.backgroundColor] || "transparent";
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px;
  @media (max-width: 960px) {
    padding: 50px;
  }
`;

const Content = styled(SimpleBloc)`
  width: 60%;
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

const HalfImage = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <ImageBloc backgroundImage={props.backgroundImage}></ImageBloc>
      <ContentBloc backgroundColor={props.backgroundColor}>
        <Content
          subtitleText={props.subtitleText}
          contentText={props.contentText}
          subContentText={props.subContentText}
          buttonText={props.buttonText}
          url={props.url}
        />
      </ContentBloc>
      {props.isScrollAnimation && (
        <ScrollImages>
          <AnchorLink to="/equipe#target">
            <img src={ArrowImage} alt="" style={{ width: "40px" }}></img>
            <img src={EyeImage} alt="" style={{ width: "40px" }}></img>
          </AnchorLink>
        </ScrollImages>
      )}
    </Main>
  );
};

export default HalfImage;
