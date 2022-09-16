import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

import SimpleBloc from "../blocs/simple-bloc";

const Main = styled.div``;
const Wrapper = styled.section`
  padding: 0px 0px 50px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3em;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const LastArticle = styled.div`
  border-right: 0.5px solid #b3b3b3;
  border-left: 0.5px solid #b3b3b3;
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
          url="#"
        />
        <LastArticle></LastArticle>
        <SimpleBloc
          bulletColor="red"
          subtitleText="Agenda"
          contentText="Retrouvez les événements de l’inclusion numérique en Hauts-de-France sur notre agenda"
          buttonText="Les évènements"
          url="#"
        />
      </Wrapper>
    </Main>
  );
};

export default AtypicalSection;
