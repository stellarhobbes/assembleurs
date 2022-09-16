import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import HalfImage from "../components/sections/half-image";
import JobsCTA from "../components/sections/jobs-cta";
import DecorationSection from "../components/sections/decoration-section";
import Subtitle from "../components/elements/subtitle";
import ListElement from "../components/elements/list-element";
import SectionWrap from "../components/sections/section-wrap";
import SimpleSection from "../components/sections/simple-section";
import IconCard from "../components/elements/icon-card";

/*Images*/
import ImageHeader from "../images/pictures/image-header-equipe.png";
import CyanEye from "../images/icons/cyaneye-assembleurs.png";
import LogoAssembleurs from "../images/icons/Icone_logo_Assembleurs.png";

/*Contents*/
const valeursContent = [
  {
    title: "Inclusion et pouvoir d'agir",
    text: "Oeuvrer pour une société numérique inclusive et créative qui offre une place à chacun",
  },
  {
    title: "Durabilité & sobriété",
    text: "Favoriser un numérique éthique, coopératif, démocratique et frugal",
  },
  {
    title: "ESS & Agilité",
    text: "Les Assembleurs est une entreprise de l'ESS, qui allie intérêt général et agilité entrepreneuriale",
  },
  {
    title: "Ouverture & Collaboration",
    text: "Favoriser la co-construction, le pair à pair et la production de communs",
  },
  {
    title: "Ancrage & équité territoriale",
    text: "Agir pour tous les territoires des Hauts-de-France, notamment les plus sensibles",
  },
];

const offersContent = [
  {
    backgroundColor: "lightblue",
    image: CyanEye,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Résumé : Développer sur les territoires une offre de médiation numérique au plus proche des besoins des habitants, en allant les chercher où ils sont",
    button: "Découvrir le poste",
    url: "#",
  },
  {
    backgroundColor: "lightred",
    image: LogoAssembleurs,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Résumé : Développer sur les territoires une offre de médiation numérique",
    button: "Découvrir le poste",
    url: "#",
  },
  {
    backgroundColor: "lightblue",
    image: CyanEye,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Résumé : Développer sur les territoires une offre de médiation numérique au plus proche des besoins des habitants, en allant les chercher où ils sont",
    button: "Découvrir le poste",
    url: "#",
  },
  {
    backgroundColor: "lightgrey",
    image: LogoAssembleurs,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Résumé : Développer sur les territoires une offre de médiation numérique",
    button: "Découvrir le poste",
    url: "#",
  },
  {
    backgroundColor: "lightblue",
    image: CyanEye,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Résumé : Développer sur les territoires une offre de médiation numérique au plus proche des besoins des habitants, en allant les chercher où ils sont",
    button: "Découvrir le poste",
    url: "#",
  },
  {
    backgroundColor: "lightred",
    image: LogoAssembleurs,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Résumé : Développer sur les territoires une offre de médiation numérique",
    button: "Découvrir le poste",
    url: "#",
  },
];

/*Styles*/
const ColumnsWrapper = styled.section``;

const breakpointColumnsObj = {
  default: 3,
  960: 2,
  700: 2,
  500: 1,
};

const NousRejoindre = () => {
  return (
    <body>
      <Navbar />
      <HalfImage
        isScrollAnimation="yes"
        backgroundImage={ImageHeader}
        backgroundColor="lightgrey"
        subtitleText="Rejoindre une équipe dynamique et sympa"
        contentText="Envie de travailler sur des sujets à impact social fort&nbsp;? Rejoignez les Assembleurs pour agir sur l'inclusion numérique en Hauts-de-France"
      />
      <JobsCTA />
      <DecorationSection>
        <Subtitle subtitleText="Les valeurs partagées" />
        {valeursContent.map((content) => (
          <ListElement titleText={content.title} contentText={content.text} />
        ))}
      </DecorationSection>
      <SectionWrap>
        <SimpleSection
          iconUrl={CyanEye}
          iconAlt="Un oeil cyan"
          titleText="Nos offres d'emplois"
        >
          Envie de travailler sur des sujets à impact social fort&nbsp;? <br />
          Rejoignez les Assembleurs pour agir sur l'inclusion numérique en
          Hauts-de-France
        </SimpleSection>
      </SectionWrap>
      <ColumnsWrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {offersContent.map((content) => (
            <IconCard
              backgroundColor={content.backgroundColor}
              imageUrl={content.image}
              imageAlt={content.alt}
              subtitleText={content.title}
              buttonText={content.button}
              buttonUrl={content.url}
            >
              {content.text}
            </IconCard>
          ))}
        </Masonry>
      </ColumnsWrapper>
      <Footer />
    </body>
  );
};

export default NousRejoindre;
