import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { Helmet } from "react-helmet";

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
import Separator from "../components/blocs/separator";

/*Images*/
import OvalePicture from "../images/pictures/ovale-picture-chiffres-assembleurs.png";
import Oneblue from "../images/icons/number01-cyan.png";
import Twoblue from "../images/icons/number02-cyan.png";
import Threeblue from "../images/icons/number03-cyan.png";
import France from "../images/pictures/france.png";

/*Data - Pictogrammes*/
import DataOne from "../images/data/data-15pax.png";
import DataTwo from "../images/data/data-30.png";
import DataThree from "../images/data/data-60.png";
import DataFour from "../images/data/data-300000.png";
import DataFive from "../images/data/data-4.png";
import DataSix from "../images/data/data-800.png";

import DataSeven from "../images/data/data-29-2.png";
import DataEight from "../images/data/data-90.png";
import DataNine from "../images/data/data-57.png";

import DataTen from "../images/data/data-1200000.png";
import DataEleven from "../images/data/data-750.png";
import DataTwelve from "../images/data/data-75000.png";

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
    subtitleText: "Pass numériques",
    contentText: "",
    subcontentText:
      "en cours de déploiement sur le territoire des Hauts-de-France",
    sourceText: "",
  },
  {
    imageUrl: DataFive,
    imageAlt: "",
    subtitleText: "Projets sectoriels",
    contentText: "",
    subcontentText:
      "Le numérique éducatif - Inclusion numérique des dirigeants TPE - Stratégie de lutte contre la pauvreté - Santé",
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
    contentText:
      "se déclarent peu / ne pas être compétents en matière d'administration numérique",
    subcontentText: "",
    sourceText: "Source - lien",
  },
  {
    imageUrl: DataEight,
    imageAlt: "",
    subtitleText: "",
    contentText:
      "Pourcentage de la population qui possède un smartphone et une connexion internet",
    subcontentText: "",
    sourceText: "Source - lien",
  },
  {
    imageUrl: DataNine,
    imageAlt: "",
    subtitleText: "",
    contentText:
      "Des offres d'emploi sont inaccessibles aux débutants sans compétences numériques",
    subcontentText: "",
    sourceText: "Source - Pôle Emploi",
  },
];

/*Styles*/
const GeoNumbers = styled.div``;
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 2em;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 100%;
  @media (max-width: 960px) {
    display: none;
  }
`;
const NumbersBloc = styled.div``;
const Numbers = styled.div``;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Bottom = styled.div``;

const Chiffres = () => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Chiffres</title>
        <link rel="canonical" href="https://assembleurs.co/chiffres" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <TextImage
        backgroundColor="darkblue"
        bulletColor="red"
        titleColor="white"
        title="Données et chiffres"
        contentColor="white"
        imageUrl={OvalePicture}
        alt="Une réunion chez les Assembleurs"
      >
        La mission des Assembleurs est d'accompagner, former et animer une
        dynamique collective pour une société numérique inclusive et créative.{" "}
        <br />
        <br /> Notre vision : Agir collectivement pour une transition numérique
        inclusive des Hauts-de-France&nbsp;!
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
      <Separator />
      <SectionWrap>
        <GeoNumbers>
          <Wrapper>
            <Image src={France}></Image>
            <NumbersBloc>
              <SubtitleCenter iconUrl={Threeblue} iconAlt="">
                Données des Hauts-de-France
              </SubtitleCenter>
              <Numbers>
                <Top>
                  <DataCard
                    imageUrl={DataTen}
                    imageAlt=""
                    contentText="exclues du numérique en Hauts-de-France"
                    subcontentText="Soit 19% de la population"
                  />
                  <DataCard
                    imageUrl={DataEleven}
                    imageAlt=""
                    contentText="Médiateurs numériques en Hauts-de-France au sein de 500 lieux"
                  />
                </Top>
                <Bottom>
                  <DataCard
                    imageUrl={DataTwelve}
                    imageAlt=""
                    contentText="75.000 travailleurs sociaux en première ligne, trop peu formés"
                  />
                </Bottom>
              </Numbers>
            </NumbersBloc>
          </Wrapper>
        </GeoNumbers>
      </SectionWrap>
      <Separator />
      <ContactCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Chiffres;
