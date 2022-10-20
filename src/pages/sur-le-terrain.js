import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Masonry from "react-masonry-css";

import Navbar from "../components/sections/navbar";
import BlogCard from "../components/elements/blog-card";
import SectionWrap from "../components/sections/section-wrap";
import ReverseTextImage from "../components/sections/reverse-text-image";
import Footer from "../components/sections/footer";

import ImageHeader from "../images/illustrations/illustration-public.png"

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
      allStrapiBlog {
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
    }
  `);
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Sur le terrain</title>
        <link rel="canonical" href="https://assembleurs.co/sur-le-terrain" />
        <meta
          name="title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          name="description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assembleurs.co/sur-le-terrain" />
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
        <meta property="twitter:url" content="https://assembleurs.co/sur-le-terrain" />
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
      <GlobalStyle />
      <Navbar />
      <SectionWrap backgroundColor="lightgrey">
        <ReverseTextImage
          title="Sur le terrain"
          text="Découvrez les actualités des Assembleurs et de la médiation numérique en Hauts-de-France."
          imageUrl={ImageHeader}
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
