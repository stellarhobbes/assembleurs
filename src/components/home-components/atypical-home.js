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
  height: auto;
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
      allStrapiBlog(sort: {fields: date, order: DESC}, limit: 1) {
        nodes {
          title 
          image {
            url
          }
          slug
        }
      }
      strapiHomepage {
        blogBloc {
          title
          accroche
        }
        agendaBloc {
          title
          accroche
        }
      }
    }
  `);
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <SimpleBloc
          subtitleText={lastBlogArticle.strapiHomepage.blogBloc.title}
          contentText={lastBlogArticle.strapiHomepage.blogBloc.accroche}
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
          subtitleText={lastBlogArticle.strapiHomepage.agendaBloc.title}
          contentText={lastBlogArticle.strapiHomepage.agendaBloc.accroche}
          buttonText="Les évènements"
          url="https://openagenda.com/assembleurs"
          target="_blank"
        />
      </Wrapper>
    </Main>
  );
};

export default AtypicalSection;
