import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Seo } from "../components/seo";

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
      slug
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

export const Head = (props) => (
  <Seo
    title={`Les Assembleurs - ${props.data.strapiSolution.title}`}
    pathname={`/solutions/${props.data.strapiSolution.slug}`}
  ></Seo>
);