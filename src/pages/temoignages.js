import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

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
import TestImage from "../images/pictures/amandine-profile.png";

const breakpointColumnsObj = {
  default: 2,
  960: 1,
  700: 1,
  500: 1
};

const DoubleColumnsWrapper = styled.section``;

const testimonialContent = [
  {
    background: "lightred",
    image: TestImage,
    alt: "",
    name: "Marina Loiseau",
    job: "Présidente de l'association",
    company: "Le fil de l'Épeule",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh eu lacus consequat suscipit. Suspendisse auctor facilisis erat et semper. Vestibulum dolor quam, dignissim quis volutpat vitae, congue feugiat nisl. Fusce semper faucibus sem in pulvinar. ",
  },
  {
    background: "lightblue",
    image: TestImage,
    alt: "",
    name: "Paul Lefebvre",
    job: "Président de l'association",
    company: "Le fil de l'Épeule",
    text: "Sed vitae magna pulvinar, dictum ex et, posuere odio. Aliquam hendrerit, nibh non ullamcorper scelerisque, risus ipsum pellentesque ligula, sed aliquam lectus tortor non ex. Fusce eget massa eu nisl feugiat convallis. Maecenas quis laoreet odio. Nulla et varius urna, quis porta nisi. Mauris pellentesque justo mauris, vel hendrerit dolor scelerisque ac. Integer elementum, tortor id blandit porttitor, dolor leo placerat enim, sit amet aliquet leo urna ac odio.",
    url: "#",
  },
  {
    background: "lightgrey",
    image: TestImage,
    alt: "",
    name: "Marie-Jeanne Dutilleuil",
    job: "Président de l'association",
    company: "Le fil de l'Épeule",
    text: "Sed vitae magna pulvinar, dictum ex et, posuere odio. Aliquam hendrerit, nibh non ullamcorper scelerisque, risus ipsum pellentesque ligula, sed aliquam lectus tortor non ex. Fusce eget massa eu nisl feugiat convallis. Maecenas quis laoreet odio. Nulla et varius urna, quis porta nisi. Mauris pellentesque justo mauris, vel hendrerit dolor scelerisque ac. Integer elementum, tortor id blandit porttitor, dolor leo placerat enim, sit amet aliquet leo urna ac odio.",
    url: "#",
  },
  {
    background: "lightred",
    image: TestImage,
    alt: "",
    name: "Raymond Sisteron",
    job: "Présidente de l'association",
    company: "Le fil de l'Épeule",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh eu lacus consequat suscipit. Suspendisse auctor facilisis erat et semper. Vestibulum dolor quam, dignissim quis volutpat vitae, congue feugiat nisl. Fusce semper faucibus sem in pulvinar. ",
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
          nameText="Sylvain Prandi • Président de l'association &apos;&apos;Le fil de l'Épeule&apos;&apos;"
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
      <ContactCTA backgroundColor="lightgrey"/>
      <Footer />
    </body>
  );
};

export default Temoignages;
