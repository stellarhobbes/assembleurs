import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Seo } from "../components/seo";

import Navbar from "../components/sections/navbar";
import TopNav from "../components/sections/top-navigation";
import HeaderLight from "../components/sections/header-light";
import Citation from "../components/sections/citation";
import SubtitleButton from "../components/sections/subtitle-button";
import SectionWrap from "../components/sections/section-wrap";
import TestimonialCard from "../components/elements/testimonial-card";
import ContactCTA from "../components/sections/contact-cta";
import Footer from "../components/sections/footer";

import Bulle from "../images/icons/Icone_bulle.png";
import Geoffrey from "../images/pictures/Temoignages/geoffrey.png";
import Guilhem from "../images/pictures/Temoignages/guilhem.png";

const breakpointColumnsObj = {
  default: 2,
  960: 1,
  700: 1,
  500: 1,
};

const DoubleColumnsWrapper = styled.section``;

const testimonialContent = [
  {
    background: "lightred",
    image: Geoffrey,
    alt: "",
    name: "Geoffrey MATHON",
    job: "Chargé de Développement Numérique",
    company: "Communauté d’Agglomération Lens-Liévin",
    text: "Les Assembleurs : un partenaire idéal pour la CALL qui a facilité : la structuration d’une pensée numérique pour son territoire, une connexion avec tous les acteurs du numérique, notre volonté de contribuer aux enjeux du numériques. Les assembleurs c’est « l’action pour l’ambition » et réciproquement !",
  },
  {
    background: "lightblue",
    image: "",
    alt: "",
    name: "Sylvain Prandi",
    job: "Président de l'association",
    company: "« Le fil de l’Epeule »",
    text: "Notre association « Le fil de l’Epeule », comité de quartier, situé à Roubaix, est une association par, pour et avec les habitants. Nous travaillons sur l’accès aux droits, la médiation et l’accompagnement social. Il y a quelques années, nous avons constaté que nous avions beaucoup de situations compliquées d’illectronisme, et nous avons développé une stratégie intitulée « le fil numérique » avec tout un programme d’actions : création d’un site dédié le NEN – Nouvel Espace Numérique, ateliers numériques individuels et collectifs, prêts d’équipements à tarif social, partenariats institutionnels et pouvoirs publics… C’est pourquoi nous sommes adhérents des Assembleurs. En parallèle, en tant que co-rédacteur de la loi sur les SCIC, j’ai une appétence particulière pour ce type de structures, et devenir sociétaire de la SCIC des Assembleurs me paraît évident pour faire avancer ces sujets et bénéficier d’un accès privilégié au réseau de l’inclusion numérique en Hauts-de-France.",
  },
  {
    background: "lightgrey",
    image: Guilhem,
    alt: "",
    name: "Guilhem Pradalié",
    job: "Directeur général",
    company: "La MedNum",
    text: "La trajectoire des hubs et de la Mednum est intimement liée. Si nous souhaitons faire de réelles différences nationales comme locales nous devons coordonner nos actions d’animation et soutien de nos réseaux. Nous avons à la Mednum la volonté d’intensifier nos travaux en proximité des hubs, véritables relais territoriaux selon nous, notamment en leur procurant les outils utiles que nous développons (IFN, standards data, plaidoyer…) et en les impliquant systématiquement sur les projets nationaux que nous opérons. A cette fin, nous pensons que la participation des Hubs au sociétariat de la Mednum et vice versa est un signal fort de rapprochement et d’interaction au sein de nos communautés.",
  },
];

const Temoignages = () => {
  return (
    <body>
      <Navbar />
      <TopNav />
      <SectionWrap backgroundColor="lightgrey">
        <HeaderLight
          iconUrl={Bulle}
          iconAlt="Icoône oeil rouge"
          titleText="Ils parlent de nous !"
          contentText="Nos partenaires prennent la parole : retour d'expérience, échanges, accompagnement... Découvrez-les ci-dessous :"
        />
        <Citation
          backgroundColor="lightgrey"
          citationText="Devenir sociétaire des Assembleurs me paraît évident pour bénéficier d'un accès privilégié au réseau d'inclusion numérique !"
          nameText="Sylvain Prandi • Président de l'association ''Le fil de l'Épeule''"
        />
      </SectionWrap>
      <SectionWrap>
        <SubtitleButton subtitleText="Les témoignages" />
        <DoubleColumnsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {testimonialContent.map((content) => (
              <TestimonialCard
                backgroundColor={content.background}
                imageUrl={content.image}
                imageAlt={content.alt}
                nameText={content.name}
                jobText={content.job}
                companyText={content.company}
                contentText={content.text}
                buttonText={content.button}
                buttonUrl={content.url}
              />
            ))}
          </Masonry>
        </DoubleColumnsWrapper>
      </SectionWrap>
      <ContactCTA backgroundColor="lightgrey" />
      <Footer />
    </body>
  );
};

export default Temoignages;

export const Head = () => (
  <Seo title="Les Assembleurs - Témoignages" pathname="/temoignages"></Seo>
);
