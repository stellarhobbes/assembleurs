import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import Masonry from "react-masonry-css";

/*Components*/
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";
import HalfImage from "../components/sections/half-image";
import IconCard from "../components/elements/icon-card";
import SectionWrap from "../components/sections/section-wrap";
import ContactCTA from "../components/sections/contact-cta";

/*Images*/
import ImageHeader from "../images/pictures/image-header-equipe.png";
import CyanEye from "../images/icons/cyaneye-assembleurs.png";
import LogoAssembleurs from "../images/icons/Icone_logo_Assembleurs.png";
import PatternLines from "../images/pictures/pattern-line-10p.png";
import PatternWaves from "../images/pictures/pattern-wave-10p.png";

/*Contents*/
const ressourcesContent = [
  {
    backgroundImage: PatternLines,
    backgroundColor: "lightblue",
    image: CyanEye,
    alt: "Un oeil cyan",
    title: "Cartographie des acteurs de la médiation numérique",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis bibendum faucibus. Integer dignissim mauris et felis commodo dictum. Curabitur rhoncus nunc diam, ut tempor libero ultrices et.",
    button: "Télécharger",
    url: "#",
  },
  {
    backgroundColor: "lightgrey",
    image: LogoAssembleurs,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis bibendum faucibus. Integer dignissim mauris et felis commodo dictum.",
    button: "Découvrir",
    url: "#",
  },
  {
    backgroundColor: "lightblue",
    image: CyanEye,
    alt: "Un oeil cyan",
    title: "Indice de fragilité numérique",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis bibendum faucibus. ",
    button: "Découvrir",
    url: "#",
  },
  {
    backgroundColor: "lightred",
    image: LogoAssembleurs,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis bibendum faucibus. Integer dignissim mauris et felis commodo dictum. Curabitur rhoncus nunc diam, ut tempor libero ultrices et.",
    button: "Télécharger",
    url: "#",
  },
  {
    backgroundColor: "lightblue",
    image: CyanEye,
    alt: "Un oeil cyan",
    title: "Le site de MedNum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis bibendum faucibus.",
    button: "Découvrir",
    url: "#",
  },
  {
    backgroundImage: PatternWaves,
    backgroundColor: "lightred",
    image: LogoAssembleurs,
    alt: "Un oeil cyan",
    title: "Chargé(e) de mission inclusion numérique",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis bibendum faucibus. Integer dignissim mauris et felis commodo dictum. ",
    button: "Télécharger",
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

const Ressources = () => {
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <HalfImage
        backgroundImage={ImageHeader}
        backgroundColor="lightgrey"
        subtitleText="Les ressources"
        contentText="Les Assembleurs sélectionnent et mettent en commun de nombreuses
        ressources et outils méthodologiques, à votre disposition ci-dessous."
      />

      <SectionWrap>
        <ColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {ressourcesContent.map((content) => (
              <IconCard
                backgroundImage={content.backgroundImage}
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
      </SectionWrap>
      <ContactCTA backgroundColor="lightgrey" />
      <Footer />
    </body>
  );
};

export default Ressources;
