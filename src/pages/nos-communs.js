import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Masonry from "react-masonry-css";
import { Seo } from "../components/seo";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import HalfImage from "../components/sections/half-image";
import SectionWrap from "../components/sections/section-wrap";
import ContactCTA from "../components/sections/contact-cta";
import SimpleSection from "../components/sections/simple-section";
import ThreeColumns from "../components/sections/three-columns";
import Card from "../components/elements/card";
import FormationCard from "../components/elements/formation-card";
import AtelierCard from "../components/elements/atelier-card";

/*Images*/
import ImageHeader from "../images/pictures/image-header-ressources.png";

/*Contents*/

/*Styles*/
const ColumnsWrapper = styled.section`
  width: 90%;
  max-width: 1350px;
`;
const breakpointColumnsObj = {
  default: 3,
  960: 2,
  700: 2,
  500: 1,
};

const Ressources = () => {
  const strapiData = useStaticQuery(graphql`
    query {
      allStrapiRessource(sort: { fields: date, order: ASC }) {
        nodes {
          title
          content {
            data {
              content
            }
          }
          backgroundImage {
            url
          }
          image {
            url
          }
          duration
          peopleNumber
          category
          buttonUrl
        }
      }
      strapiNosCommun {
        title
        accroche
        subAccroche
        formationTitle {
          title
          accroche
        }
        formationBenefits {
          title
          content
        }
        atelierTitle {
          title
          accroche
        }
      }
    }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <HalfImage
        backgroundImage={ImageHeader}
        backgroundColor="white"
        subtitleText={strapiData.strapiNosCommun.title}
        contentText={strapiData.strapiNosCommun.accroche}
        subContentText={strapiData.strapiNosCommun.subAccroche}
      />

      <SectionWrap backgroundColor="lightgrey">
        <SimpleSection
          iconUrl="https://res.cloudinary.com/dgnptaxm4/image/upload/v1666963466/atelier_assembleurs_communs_a38663e688.png?updated_at=2022-10-28T13:24:27.370Z"
          titleText={strapiData.strapiNosCommun.atelierTitle.title}
        >
          {strapiData.strapiNosCommun.atelierTitle.accroche}
        </SimpleSection>
      </SectionWrap>
      <SectionWrap backgroundColor="lightgrey">
        <ColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {strapiData.allStrapiRessource.nodes
              .filter((node) => node.category.includes("atelier"))
              .map((node) => (
                <AtelierCard
                  imageUrl={node.image.url}
                  backgroundImage={node.backgroundImage.url}
                  backgroundColor={node.backgroundColor}
                  imageAlt=""
                  subtitleText={node.title}
                  duration={node.duration}
                  people={node.peopleNumber}
                  buttonUrl={node.buttonUrl}
                >
                  {node.content.data.content}
                </AtelierCard>
              ))}
          </Masonry>
        </ColumnsWrapper>
      </SectionWrap>

      <SectionWrap >
        <SimpleSection
          iconUrl="https://res.cloudinary.com/dgnptaxm4/image/upload/v1666963466/formation_assembleurs_communs_3f453b1e2c.png?updated_at=2022-10-28T13:24:26.873Z"
          titleText={strapiData.strapiNosCommun.formationTitle.title}
        >
          {strapiData.strapiNosCommun.formationTitle.accroche}
        </SimpleSection>
      </SectionWrap>
      <ThreeColumns>
        {strapiData.strapiNosCommun.formationBenefits.map((content) => (
          <Card titleText={content.title} contentText={content.content} />
        ))}
      </ThreeColumns>
      <SectionWrap>
        <ColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {strapiData.allStrapiRessource.nodes
              .filter((node) => node.category.includes("formation"))
              .map((node) => (
                <FormationCard
                  imageUrl={node.image.url}
                  backgroundImage={node.backgroundImage.url}
                  backgroundColor={node.backgroundColor}
                  imageAlt=""
                  subtitleText={node.title}
                  duration={node.duration}
                  people={node.peopleNumber}
                  buttonUrl={node.buttonUrl}
                >
                  {node.content.data.content}
                </FormationCard>
              ))}
          </Masonry>
        </ColumnsWrapper>
      </SectionWrap>
      <ContactCTA backgroundColor="white" />
      <Footer />
    </body>
  );
};

export default Ressources;

export const Head = () => (
  <Seo title="Les Assembleurs - Nos communs" pathname="/nos-communs"></Seo>
);
