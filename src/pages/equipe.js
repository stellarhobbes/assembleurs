import React from "react";
import GlobalStyle from "../globalStyles";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import TopNav from "../components/sections/top-navigation";
import HalfImage from "../components/sections/half-image";
import SectionWrap from "../components/sections/section-wrap";
import ThreeColumns from "../components/sections/three-columns";
import SubtitleButton from "../components/sections/subtitle-button";
import PeopleCard from "../components/elements/peoplecards";
import ContactCTA from "../components/sections/contact-cta";

const Equipe = () => {
  const team = useStaticQuery(graphql`
    query {
      allStrapiEquipeUnit(sort: {fields: date, order: ASC}) {
        nodes {
          image {
            url
          }
          name
          job
          backgroundColor
        }
      }
      strapiEquipe {
        textImage {
          title
          description
          image {
            url
          }
        }
        equipeTitle
      }
    }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <HalfImage
        backgroundColor="lightgrey"
        isScrollAnimation="Y"
        backgroundImage={team.strapiEquipe.textImage.image.url}
        subtitleText={team.strapiEquipe.textImage.title}
        contentText={team.strapiEquipe.textImage.description}
      />
      <SectionWrap>
        <div id="target"></div>
        <SubtitleButton subtitleText={team.strapiEquipe.equipeTitle} />

        <ThreeColumns>
          {team.allStrapiEquipeUnit.nodes.map((node) => (
            <PeopleCard
              backgroundColor={node.backgroundColor}
              imageUrl={node.image.url}
              name={node.name}
              job={node.job}
            />
          ))}
        </ThreeColumns>
      </SectionWrap>
      <ContactCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Equipe;

export const Head = () => (
  <Seo title="Les Assembleurs - L'équipe" pathname="/equipe"></Seo>
);
