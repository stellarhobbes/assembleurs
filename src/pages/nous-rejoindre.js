import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
/*import Masonry from "react-masonry-css";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import HalfImage from "../components/sections/half-image";
import JobsCTA from "../components/sections/jobs-cta";
import SectionWrap from "../components/sections/section-wrap";
import SimpleSection from "../components/sections/simple-section";
/*import IconCard from "../components/elements/icon-card";

/*Images*/
import ImageHeader from "../images/pictures/image-header-equipe.png";
import CyanEye from "../images/icons/cyaneye-assembleurs.png";
/*import LogoAssembleurs from "../images/icons/Icone_logo_Assembleurs.png";

/*Contents*/
/*
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
*/
/*Styles*/
/*const ColumnsWrapper = styled.section``;

const breakpointColumnsObj = {
  default: 3,
  960: 2,
  700: 2,
  500: 1,
};
*/
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Bubble = styled.p`
  width: 50%;
  font-weight: 600;
  text-align: center;
  background-color: #e0f3f9;
  border-radius: 30px;
  padding: 50px;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const NousRejoindre = () => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Nous rejoindre</title>
        <link rel="canonical" href="https://assembleurs.co/nous-rejoindre" />
      </Helmet>
      <Navbar />
      <HalfImage
        isScrollAnimation="yes"
        backgroundImage={ImageHeader}
        backgroundColor="lightgrey"
        subtitleText="Rejoindre une équipe dynamique et sympa"
        contentText="Envie de travailler sur des sujets à impact social fort&nbsp;? Rejoignez les Assembleurs pour agir sur l'inclusion numérique en Hauts-de-France"
      />
      <JobsCTA />
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

      <Wrapper>
        <Bubble>
          Nous n’avons pas d’offre d’emploi en cours, n’hésitez pas à nous
          envoyer une candidature spontanée à{" "}
          <Link to="mailto:bonjour@assembleurs.co">bonjour@assembleurs.co</Link>
        </Bubble>
      </Wrapper>
      <SectionWrap />
      {/*
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
*/}
      <Footer />
    </body>
  );
};

export default NousRejoindre;
