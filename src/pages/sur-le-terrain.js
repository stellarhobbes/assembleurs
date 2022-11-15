import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

import Masonry from "react-masonry-css";

import Navbar from "../components/sections/navbar";
import BlogCard from "../components/elements/blog-card";
import SectionWrap from "../components/sections/section-wrap";
import ReverseTextImage from "../components/sections/reverse-text-image";
import Footer from "../components/sections/footer";

const breakpointColumnsObj = {
  default: 3,
  960: 2,
  700: 2,
  500: 1,
};

const ColumnsWrapper = styled.section``;

const BlogPage = () => {
  const blogs = useStaticQuery(graphql`
    query {
      allStrapiBlog(sort: {fields: date, order: DESC}) {
        nodes {
          image {
            url
          }
          accroche
          backgroundColor
          title
          slug
          date(formatString: "DD/MM/YYYY")
        }
      }
      strapiSurLeTerrain {
        header {
          title
          description
          image {
            url
          }
        }
      }
    }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <SectionWrap backgroundColor="lightgrey">
        <ReverseTextImage
          title={blogs.strapiSurLeTerrain.header.title}
          text={blogs.strapiSurLeTerrain.header.description}
          imageUrl={blogs.strapiSurLeTerrain.header.image.url}
          targetId="/sur-le-terrain#target"
        />
      </SectionWrap>
      <div id="target"></div>
      <SectionWrap>
        <ColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {blogs.allStrapiBlog.nodes.map((node) => (
              <BlogCard
                imageUrl={node.image.url}
                backgroundColor={node.backgroundColor}
                titleText={node.title}
                date={node.date}
                buttonUrl={`/sur-le-terrain/${node.slug}`}
              >
                {node.accroche}
              </BlogCard>
            ))}
          </Masonry>
        </ColumnsWrapper>
      </SectionWrap>
      <Footer />
    </body>
  );
};
export default BlogPage;

export const Head = () => (
  <Seo
    title="Les Assembleurs - Sur le terrain"
    pathname="/sur-le-terrain"
  ></Seo>
);
