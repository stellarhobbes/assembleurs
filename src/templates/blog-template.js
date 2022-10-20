import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import SectionWrap from "../components/sections/section-wrap";
import Footer from "../components/sections/footer";
import BlogHeader from "../components/sections/blog-header";

/*Styles*/
const Main = styled.div``;
const Wrapper = styled.section`
  width: 60%;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const BlogMarkdown = styled(ReactMarkdown)`
  h2 {
    text-transform: none;
    letter-spacing: 0.5px;
  }
  a {
    color: #ff4114;
    text-decoration: underline;
    font-weight: 600;
  }

  blockquote p {
    font-style: italic;
    padding-left: 25px;
    border-left: solid 1px #252d80;
  }

  img {
    width: 100%;
    padding: 50px 0px;
  }
`;

export const query = graphql`
  query ($slug: String!) {
    strapiBlog(slug: { eq: $slug }) {
      content {
        data {
          content
        }
      }
      title
      accroche
      date(formatString: "DD/MM/YYYY")
      image {
        url
      }
    }
  }
`;

const BlogTemplate = (props) => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - {props.data.strapiBlog.title}</title>
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
          content={props.data.strapiBlog.image.url}
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
          content={props.data.strapiBlog.image.url}
        ></meta>
      </Helmet>
      <Main>
        <GlobalStyle />
        <Navbar />
        <BlogHeader
          titleText={props.data.strapiBlog.title}
          accrocheText={props.data.strapiBlog.accroche}
          date={props.data.strapiBlog.date}
          backgroundImage={props.data.strapiBlog.image.url}
        />
        <Wrapper>
          <SectionWrap>
            {props.data.strapiBlog.content.data.content && (
              <BlogMarkdown>
                {props.data.strapiBlog.content.data.content}
              </BlogMarkdown>
            )}
          </SectionWrap>
        </Wrapper>
        <Footer />
      </Main>
    </body>
  );
};

export default BlogTemplate;
