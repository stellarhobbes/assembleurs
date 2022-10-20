import React from "react";
import GlobalStyle from "../globalStyles";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import ThreeColumns from "../components/sections/three-columns";
import SolutionHeaderCard from "../components/elements/solution-header-card";
import SectionWrap from "../components/sections/section-wrap";
import SolutionCard from "../components/elements/solution-card";

/*Images*/
import ActeursPublics from "../images/illustrations/Picto_illu_1.png";
import ActeursInclusionNum from "../images/illustrations/Picto_illu_2.png";
import ActeursSocietaux from "../images/illustrations/Picto_illu_3.png";
import Pattern from "../images/pictures/pattern-logo.png";

/*Content*/
const headerContent = [
  {
    image: ActeursPublics,
    alt: "Illustration acteurs publics",
    title: "Acteurs publics",
    text: "(collectivités, opérateurs de service public...)",
    url: "/solutions/acteurs-publics",
  },
  {
    image: ActeursInclusionNum,
    alt: "Illustration acteurs publics",
    title: "Acteurs de l'inclusion numérique",
    text: "(lieux de médiation, tiers-lieux, centres sociaux...)",
    url: "/solutions/acteurs-inclusion-numerique",
  },
  {
    image: ActeursSocietaux,
    alt: "Illustration acteurs publics",
    title: "Acteurs sociétaux",
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
    }
  `);

  return (
    <body>
       <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Solutions</title>
        <link rel="canonical" href="https://assembleurs.co/solutions" />
        <meta
          name="title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          name="description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assembleurs.co/solutions" />
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
        <meta property="twitter:url" content="https://assembleurs.co/solutions" />
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
      <HeaderWrap>
        <Header>
          <Title>Découvrir nos solutions en fonction de votre situation</Title>
          <Content>Vous êtes&nbsp;...</Content>
        </Header>

        <ThreeColumns>
          {headerContent.map((content) => (
            <SolutionHeaderCard
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
