import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import FourColumns from "../components/sections/four-columns";
import DarkCard from "../components/elements/darkcard";
import ThreeColumns from "../components/sections/three-columns";
import Card from "../components/elements/card";
import NumberBloc from "../components/blocs/number-bloc";
import DoubleColumns from "../components/sections/double-columns";
import ReverseDoubleColumns from "../components/sections/reverse-double-columns";
import SolutionsCTA from "../components/sections/solutions-cta";
import Footer from "../components/sections/footer";
import SectionWrap from "../components/sections/section-wrap";
import ThreeBlocs from "../components/blocs/three-blocs";
import Separator from "../components/blocs/separator";

/*Images*/
import CyanEye from "../images/icons/cyaneye-assembleurs.png";
import NumberOne from "../images/icons/number01-assembleurs.png";
import NumberTwo from "../images/icons/number02-assembleurs.png";
import NumberThree from "../images/icons/number03-assembleurs.png";
import NumberFour from "../images/icons/number04-assembleurs.png";
import Loupe from "../images/illustrations/Picto_loupe.png";
import Outils from "../images/illustrations/Picto_malle.png";
import IllustrationLieux from "../images/illustrations/illustration-lieux.png";
import IllustrationPublic from "../images/illustrations/illustration-public.png";

/*Contents*/
const missionContent = [
  {
    numberUrl: NumberOne,
    title: "Accompagner",
    text: "des stratégies d’inclusion numérique",
  },
  {
    numberUrl: NumberTwo,
    title: "Structurer",
    text: "et animer une offre de formation",
  },
  {
    numberUrl: NumberThree,
    title: "Appuyer",
    text: "des dynamiques sectorielles",
  },
  {
    numberUrl: NumberFour,
    title: "Créer du lien",
    text: "et mettre en réseau et animer l'écosystème",
  },
];

/*Styles*/
const Image = styled.img`
  width: 100%;
`;

const Missions = () => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Missions</title>
        <link
          rel="canonical"
          href="https://les.assembleurs.co/missions"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Header
        isChildren="yes"
        iconUrl={CyanEye}
        iconAlt="Icoône oeil rouge"
        titleText="Jetez un œil à nos missions"
        contentText="Les Assembleurs accompagnent les acteurs de l'inclusion numérique en Hauts-de-France à travers 4 grands types de missions :"
      >
        <FourColumns>
          {missionContent.map((content) => (
            <DarkCard
              iconUrl={content.numberUrl}
              titleText={content.title}
              contentText={content.text}
            />
          ))}
        </FourColumns>
      </Header>
      <SectionWrap>
        <DoubleColumns>
          <NumberBloc
            url={NumberOne}
            iconAlt="Numéro un"
            subtitleText="Accompagner des stratégies d'inclusion numérique"
            contentText="Identifier les initiatives existantes, co-construire des plans d'action pour renforcer la complémentarité de l'offre et mieux toucher les habitants, déployer des pass numériques"
            bubbleText="Comment chaque habitant peut-il avoir accès aux mêmes services et le territoire être équitablement desservi ? La médiation numérique mobile est l'une des réponses possibles&nbsp;!"
          />
          <Image src={IllustrationLieux} />
        </DoubleColumns>
      </SectionWrap>
      <SectionWrap backgroundColor="lightgrey">
        <ThreeColumns backgroundColor="lightgrey">
          <Card
            url={Loupe}
            altimage="Icône de loupe"
            titleText="Créer des communs pédagogiques"
            buttonText="Fabrique à communs"
            buttonUrl="https://les.assembleurs.co/solutions/fabrique-a-communs-pedagogiques"
            target="_blank"
          />
          <Card
            url={Outils}
            altimage="Icône de loupe"
            titleText="Coordonner des formations"
            buttonText="Aidants Connect"
            buttonUrl="https://les.assembleurs.co/solutions/formations-aidants-connect"
            target="_blank"
          />
          <NumberBloc
            url={NumberTwo}
            iconAlt="Numéro deux"
            subtitleText="Structurer et animer une offre de formation"
            contentText="Concevoir et diffuser des contenus pédagogiques, créer des communs. Coordonner le déploiement des formations Aidants Connect sur les Hauts-de-France, la Normandie et le Grand Est"
          />
        </ThreeColumns>
      </SectionWrap>
      <SectionWrap>
        <DoubleColumns>
          <NumberBloc
            url={NumberThree}
            iconAlt="Numéro trois"
            subtitleText="Appuyer des dynamiques sectorielles : éducation, entreprises, santé..."
            contentText="À l'école, dans les associations, en entreprise, sur les marchés, dans la rue : la médiation numérique aujourd'hui, c'est partout ! C'est pourquoi nous travaillons avec des acteurs de tous horizons sur des approches sectorielles de l'inclusion numérique"
            bubbleText="Associations, entreprises, acteurs éducatifs, élus ... Nous avons tous besoin de médiation numérique&nbsp;!"
          />
          <Image src={IllustrationPublic} />
        </DoubleColumns>
        <div style={{ padding: "50px" }}>
          <ThreeColumns>
            <Card
              iconUrl={CyanEye}
              titleText="Numérique éducatif"
              contentText="Mettre en lien les acteurs de l'éducation et les acteurs de la médiation numérique"
            />
            <Card
              iconUrl={CyanEye}
              titleText="Lutte contre la pauvreté"
              contentText="Créer du lien entre les associations et les opérateurs de médiation numérique"
            />
            <Card
              iconUrl={CyanEye}
              titleText="Développement économique"
              contentText="Favoriser l'inclusion numérique des dirigeants d'entreprises (TPE, PME ...)"
            />
          </ThreeColumns>
        </div>
      </SectionWrap>
      <Separator />
      <SectionWrap>
        <ReverseDoubleColumns>
          <ThreeBlocs></ThreeBlocs>
          <NumberBloc
            url={NumberFour}
            iconAlt="Numéro quatre"
            subtitleText="Créer du lien et mettre en réseau"
            contentText="Au cœur de la mission des Assembleurs : animer l'écosystème de la médiation numérique sur les Hauts-de-France"
            otherContentText="Numérique en commun(s) : rencontre annuelle des acteurs de l'inclusion numérique, organisée à la fois en édition nationale et édition locale"
          />
        </ReverseDoubleColumns>
      </SectionWrap>
      <SolutionsCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Missions;
