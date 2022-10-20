import * as React from "react";
import GlobalStyle from "../globalStyles";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

/*Components*/
import Navbar from "../components/sections/navbar";
import HeaderHome from "../components/home-components/header-home";
import TextImage from "../components/sections/text-image";
import SubtitleButton from "../components/sections/subtitle-button";
import FourColumns from "../components/sections/four-columns";
import ThreeColumns from "../components/sections/three-columns";
import SectionWrap from "../components/sections/section-wrap";
import Card from "../components/elements/card";
import AtypicalSection from "../components/home-components/atypical-home";
import Partners from "../components/sections/partners-section";
import ContactCTA from "../components/sections/contact-cta";
import Footer from "../components/sections/footer";

const IndexPage = () => {
  const homeContent = useStaticQuery(graphql`
    query {
      strapiHomepage {
        textImage {
          image {
            url
          }
          title
          description
        }
        missions {
          title
          missionCard {
            cardTitle
            cardText
            cardImage {
              url
            }
          }
        }
        solutions {
          title
          solutionCard {
            cardTitle
            cardText
            cardImage {
              url
            }
          }
        }
      }
    }
  `);
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs</title>
        <link rel="canonical" href="https://assembleurs.co/" />
        <meta
          name="title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          name="description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assembleurs.co/" />
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
        <meta property="twitter:url" content="https://assembleurs.co/" />
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
      <HeaderHome />
      <div id="target"></div>
      <TextImage
        bulletColor=""
        title={homeContent.strapiHomepage.textImage.title}
        titleColor=""
        buttonText="En savoir plus"
        buttonURL="/cooperative"
        imageUrl={homeContent.strapiHomepage.textImage.image.url}
      >
        {homeContent.strapiHomepage.textImage.description}
      </TextImage>
      <SectionWrap backgroundColor="lightgrey">
        <SubtitleButton
          backgroundColor="lightgrey"
          subtitleText={homeContent.strapiHomepage.missions.title}
          buttonText="Plus d'infos"
          buttonUrl="/missions"
        />
        <FourColumns backgroundColor="lightgrey">
          {homeContent.strapiHomepage.missions.missionCard.map((mission) => (
            <Card
              url={mission.cardImage.url}
              titleText={mission.cardTitle}
              contentText={mission.cardText}
            />
          ))}
        </FourColumns>
      </SectionWrap>
      <SectionWrap>
        <AtypicalSection />
      </SectionWrap>
      <SectionWrap backgroundColor="lightblue">
        <SubtitleButton
          backgroundColor="lightblue"
          subtitleText="Nos solutions"
          buttonText="Plus d'infos"
          buttonUrl="/solutions"
        />
        <ThreeColumns backgroundColor="lightblue">
          {homeContent.strapiHomepage.solutions.solutionCard.map((solution) => (
            <Card
              url={solution.cardImage.url}
              titleText={solution.cardTitle}
              contentText={solution.cardText}
            />
          ))}
        </ThreeColumns>
      </SectionWrap>
      <SectionWrap>
        <Partners />
      </SectionWrap>
      <ContactCTA backgroundColor="lightgrey" />
      <Footer />
    </body>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
