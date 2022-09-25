import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import Masonry from "react-masonry-css";

import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import TopNav from "../components/sections/top-navigation";
import HalfImage from "../components/sections/half-image";
import SectionWrap from "../components/sections/section-wrap";
import SubtitleButton from "../components/sections/subtitle-button";
import PeopleCard from "../components/elements/peoplecards";
import ContactCTA from "../components/sections/contact-cta";

import ImageHeader from "../images/pictures/image-header-equipe.png";

import Camille from "../images/pictures/Team/camille.png"
import Diane from "../images/pictures/Team/diane.png"
import Eglantine from "../images/pictures/Team/eglantine.png"
import EmmanuelL from "../images/pictures/Team/emmanuelL.png"
import EmmanuelV from "../images/pictures/Team/emmanuelv.png"
import Erika from "../images/pictures/Team/erika.png"
import Faustine from "../images/pictures/Team/faustine.png"
import Floriane from "../images/pictures/Team/floriane.png"
import FX from "../images/pictures/Team/fx.png"
import Jules from "../images/pictures/Team/jules.png"
import Julie from "../images/pictures/Team/julie.png"
import Marion from "../images/pictures/Team/marion.png"
import Romain from "../images/pictures/Team/romain.png"
import Sakina from "../images/pictures/Team/sakina.png"
import Thomas from "../images/pictures/Team/thomas.png"

const peopleList = [
  {
    background: "#FFE0DB",
    picture: Eglantine,
    name: "Eglantine DEWITTE",
    job: "Directrice des Assembleurs",
  },
  {
    background: "#F4F4F4",
    picture: EmmanuelV,
    name: "Emmanuel VANDAMME",
    job: "Président de la SCIC",
  },
  {
    background: "#E1F4FA",
    picture: Floriane,
    name: "Amandine EZCURDIA",
    job: "Coordinatrice formations Aidants Connect",
  },
  {
    background: "#F4F4F4",
    picture: Floriane,
    name: "Floriane GASCHY",
    job: "Facilitatrice, conceptrice pédagogique",
  },
  {
    background: "#E1F4FA",
    picture: Jules,
    name: "Jules DEREGNAUCOURT",
    job: "Responsable activité formation",
  },
  {
    background: "#FFE0DB",
    picture: Sakina,
    name: "Sakina BELKENADIL",
    job: "Chargée administrative des formations et référente qualité",
  },
  {
    background: "#F4F4F4",
    picture: EmmanuelL,
    name: "Emmanuel LETOURNEUX",
    job: "Directeur média",
  },
  {
    background: "#FFE0DB",
    picture: Julie,
    name: "Julie LATTÈS",
    job: "Directrice communication",
  },
  {
    background: "#E1F4FA",
    picture: Erika,
    name: "Erika VAN GODTSENHOVEN",
    job: "Directrice administrative et financière",
  },
  {
    background: "#FFE0DB",
    picture: Thomas,
    name: "Thomas EDESA",
    job: "Chargé de mission entreprises",
  },
  {
    background: "#E1F4FA",
    picture: Faustine,
    name: "Faustine FAURE",
    job: "Chargée de mission associations",
  },
  {
    background: "#F4F4F4",
    picture: Marion,
    name: "Marion DUPUIS",
    job: "Chargée de mission santé",
  },
  {
    background: "#FFE0DB",
    picture: FX,
    name: "François-Xavier RICARD",
    job: "Chargé de mission ingénierie territoriale",
  },
  {
    background: "#E1F4FA",
    picture: Romain,
    name: "Romain BARRIER",
    job: "Chargé de mission animation de réseau Conseillers Numériques France Service",
  },
  {
    background: "#FFE0DB",
    picture: Camille,
    name: "Camille PAJOT",
    job: "Chargée de mission ingénierie territoriale",
  },
  {
    background: "#F4F4F4",
    picture: Diane,
    name: "Diane BELPAUME",
    job: "Chargée de mission prospection et animation du réseau Picardie",
  },
];

const Wrapper = styled.section``
const breakpointColumnsObj = {
  default: 3,
  960: 3,
  700: 2,
  500: 1,
};

const Equipe = () => {
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <HalfImage
        backgroundColor="lightgrey"
        isScrollAnimation="Y"
        backgroundImage={ImageHeader}
        subtitleText="L'équipe des Assembleurs"
        contentText="L'équipe rassemble plus de 15 personnes dynamiques et enthousiastes ! Nous prévoyons de doubler les effectifs d'ici fin 2023."
      />
      <SectionWrap>
        <div id="target"></div>
        <SubtitleButton subtitleText="Les profils" />
        <Wrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {peopleList.map((people) => (
            <PeopleCard
              backgroundColor={people.background}
              imageUrl={people.picture}
              name={people.name}
              job={people.job}
              buttonUrl={people.mailto}
            />
          ))}
        </Masonry>
        </Wrapper>
      </SectionWrap>
      <ContactCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Equipe;
