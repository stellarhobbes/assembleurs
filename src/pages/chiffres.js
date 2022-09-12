import React from "react";
import GlobalStyle from "../globalStyles";

/*Components*/
import Navbar from "../components/sections/navbar";
import TopNav from "../components/sections/top-navigation";
import TextImage from "../components/sections/text-image";
import Footer from "../components/sections/footer";
import SectionWrap from "../components/sections/section-wrap";
import SubtitleCenter from "../components/sections/subtitle-center";
import DataCard from "../components/elements/data-card";
import ThreeColumns from "../components/sections/three-columns.js";
import ContactCTA from "../components/sections/contact-cta";

/*Images*/
import OvalePicture from "../images/pictures/ovale-picture-chiffres-assembleurs.png";
import Oneblue from "../images/icons/number01-cyan.png";
import Twoblue from "../images/icons/number02-cyan.png";

/*Data - Pictogrammes*/
import DataOne from "../images/data/data-15pax.png";
import DataTwo from "../images/data/data-30.png";
import DataThree from "../images/data/data-60.png";
import DataFour from "../images/data/data-300000.png";
import DataFive from "../images/data/data-3.png";
import DataSix from "../images/data/data-800.png";

import DataSeven from "../images/data/data-29-2.png";
import DataEight from "../images/data/data-90.png";
import DataNine from "../images/data/data-57.png";
/*
import DataTen from "../images/data/data-1200000.png";
import DataEleven from "../images/data/data-750.png";
import DataTwelve from "../images/data/data-75000.png";
*/

const dataAssembleurs = [
  {
    imageUrl: DataOne,
    imageAlt: "",
    subtitleText: "Personnes dans l'équipe",
    contentText: "",
    subcontentText: "",
    sourceText: "",
  },
  {
    imageUrl: DataTwo,
    imageAlt: "",
    subtitleText: "Projets en cours",
    contentText: "",
    subcontentText: "",
    sourceText: "",
  },
  {
    imageUrl: DataThree,
    imageAlt: "",
    subtitleText: "Acteurs impliqués",
    contentText: "",
    subcontentText: "",
    sourceText: "",
  },
  {
    imageUrl: DataFour,
    imageAlt: "",
    subtitleText: "Pass Numérique",
    contentText: "",
    subcontentText: "en cours de développement sur le territoire des Hauts-de-France",
    sourceText: "",
  },
  {
    imageUrl: DataFive,
    imageAlt: "",
    subtitleText: "Projets sectoriels",
    contentText: "",
    subcontentText: "Le numérique éducatif - Inclusion numérique des dirigeants TPE - Stratégie de lutte contre la pauvreté",
    sourceText: "",
  },
  {
    imageUrl: DataSix,
    imageAlt: "",
    subtitleText: "Personnes formées",
    contentText: "",
    subcontentText: "À Aidants Connect",
    sourceText: "",
  },
];

const dataNumerique = [
  {
    imageUrl: DataSeven,
    imageAlt: "",
    subtitleText: "",
    contentText: "se déclarent peu / ne pas être compétents en matière d'administration numérique",
    subcontentText: "",
    sourceText: "Source - lien",
  },
  {
    imageUrl: DataEight,
    imageAlt: "",
    subtitleText: "",
    contentText: "Pourcentage de la population qui possède un smartphone et une connexion internet",
    subcontentText: "",
    sourceText: "Source - lien",
  },
  {
    imageUrl: DataNine,
    imageAlt: "",
    subtitleText: "",
    contentText: "Des offres d'emploi sont inaccessibles aux débutants sans compétences numérique",
    subcontentText: "",
    sourceText: "Source - Pôle Emploi",
  },
];

const Chiffres = () => {
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <TextImage
        backgroundColor="darkblue"
        bulletColor="red"
        titleColor="white"
        title="Datas et chiffres"
        contentColor="white"
        imageUrl={OvalePicture}
        alt="Une réunion chez les Assembleurs"
      >
        La mission des Assembleurs est d'accompagner, former et animer une
        dynamique collective pour une société numérique inclusive et créative.{" "}
        <br />
        <br /> Notre vision : Agir collectivement pour une transition numérique
        inclusive des Hauts-de-France !
      </TextImage>
      <div style={{ backgroundColor: "#F4F4F4" }}>
        <SectionWrap>
          <SubtitleCenter iconUrl={Oneblue} iconAlt="">
            Les chiffres clés des Assembleurs
          </SubtitleCenter>
          <SectionWrap>
          <ThreeColumns>
            {dataAssembleurs.map((data) => (
              <DataCard
                imageUrl={data.imageUrl}
                imageAlt={data.imageAlt}
                subtitleText={data.subtitleText}
                contentText={data.contentText}
                subcontentText={data.subcontentText}
                sourceText={data.sourceText}
              />
            ))}
          </ThreeColumns>
          </SectionWrap>
        </SectionWrap>
      </div>
      <div style={{ backgroundColor: "#ffffff" }}>
        <SectionWrap>
          <SubtitleCenter iconUrl={Twoblue} iconAlt="">
            Les chiffres clés de l'inclusion numérique
          </SubtitleCenter>
          <SectionWrap>
          <ThreeColumns>
            {dataNumerique.map((data) => (
              <DataCard
                imageUrl={data.imageUrl}
                imageAlt={data.imageAlt}
                subtitleText={data.subtitleText}
                contentText={data.contentText}
                subcontentText={data.subcontentText}
                sourceText={data.sourceText}
              />
            ))}
          </ThreeColumns>
          </SectionWrap>
        </SectionWrap>
      </div>
      <ContactCTA backgroundColor="lightblue"/>
      <Footer />
    </body>
  );
};

export default Chiffres;
