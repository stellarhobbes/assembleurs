import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import SectionWrap from "../components/sections/section-wrap";
import Footer from "../components/sections/footer";

/*Styles*/
const Main = styled.div``;
const Wrapper = styled.section`
  width: 60%;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const SolutionMarkdown = styled(ReactMarkdown)`
  h2 {
    text-transform: none;
    letter-spacing: 0.5px;
  }
  a {
    color: #ff4114;
    text-decoration: underline;
    font-weight: 600;
  }
  img {
    width: 100%;
    padding: 50px 0px;
  }
`;

export const query = graphql`
  query ($slug: String!) {
    strapiSolution(slug: { eq: $slug }) {
      content {
        data {
          content
        }
      }
      title
      accroche
    }
  }
`;

const SolutionTemplate = (props) => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - {props.data.strapiSolution.title}</title>
        <link rel="canonical" href="https://assembleurs.co/" />
        <meta
          name="title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          name="description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assembleurs.co/" />
        <meta
          property="og:title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          property="og:description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dgnptaxm4/image/upload/v1666271732/illustration-assembleurs_l9rl5h.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://assembleurs.co/" />
        <meta
          property="twitter:title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          property="twitter:description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dgnptaxm4/image/upload/v1666271732/illustration-assembleurs_l9rl5h.png"
        ></meta>
      </Helmet>
      <Main>
        <GlobalStyle />
        <Navbar />
        <Header
          titleText={props.data.strapiSolution.title}
          contentText={props.data.strapiSolution.accroche}
        />
        <Wrapper>
          <SectionWrap>
            {props.data.strapiSolution.content.data.content && (
              <SolutionMarkdown>
                {props.data.strapiSolution.content.data.content}
              </SolutionMarkdown>
            )}
          </SectionWrap>
        </Wrapper>
        <Footer />
      </Main>
    </body>
  );
};

export default SolutionTemplate;
