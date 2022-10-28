import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

/*Components*/
import Navbar from "../components/sections/navbar";
import TopNav from "../components/sections/top-navigation";
import Footer from "../components/sections/footer";
import SectionWrap from "../components/sections/section-wrap";
import ReverseTextImage from "../components/sections/reverse-text-image";
import Citation from "../components/sections/citation";
import TextCitation from "../components/sections/text-citation";
import FullImage from "../components/sections/full-image";
import ContentBloc from "../components/blocs/content-bloc";
import SubtitleButton from "../components/sections/subtitle-button";
import FourColumns from "../components/sections/four-columns";
import Card from "../components/elements/card";
import CitationSimple from "../components/sections/citation-simple";
import HalfImage from "../components/sections/half-image";
import ContactCTA from "../components/sections/contact-cta";

/*Images*/
import IconEyeCyan from "../images/icons/cyaneye-assembleurs.png";
import IconEyeRed from "../images/icons/redeye-assembleurs.png";
import ArrowRight from "../images/icons/arrow-right-assembleurs.png";

/*Styles*/
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 100px;
  @media (max-width: 960px) {
    margin-bottom: 50px;
    margin-top: -50px;
  }
`;
const Bubble = styled.p`
  width: 50%;
  text-align: center;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const Cooperative = () => {
  const cooperativeContent = useStaticQuery(graphql`
    query {
      strapiCooperative {
        textImage {
          image {
            url
          }
          title
          description
        }
        citation
        visionBloc {
          title
          accroche
          content
        }
        importantText
        fullImage {
          image {
            url
          }
          imageText
        }
        actions {
          title
          content
          actionCard {
            cardImage {
              url
            }
            cardTitle
            cardText
          }
        }
        centerText
        textImageEnd {
          image {
            url
          }
          title
          description
        }
      }
    }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <SectionWrap backgroundColor="lightgrey">
        <ReverseTextImage
          title={cooperativeContent.strapiCooperative.textImage.title}
          text={cooperativeContent.strapiCooperative.textImage.description}
          imageUrl={cooperativeContent.strapiCooperative.textImage.image.url}
          targetId="/cooperative#target"
        />
      </SectionWrap>
      <div id="target"></div>
      <Citation
        backgroundColor="lightgrey"
        citationText={cooperativeContent.strapiCooperative.citation}
      />
      <SectionWrap backgroundColor="lightgrey">
        <TextCitation
          backgroundColor="lightgrey"
          title={cooperativeContent.strapiCooperative.visionBloc.title}
          htroisText={cooperativeContent.strapiCooperative.visionBloc.accroche}
          text={cooperativeContent.strapiCooperative.visionBloc.content}
          iconUrl={IconEyeCyan}
          citationText={cooperativeContent.strapiCooperative.importantText}
        />
      </SectionWrap>
      <FullImage
        imageUrl={cooperativeContent.strapiCooperative.fullImage.image.url}
        imageAlt="Illustration de la transformation sociétale"
      />
      <Wrapper>
        <Bubble>
          {cooperativeContent.strapiCooperative.fullImage.imageText}
        </Bubble>
      </Wrapper>
      <SectionWrap backgroundColor="lightgrey">
        <SubtitleButton
          subtitleText={cooperativeContent.strapiCooperative.actions.title}
          backgroundColor="lightgrey"
        />
        <ContentBloc
          backgroundColor="lightgrey"
          imageUrl={ArrowRight}
          imageAlt=""
          contentText={cooperativeContent.strapiCooperative.actions.content}
        />
        <FourColumns backgroundColor="lightgrey">
          {cooperativeContent.strapiCooperative.actions.actionCard.map(
            (content) => (
              <Card
                url={content.cardImage.url}
                titleText={content.cardTitle}
                contentText={content.cardText}
              />
            )
          )}
        </FourColumns>
      </SectionWrap>
      <CitationSimple
        iconUrl={IconEyeRed}
        citationText={cooperativeContent.strapiCooperative.centerText}
      />
      <HalfImage
        backgroundColor="lightgrey"
        backgroundImage={cooperativeContent.strapiCooperative.textImageEnd.image.url}
        subtitleText={cooperativeContent.strapiCooperative.textImageEnd.title}
        contentText={cooperativeContent.strapiCooperative.textImageEnd.description}
        buttonText="Découvrir les profils"
        url="/equipe"
      />
      <ContactCTA backgroundColor="white" />
      <Footer />
    </body>
  );
};

export default Cooperative;

export const Head = () => (
  <Seo title="Les Assembleurs - Coopérative" pathname="/cooperative"></Seo>
);
