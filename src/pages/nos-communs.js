import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Masonry from "react-masonry-css";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import HalfImage from "../components/sections/half-image";
import IconCard from "../components/elements/icon-card";
import SectionWrap from "../components/sections/section-wrap";
import ContactCTA from "../components/sections/contact-cta";

/*Images*/
import ImageHeader from "../images/pictures/image-header-ressources.png";

/*Contents*/

/*Styles*/
const ColumnsWrapper = styled.section``;
const breakpointColumnsObj = {
  default: 3,
  960: 2,
  700: 2,
  500: 1,
};

const Ressources = () => {
  const strapiData = useStaticQuery(graphql`
    query {
      allStrapiRessource {
        nodes {
          accroche
          backgroundColor
          title
          content {
            data {
              content
            }
          }
          backgroundImage {
            url
          }
          icon {
            url
          }
        }
      }
    }
  `);
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Nos communs</title>
        <link rel="canonical" href="https://assembleurs.co/nos-communs" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <HalfImage
        backgroundImage={ImageHeader}
        backgroundColor="lightgrey"
        subtitleText="Nos communs"
        contentText="Les Assembleurs sélectionnent et mettent en commun de nombreuses
        ressources et outils méthodologiques, à votre disposition ci-dessous."
      />

      <SectionWrap>
        <ColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {strapiData.allStrapiRessource.nodes.map((node) => (
              <IconCard
                backgroundImage={node.backgroundImage.url}
                backgroundColor={node.backgroundColor}
                imageUrl={node.icon.url}
                imageAlt=""
                subtitleText={node.title}
                accrocheText={node.accroche}
                buttonText=""
                buttonUrl=""
              >
                {node.content.data.content}
              </IconCard>
            ))}
          </Masonry>
        </ColumnsWrapper>
      </SectionWrap>
      <ContactCTA backgroundColor="lightgrey" />
      <Footer />
    </body>
  );
};

export default Ressources;
