import * as React from "react";
import GlobalStyle from "../globalStyles";
import { Helmet } from "react-helmet";

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

/*Images*/
import OvalePicture from "../images/pictures/ovale-picture-home-assembleurs.png";

import HandsImage from "../images/illustrations/Picto_mains.png";
import HatImage from "../images/illustrations/Picto_diplome.png";
import DisplayImage from "../images/illustrations/Picto_fleches.png";
import LinkImage from "../images/illustrations/Picto_reseau.png";

import MayorImage from "../images/illustrations/Picto_illu_1.png";
import CityImage from "../images/illustrations/Picto_illu_2.png";
import DoctorImage from "../images/illustrations/Picto_illu_3.png";

/*Styles*/

/*Contents*/
const missionContents = [
  {
    url: HandsImage,
    titleText: "Accompagner",
    contentText: "des stratégies de l'inclusion numérique",
  },
  {
    url: HatImage,
    titleText: "Structurer",
    contentText: "et animer une offre de formation",
  },
  {
    url: DisplayImage,
    titleText: "Appuyer",
    contentText:
      "des dynamiques sectorielles : éducation, entreprises, santé ...",
  },
  {
    url: LinkImage,
    titleText: "Créer du lien",
    contentText: "mettre en réseau et animer l'écosystème",
  },
];

const solutionContents = [
  {
    url: MayorImage,
    titleText: "Acteurs publics",
    contentText: "(collectivités, opérateurs de service public…)",
  },
  {
    url: CityImage,
    titleText: "Acteurs de l'inclusion numérique",
    contentText: "(lieux de médiation, tiers-lieux, centres sociaux...)",
  },
  {
    url: DoctorImage,
    titleText: "Acteurs sociétaux",
    contentText: "(associations, acteurs santé, éducatifs, économiques…)",
  },
];

const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs</title>
        <link rel="canonical" href="https://assembleurs.co/" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <HeaderHome />
      <div id="target"></div>
      <TextImage
        bulletColor=""
        title="La coopérative"
        titleColor=""
        buttonText="En savoir plus"
        buttonURL="/cooperative"
        imageUrl={OvalePicture}
      >
        La mission des Assembleurs est d’accompagner, former et animer une
        dynamique collective pour une société numérique inclusive et créative.
        Notre vision&nbsp;: Agir collectivement pour que chacun trouve sa place
        dans la société numérique !
      </TextImage>
      <SectionWrap backgroundColor="lightgrey">
        <SubtitleButton
          backgroundColor="lightgrey"
          subtitleText="Nos missions"
          buttonText="Plus d'infos"
          buttonUrl="/missions"
        />
        <FourColumns backgroundColor="lightgrey">
          {missionContents.map((content) => (
            <Card
              url={content.url}
              titleText={content.titleText}
              contentText={content.contentText}
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
          {solutionContents.map((content) => (
            <Card
              url={content.url}
              titleText={content.titleText}
              contentText={content.contentText}
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
