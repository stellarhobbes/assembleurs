import React from "react";
import GlobalStyle from "../globalStyles";

import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import TopNav from "../components/sections/top-navigation";
import HalfImage from "../components/sections/half-image";
import SectionWrap from "../components/sections/section-wrap";
import SubtitleButton from "../components/sections/subtitle-button";
import FourColumns from "../components/sections/four-columns";
import PeopleCard from "../components/elements/peoplecards";
import ContactCTA from "../components/sections/contact-cta";

import ImageHeader from "../images/pictures/image-header-equipe.png";
import Amandine from "../images/pictures/amandine-profile.png";

const peopleList = [
  {
    background: "#FFE0DB",
    picture: Amandine,
    name: "Amandine Ezcurdia",
    job: "Coordinatrice Formation",
    mailto: "mailto:justine@assembleurs.fr",
  },
  {
    background: "#F4F4F4",
    picture: Amandine,
    name: "Amandine Ezcurdia",
    job: "Coordinatrice Formation",
    mailto: "mailto:justine@assembleurs.fr",
  },
  {
    background: "#E1F4FA",
    picture: Amandine,
    name: "Amandine Ezcurdia",
    job: "Coordinatrice Formation",
    mailto: "mailto:justine@assembleurs.fr",
  },
  {
    background: "#F4F4F4",
    picture: Amandine,
    name: "Amandine Ezcurdia",
    job: "Coordinatrice Formation",
    mailto: "mailto:justine@assembleurs.fr",
  },
  {
    background: "#E1F4FA",
    picture: Amandine,
    name: "Amandine Ezcurdia",
    job: "Coordinatrice Formation",
    mailto: "mailto:justine@assembleurs.fr",
  },
  {
    background: "#FFE0DB",
    picture: Amandine,
    name: "Amandine Ezcurdia",
    job: "Coordinatrice Formation",
    mailto: "mailto:justine@assembleurs.fr",
  },
];

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
        contentText="Développé depuis fin 2019 au sein du collectif POP, l'équipe compte plus de 15 collaborateurs et nous prévoyons de doubler les effectifs d'ici fin 2023."
      />
      <SectionWrap>
        <SubtitleButton subtitleText="Les profils" />
        <FourColumns>
          {peopleList.map((people) => (
            <PeopleCard
              backgroundColor={people.background}
              imageUrl={people.picture}
              name={people.name}
              job={people.job}
              buttonUrl={people.mailto}
            />
          ))}
        </FourColumns>
      </SectionWrap>
      <ContactCTA backgroundColor="lightblue"/>
      <Footer />
    </body>
  );
};

export default Equipe;
