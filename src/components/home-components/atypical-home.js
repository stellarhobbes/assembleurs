import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { useStaticQuery, graphql } from "gatsby";

import SimpleBloc from "../blocs/simple-bloc";
import Button from "../elements/button";

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
  const lastBlogArticle = useStaticQuery(graphql`
    query {
      allStrapiBlog(limit: 1) {
        nodes {
          title 
          image {
            url
          }
          slug
        }
      }
    }
  `);
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <SimpleBloc
          subtitleText="Sur le terrain"
          contentText="Suivez notre actualité ! Partez à la rencontre des acteurs et lieux de médiation numérique en Hauts-de-France, découvrez nos actions pour un numérique inclusif en Hauts-de-France"
          buttonText="Accéder au blog"
          url="/sur-le-terrain"
          target="_blank"
        />
        {lastBlogArticle.allStrapiBlog.nodes.map((node) => (
          <LastArticle>
            <Image src={node.image.url}></Image>
            <Title>{node.title}</Title>
            <Button
              buttonText="Lire l'article"
              url={`/sur-le-terrain/${node.slug}`}
              target="_blank"
            ></Button>
          </LastArticle>
        ))}
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
