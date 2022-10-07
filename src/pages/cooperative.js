import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { Helmet } from "react-helmet";

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
/*import IllustrationLieux from "../images/illustrations/illustration-lieux.png";*/
import ImageHeader from "../images/pictures/image-header-cooperative-haricot.png";
import IconEyeCyan from "../images/icons/cyaneye-assembleurs.png";
import IconEyeRed from "../images/icons/redeye-assembleurs.png";
import IllustrationUrgence from "../images/illustrations/illustration-urgencesociale.png";
import ArrowRight from "../images/icons/arrow-right-assembleurs.png";
import HandsImage from "../images/illustrations/Picto_mains.png";
import HatImage from "../images/illustrations/Picto_diplome.png";
import DisplayImage from "../images/illustrations/Picto_fleches.png";
import LinkImage from "../images/illustrations/Picto_reseau.png";
import EquipeAssembleurs from "../images/pictures/équipe-assembleurs-couleur.png";

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
    titleText: "Mener",
    contentText: "des projets sectoriels de l'inclusion numérique",
  },
  {
    url: LinkImage,
    titleText: "Créer du lien",
    contentText: "mettre en réseau et animer l'écosystème",
  },
];

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
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Coopérative</title>
        <link rel="canonical" href="https://assembleurs.co/cooperative" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <SectionWrap backgroundColor="lightgrey">
        <ReverseTextImage
          title="Mission des assembleurs"
          text="Accompagner, former et animer une dynamique collective pour une société numérique inclusive et créative !"
          imageUrl={ImageHeader}
          targetId="/cooperative#target"
        />
      </SectionWrap>
      <div id="target"></div>
      <Citation
        backgroundColor="lightgrey"
        citationText="La médiation numérique désigne les dispositifs qui permettent à chacun de comprendre et de s'approprier le numérique, ses enjeux et ses usages"
      />
      <SectionWrap backgroundColor="lightgrey">
        <TextCitation
          backgroundColor="lightgrey"
          title="Notre vision"
          htroisText="Agir collectivement pour une transition numérique inclusive des Hauts-de-France !"
          text="L'inclusion numérique, c'est répondre à une urgence sociale pour aider les plus éloignés dans leur appropriation des outils et démarches. C'est aussi un enjeu sociétal qui consiste à accompagner un changement de société et donner à tous et à toutes les clés pour être acteurs de la société numérique "
          iconUrl={IconEyeCyan}
          citationText="Agir collectivement pour que chacun trouve sa place dans la société numérique"
        />
      </SectionWrap>
      <FullImage
        imageUrl={IllustrationUrgence}
        imageAlt="Illustration de la transformation sociétale"
      />
      <Wrapper>
        <Bubble>
          On considère qu’environ 20% de la population est en situation
          d’illectronisme, mais l’inclusion numérique c’est aussi accompagner
          l’ensemble des citoyens dans la transformation sociétale en cours.
        </Bubble>
      </Wrapper>
      <SectionWrap backgroundColor="lightgrey">
        <SubtitleButton
          subtitleText="Nos actions sur le terrain"
          backgroundColor="lightgrey"
        />
        <ContentBloc
          backgroundColor="lightgrey"
          imageUrl={ArrowRight}
          imageAlt=""
          contentText="Pour nous, le déploiement d'une offre de médiation en adéquation avec les besoins des citoyens sur l'ensemble du territoire passe à la fois par le renforcement des lieux de médiation, le déploiement de solutions innovantes et une meilleure identification des acteurs"
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
      <CitationSimple
        iconUrl={IconEyeRed}
        citationText="En 2022, les Assembleurs, ce sont des formations pour les aidants et les médiateurs, des rencontres entre acteurs de l'inclusion numérique, des projets autour du numérique éducatif, de la lutte contre la pauvreté ou des TPE-PME"
      />
      <HalfImage
        backgroundColor="lightgrey"
        backgroundImage={EquipeAssembleurs}
        subtitleText="Notre équipe"
        contentText="Le projet s'est développé depuis fin 2019 au sein du collectif POP, ses activités sont portées par une SCIC. L'équipe compte plus de 15 collaborateurs et nous prévoyons de doubler les effectifs d'ici fin 2023"
        buttonText="Découvrir les profils"
        url="/equipe"
      />
      <ContactCTA backgroundColor="white" />
      <Footer />
    </body>
  );
};

export default Cooperative;
