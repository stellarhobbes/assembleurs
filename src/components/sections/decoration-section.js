import React from "react";
import GlobalStyle from "../../globalStyles";
import styled from "styled-components";

import RedCercle from "../../images/pictures/motif_cercles_rouges.png";
import CyanLines from "../../images/pictures/motif_lignes_cyan.png";

const Main = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2em;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  padding: 100px;
  @media (max-width: 960px) {
    padding: 50px;
  }
`;

const Images = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

const ImageUp = styled.div`
  height: 50%;
  background-image: url(${RedCercle});
  background-size: cover;
`;
const ImageDown = styled.div`
  height: 50%;
  background-image: url(${CyanLines});
  background-size: cover;
`;

const DecorationSection = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <Content>{props.children}</Content>
        <Images>
          <ImageUp></ImageUp>
          <ImageDown></ImageDown>
        </Images>
      </Wrapper>
    </Main>
  );
};

export default DecorationSection;
