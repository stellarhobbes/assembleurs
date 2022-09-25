import React from "react";
import GlobalStyle from "../../globalStyles";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Masonry from "react-masonry-css";

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
    title: "Publics",
    text: "(collectivités, opérateurs de service public...)",
    url: "/solutions/acteurs-publics",
  },
  {
    image: ActeursInclusionNum,
    opacity: "",
    alt: "Illustration acteurs publics",
    title: "Inclusion numérique",
    text: "(lieux de médiation, tiers-lieux, centres sociaux...)",
    url: "/solutions/acteurs-inclusion-numerique",
  },
  {
    image: ActeursSocietaux,
    opacity: "yes",
    alt: "Illustration acteurs publics",
    title: "Sociétaux",
    text: "(associations, acteurs santé, éducatifs, économiques...)",
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

const SolutionsPublic = () => {
  const Solutions = useStaticQuery(graphql`
    query {
      allStrapiSolution {
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
          <Content>Vous êtes des acteurs&nbsp;...</Content>
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
      <SectionWrap>
        <ColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {Solutions.allStrapiSolution.nodes
              .filter((node) => node.tag.includes("inclusion"))
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
