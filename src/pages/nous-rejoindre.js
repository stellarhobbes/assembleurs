import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";
import Masonry from "react-masonry-css";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import HalfImage from "../components/sections/half-image";
import JobsCTA from "../components/sections/jobs-cta";
import SectionWrap from "../components/sections/section-wrap";
import SimpleSection from "../components/sections/simple-section";
import IconCard from "../components/elements/icon-card";

/*Images*/
import CyanEye from "../images/icons/cyaneye-assembleurs.png";

/*Styles*/
const ColumnsWrapper = styled.section``;

const breakpointColumnsObj = {
  default: 3,
  960: 2,
  700: 2,
  500: 1,
};

const NousRejoindre = () => {
  const offers = useStaticQuery(graphql`
    query {
      allStrapiJob(sort: {fields: date, order: ASC}) {
        nodes {
          backgroundColor
          buttonText
          buttonUrl
          content {
            data {
              content
            }
          }
          job
          icon {
            url
          }
        }
      }
      strapiNousRejoindre {
        title
        image {
          url
        }
        accroche
        jobOffers {
          title
          accroche
        }
      }
    }
  `);
  return (
    <body>
      <Navbar />
      <HalfImage
        isScrollAnimation="yes"
        backgroundImage={offers.strapiNousRejoindre.image.url}
        backgroundColor="lightgrey"
        subtitleText={offers.strapiNousRejoindre.title}
        contentText={offers.strapiNousRejoindre.accroche}
      />
      <JobsCTA />
      <SectionWrap>
        <SimpleSection
          iconUrl={CyanEye}
          iconAlt="Un oeil cyan"
          titleText={offers.strapiNousRejoindre.jobOffers.title}
        >
          {offers.strapiNousRejoindre.jobOffers.accroche}
        </SimpleSection>
      </SectionWrap>
      {
      <ColumnsWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {offers.allStrapiJob.nodes.map((node) => (
            <IconCard
              backgroundColor={node.backgroundColor}
              imageUrl={node.icon.url}
              imageAlt=""
              subtitleText={node.job}
              buttonText={node.buttonText}
              buttonUrl={node.buttonUrl}
            >
              {node.content.data.content}
            </IconCard>
          ))}
        </Masonry>
      </ColumnsWrapper>
}
      <Footer />
    </body>
  );
};

export default NousRejoindre;

export const Head = () => (
  <Seo
    title="Les Assembleurs - Nous rejoindre"
    pathname="/nous-rejoindre"
  ></Seo>
);
