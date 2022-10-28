import React from "react";
import GlobalStyle from "../globalStyles";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import Marquee from "react-fast-marquee";
import { Seo } from "../components/seo";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import ThreeColumns from "../components/sections/three-columns";
import SolutionHeaderCard from "../components/elements/solution-header-card";
import SectionWrap from "../components/sections/section-wrap";
import SolutionCard from "../components/elements/solution-card";

/*Images*/
import Pattern from "../images/pictures/pattern-logo.png";

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
  background-color: #FFE0DB;
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
  color: #FF4114;
`

const Solutions = () => {
  const Solutions = useStaticQuery(graphql`
    query {
      allStrapiSolution {
        nodes {
          accroche
          backgroundColor
          title
          id
          buttonText
          slug
          backgroundImage {
            url
          }
        }
      }
      strapiPageSolution {
        overText
        title
        solutionHeaderCard {
          cardImage {
            url
            alternativeText
          }
          cardTitle
          cardText
          buttonUrl
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
          <Title>{Solutions.strapiPageSolution.overText}</Title>
          <Content>{Solutions.strapiPageSolution.title}</Content>
        </Header>

        <ThreeColumns>
          {Solutions.strapiPageSolution.solutionHeaderCard.map((content) => (
            <SolutionHeaderCard
              imageUrl={content.cardImage.url}
              imageAlt={content.cardImage.alternativeText}
              titleText={content.cardTitle}
              contentText={content.cardText}
              link={content.buttonUrl}
            />
          ))}
        </ThreeColumns>
      </HeaderWrap>
      <Link to="https://labase.anct.gouv.fr/base/73" target="_blank">
        <CallToAction>
          <AnimateText>
            <Marquee gradientWidth="0">
              Vous souhaitez découvrir toutes les solutions de nos partenaires
              sur l'inclusion numérique ?&nbsp;<Bold>Rendez-vous sur la Base</Bold>&nbsp;• Vous
              souhaitez découvrir toutes les solutions de nos partenaires sur
              l'inclusion numérique ?&nbsp;<Bold>Rendez-vous sur la Base</Bold>&nbsp;•&nbsp;
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
            {Solutions.allStrapiSolution.nodes.map((node) => (
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

export default Solutions;

export const Head = () => (
  <Seo title="Les Assembleurs - Nos solutions" pathname="/solutions"></Seo>
);
