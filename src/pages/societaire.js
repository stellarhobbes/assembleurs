import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import TopNav from "../components/sections/top-navigation";
import ThreeColumns from "../components/sections/three-columns";
import DarkCard from "../components/elements/darkcard";
import DecorationSection from "../components/sections/decoration-section";
import Subtitle from "../components/elements/subtitle";
import ListElement from "../components/elements/list-element";
import SimpleSection from "../components/sections/simple-section";
import SectionWrap from "../components/sections/section-wrap";
import Separator from "../components/blocs/separator";
import RoundCard from "../components/elements/round-card";
import ContactCTA from "../components/sections/contact-cta";
import Footer from "../components/sections/footer";

/*Images*/
import LogoAssembleurs from "../images/icons/Icone_logo_Assembleurs.png";
import CyanEye from "../images/icons/cyaneye-assembleurs.png";
import ArrowDown from "../images/icons/arrow-down-assembleurs.png";
import NumberOne from "../images/icons/number01-assembleurs.png";
import NumberTwo from "../images/icons/number02-assembleurs.png";
import NumberThree from "../images/icons/number03-assembleurs.png";
import Mouse from "../images/illustrations/cursor-image.png";

/*Styles*/
const GreySection = styled.div`
  background-color: #f4f4f4;
  z-index: -5;
`


/*Contents*/
const headerContent = [
  {
    numberUrl: NumberOne,
    title: "Participer",
    text: "S'impliquer activement dans la gouvernance d'un projet régional au service de l'intérêt général.",
  },
  {
    numberUrl: NumberTwo,
    title: "Échanger",
    text: "Se mettre en réseau avec d'autres acteurs et territoires.",
  },
  {
    numberUrl: NumberThree,
    title: "S'informer",
    text: "Décrypter l'actualité de l'inclusion numérique : dispositifs d'États, appels à projet, financements.",
  },
];

const valeursContent = [
  {
    title: "Inclusion et pouvoir d'agir",
    text: "Oeuvrer pour une société numérique inclusive et créative qui offre une place à chacun.",
  },
  {
    title: "Durabilité & sobriété",
    text: "Favoriser un numérique éthique, coopératif, démocratique et frugal.",
  },
  {
    title: "ESS & Agilité",
    text: "Les Assembleurs est une entreprise de l'ESS, qui allie intérêt général et agilité entrepreneuriale.",
  },
  {
    title: "Ouverture & Collaboration",
    text: "Favoriser la co-construction, le pair à pair et la production de communs",
  },
  {
    title: "Ancrage & équité territoriale",
    text: "Agir pour tous les territoires des Hauts-de-France, notamment les plus sensibles.",
  },
];

const societaireContent = [
  {
    text: "Vous investissez dans des parts sociales de la coopérative",
  },
  {
    text: "Souscrire dans une SCIC est considéré comme un investissement à votre bilan, qui reste donc à votre actif. Le jour où vous souhaitez quitter la SCIC, vous pouvez récupérer le montant de vos parts",
  },
  {
    text: "Vous prenez part à la gouvernance et devenez acteur de l'inclusion numérique en Hauts-de-France",
  },
];

const Societaire = () => {
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <Header
        isChildren="yes"
        iconUrl={LogoAssembleurs}
        iconAlt="Logo des Assembleurs"
        titleText="Devenir sociétaire des Assembleurs ?"
        contentText="Courant 2022, les Assembleurs vont se transformer en Société Coopérative d'Intérêt Collectif (SCIC). 2022 sera une année de transition, durant laquelle il sera possible de devenir sociétaire."
      >
        <ThreeColumns>
          {headerContent.map((content) => (
            <DarkCard
              iconUrl={content.numberUrl}
              titleText={content.title}
              contentText={content.text}
            />
          ))}
        </ThreeColumns>
      </Header>
      <DecorationSection>
        <Subtitle subtitleText="Les valeurs partagées" />
        {valeursContent.map((content) => (
          <ListElement titleText={content.title} contentText={content.text} />
        ))}
      </DecorationSection>
      <GreySection>
        <SectionWrap>
          <SimpleSection
            iconUrl={CyanEye}
            iconAlt="Un oeil cyan"
            titleText="Le principe Coopératif"
            buttonUrl="#"
            buttonText="Télécharger la plaquette"
            imageUrl={Mouse}
            imageAlt=""
          >
            Devenir sociétaire consiste à souscrire une ou plusieurs parts
            sociales de la SCIC.<br></br>1 associé = 1 voix dans la gouvernance,
            quel que soit le nombre de parts souscrites.
          </SimpleSection>
        </SectionWrap>
        <Separator />
        <SectionWrap>
          <SimpleSection
            iconUrl={ArrowDown}
            iconAlt="Une flèche vers le bas"
            titleText="Qu'est-ce que le sociétariat ?"
          >
            <RoundCard
              backgroundColor="white"
              titleText="Devenir sociétaire c'est ..."
              buttonUrl="#"
              buttonText="Devenir sociétaire"
            >
              {societaireContent.map((content) => (
                <ListElement contentText={content.text} />
              ))}
            </RoundCard>
          </SimpleSection>
        </SectionWrap>
      </GreySection>
      <ContactCTA backgroundColor="white" />
      <Footer />
    </body>
  );
};

export default Societaire;
