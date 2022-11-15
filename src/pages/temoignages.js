import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

import Navbar from "../components/sections/navbar";
import TopNav from "../components/sections/top-navigation";
import HeaderLight from "../components/sections/header-light";
import Citation from "../components/sections/citation";
import SubtitleButton from "../components/sections/subtitle-button";
import SectionWrap from "../components/sections/section-wrap";
import TestimonialCard from "../components/elements/testimonial-card";
import ContactCTA from "../components/sections/contact-cta";
import Footer from "../components/sections/footer";

import Bulle from "../images/icons/Icone_bulle.png";

const breakpointColumnsObj = {
  default: 2,
  960: 1,
  700: 1,
  500: 1,
};

const DoubleColumnsWrapper = styled.section``;

const Temoignages = () => {
  const testimonials = useStaticQuery(graphql`
    query {
      allStrapiTemoignageUnit(sort: {fields: date, order: ASC}) {
        nodes {
          image {
            url
          }
          name
          job
          company
          content {
            data {
              content
            }
          }
          backgroundColor
        }
      }
      strapiTemoignage {
        title
        accroche
        quote
        author
        subtitle
      }
    }
  `);
  return (
    <body>
      <Navbar />
      <TopNav />
      <SectionWrap backgroundColor="lightgrey">
        <HeaderLight
          iconUrl={Bulle}
          iconAlt="Icone oeil rouge"
          titleText={testimonials.strapiTemoignage.title}
          contentText={testimonials.strapiTemoignage.accroche}
        />
        <Citation
          backgroundColor="lightgrey"
          citationText={testimonials.strapiTemoignage.quote}
          nameText={testimonials.strapiTemoignage.author}
        />
      </SectionWrap>
      <SectionWrap>
        <SubtitleButton subtitleText={testimonials.strapiTemoignage.subtitle} />
        <DoubleColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {testimonials.allStrapiTemoignageUnit.nodes.map((node) => (
              <TestimonialCard
                backgroundColor={node.backgroundColor}
                imageUrl={node.image.url}
                imageAlt=""
                nameText={node.name}
                jobText={node.job}
                companyText={node.company}
                contentText={node.content.data.content}
              />
            ))}
          </Masonry>
        </DoubleColumnsWrapper>
      </SectionWrap>
      <ContactCTA backgroundColor="lightgrey" />
      <Footer />
    </body>
  );
};

export default Temoignages;

export const Head = () => (
  <Seo title="Les Assembleurs - Témoignages" pathname="/temoignages"></Seo>
);
