import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

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

const BlogMarkdown = styled(ReactMarkdown)`
  h2 {
    text-transform: none;
    letter-spacing: 0.5px;
  }
  a {
    border: none;
    cursor: pointer;
    padding: 10px 20px 10px 20px;
    margin: 20px 10px;
    background-color: #1b2f7d;
    border-radius: 30px;
    font-family: "Big Shoulders Display", cursive;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.8px;
    color: white;
    &:hover {
      background-color: #161a4a;
      transition: 0.5 ease-in-out;
    }
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
              <BlogMarkdown>
                {props.data.strapiSolution.content.data.content}
              </BlogMarkdown>
            )}
          </SectionWrap>
        </Wrapper>
        <Footer />
      </Main>
    </body>
  );
};

export default SolutionTemplate;
