import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import SimpleBloc from "../blocs/simple-bloc";
import Button from "../elements/button";

import LastBlogImage from "../../images/illustrations/transition-numerique.png";

const Main = styled.div``;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  align-items: center;
  justify-content: center;
  column-gap: 3em;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding: initial;
  }
`;

const LastArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f4f4f4;
  padding: 50px;
  border-radius: 30px;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p`
  font-family: "Big Shoulders Display";
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 700;
`;

const AtypicalSection = () => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <SimpleBloc
          subtitleText="Sur le terrain"
          contentText="Suivez notre actualité ! Partez à la rencontre des acteurs et lieux de médiation numérique en Hauts-de-France, découvrez nos actions pour un numérique inclusif en Hauts-de-France"
          buttonText="Accéder au blog"
          url="https://simplistic-cycle-553.notion.site/Sur-le-terrain-35a90e8e35b745da90f1b5da63a09491"
          target="_blank"
        />
        <LastArticle>
          <Image src={LastBlogImage}></Image>
          <Title>
            La médiation numérique en circuit court, ça vous parle ?
          </Title>
          <Button
            buttonText="Lire l'article"
            url="https://simplistic-cycle-553.notion.site/LA-M-DIATION-NUM-RIQUE-EN-CIRCUIT-COURT-A-VOUS-PARLE-affdd189699e4d51b8cbd69d1090d1b1"
            target="_blank"
          ></Button>
        </LastArticle>
        <SimpleBloc
          bulletColor="red"
          subtitleText="Agenda"
          contentText="Retrouvez les événements de l’inclusion numérique en Hauts-de-France sur notre agenda"
          buttonText="Les évènements"
          url="https://openagenda.com/assembleurs"
          target="_blank"
        />
      </Wrapper>
    </Main>
  );
};

export default AtypicalSection;
