import React from "react";
import GlobalStyle from "../../globalStyles";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import Marquee from "react-fast-marquee";
import { Seo } from "../../components/seo";

/*Components*/
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import ThreeColumns from "../../components/sections/three-columns";
import SolutionHeaderCard from "../../components/elements/solution-header-card";
import SectionWrap from "../../components/sections/section-wrap";
import SolutionCard from "../../components/elements/solution-card";

/*Images*/
import ActeursPublics from "../../images/illustrations/Picto_illu_1.png";
import ActeursInclusionNum from "../../images/illustrations/Picto_illu_2.png";
import ActeursSocietaux from "../../images/illustrations/Picto_illu_3.png";
import Pattern from "../../images/pictures/pattern-logo.png";

/*Content*/
const headerContent = [
  {
    image: ActeursPublics,
    opacity: "yes",
    alt: "Illustration acteurs publics",
    title: "Acteurs publics",
    text: "(Collectivités, opérateurs de service public...)",
    url: "/solutions/acteurs-publics",
  },
  {
    image: ActeursInclusionNum,
    opacity: "yes",
    alt: "Illustration acteurs publics",
    title: "Acteurs de l'inclusion numérique",
    text: "(Lieux de médiation, tiers-lieux, centres sociaux...)",
    url: "/solutions/acteurs-inclusion-numerique",
  },
  {
    image: ActeursSocietaux,
    opacity: "",
    alt: "Illustration acteurs publics",
    title: "Acteurs sociétaux",
    text: "(Associations, acteurs santé, éducatifs, économiques...)",
    url: "/solutions/acteurs-societaux",
  },
];

/*Styles*/
const HeaderWrap = styled.div`
  background-color: #252d80;
  padding: 75px 0px;
  background-image: url(${Pattern});
  background-size: cover;
`;
const Header = styled.section``;
const Title = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  line-height: 1.6em;
  text-align: center;
`;

const Content = styled.p`
  color: white;
  font-family: "Big Shoulders Display";
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 5em;
  margin: 0px 0px;
  margin-bottom: 25px;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 3em;
  }
`;

const ColumnsWrapper = styled.section``;
const breakpointColumnsObj = {
  default: 3,
  960: 2,
  700: 2,
  500: 1,
};

const CallToAction = styled.div`
  background-color: #ffe0db;
  padding: 20px 0px;
`;

const AnimateText = styled.p`
  text-transform: uppercase;
  font-family: "Big Shoulders Display";
  font-weight: 600;
  font-size: 1.5em;
  letter-spacing: 1px;
`;

const Bold = styled.span`
  font-weight: 700;
  color: #ff4114;
`;

const SolutionsPublic = () => {
  const Solutions = useStaticQuery(graphql`
    query {
      allStrapiSolution(sort: {fields: date, order: ASC}) {
        nodes {
          accroche
          backgroundColor
          backgroundImage {
            url
          }
          title
          id
          buttonText
          slug
          tag
        }
      }
    }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <HeaderWrap>
        <Header>
          <Title>Découvrir nos solutions en fonction de votre situation</Title>
          <Content>Vous êtes&nbsp;...</Content>
        </Header>

        <ThreeColumns>
          {headerContent.map((content) => (
            <SolutionHeaderCard
              opacity={content.opacity}
              imageUrl={content.image}
              imageAlt={content.alt}
              titleText={content.title}
              contentText={content.text}
              link={content.url}
            />
          ))}
        </ThreeColumns>
      </HeaderWrap>
      <Link to="https://labase.anct.gouv.fr/base/73" target="_blank">
        <CallToAction>
          <AnimateText>
            <Marquee gradientWidth="0">
              Vous souhaitez découvrir toutes les solutions de nos partenaires
              sur l'inclusion numérique ?&nbsp;
              <Bold>Rendez-vous sur la Base</Bold>&nbsp;• Vous souhaitez
              découvrir toutes les solutions de nos partenaires sur l'inclusion
              numérique ?&nbsp;<Bold>Rendez-vous sur la Base</Bold>&nbsp;•&nbsp;
            </Marquee>
          </AnimateText>
        </CallToAction>
      </Link>
      <SectionWrap>
        <ColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {Solutions.allStrapiSolution.nodes
              .filter((node) => node.tag.includes("societe"))
              .map((node) => (
                <SolutionCard
                  key={node.id}
                  backgroundImage={node.backgroundImage.url}
                  backgroundColor={node.backgroundColor}
                  subtitleText={node.title}
                  buttonText={node.buttonText}
                  buttonUrl={`/solutions/${node.slug}`}
                >
                  {node.accroche}
                </SolutionCard>
              ))}
          </Masonry>
        </ColumnsWrapper>
      </SectionWrap>
      <Footer />
    </body>
  );
};

export default SolutionsPublic;

export const Head = () => (
  <Seo
    title="Les Assembleurs - Acteurs sociétaux"
    pathname="/acteurs-societaux"
  ></Seo>
);
