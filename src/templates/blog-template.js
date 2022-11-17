import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Seo } from "../components/seo";

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
      slug
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
            <BlogMarkdown>
              {props.data.strapiBlog.content.data.content}
            </BlogMarkdown>
          </SectionWrap>
        </Wrapper>
        <Footer />
      </Main>
    </body>
  );
};

export default BlogTemplate;

export const Head = (props) => (
  <Seo
    title={`Les Assembleurs - ${props.data.strapiBlog.title}`}
    pathname={`/sur-le-terrain/${props.data.strapiBlog.slug}`}
  ></Seo>
);
