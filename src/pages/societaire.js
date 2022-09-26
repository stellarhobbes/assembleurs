import React from "react";
import GlobalStyle from "../globalStyles";
import { Link } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import TopNav from "../components/sections/top-navigation";
import ThreeColumns from "../components/sections/three-columns";
import DarkCard from "../components/elements/darkcard";
import DecorationSection from "../components/sections/decoration-section";
import Subtitle from "../components/elements/subtitle";
import ListElement from "../components/elements/list-element";
import SimpleSection from "../components/sections/simple-section";
import SectionWrap from "../components/sections/section-wrap";
import RoundCard from "../components/elements/round-card";
import ContactCTA from "../components/sections/contact-cta";
import Footer from "../components/sections/footer";

/*Images*/
import LogoAssembleurs from "../images/icons/Icone_logo_Assembleurs.png";
import CyanEye from "../images/icons/cyaneye-assembleurs.png";
import ArrowDown from "../images/icons/arrow-down-assembleurs.png";
import NumberOne from "../images/icons/number01-assembleurs.png";
import NumberTwo from "../images/icons/number02-assembleurs.png";
import NumberThree from "../images/icons/number03-assembleurs.png";
import QuestionMark from "../images/icons/questionmark-assembleurs.png";
import Mouse from "../images/illustrations/cursor-image.png";

/*Styles*/
const GreySection = styled.div`
  background-color: #f4f4f4;
  z-index: -5;
`;

const SocietaireCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*Contents*/
const headerContent = [
  {
    numberUrl: NumberOne,
    title: "Participer",
    text: "S'impliquer activement dans la gouvernance d'un projet régional au service de l'intérêt général",
  },
  {
    numberUrl: NumberTwo,
    title: "Échanger",
    text: "Se mettre en réseau avec d'autres acteurs et territoires",
  },
  {
    numberUrl: NumberThree,
    title: "S'informer",
    text: "Décrypter l'actualité de l'inclusion numérique : dispositifs d'États, appels à projet, financements",
  },
];

const valeursContent = [
  {
    title: "Inclusion et pouvoir d'agir",
    text: "Œuvrer pour une société numérique inclusive et créative qui offre une place à chacun",
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

const societaireContent = [
  {
    text: "Vous investissez dans des parts sociales de la coopérative",
  },
  {
    text: "Souscrire dans une SCIC est considéré comme un investissement à votre bilan, qui reste donc à votre actif. Le jour où vous souhaitez quitter la SCIC, vous pouvez récupérer le montant de vos parts",
  },
  {
    text: "Vous prenez part à la gouvernance et devenez acteur de l'inclusion numérique en Hauts-de-France",
  },
];

const Societaire = () => {
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Devenir sociétaire</title>
        <link rel="canonical" href="https://les.assembleurs.co/societaire" />
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <Header
        isChildren="yes"
        iconUrl={LogoAssembleurs}
        iconAlt="Logo des Assembleurs"
        titleText="Devenir sociétaire des Assembleurs"
        contentText="Depuis juillet 2022, les Assembleurs sont devenus une Société Coopérative d'Intérêt Collectif (SCIC). Découvrez comment prendre part à la dynamique !"
      >
        <ThreeColumns>
          {headerContent.map((content) => (
            <DarkCard
              iconUrl={content.numberUrl}
              titleText={content.title}
              contentText={content.text}
            />
          ))}
        </ThreeColumns>
      </Header>
      <DecorationSection>
        <Subtitle subtitleText="Les valeurs partagées" />
        {valeursContent.map((content) => (
          <ListElement titleText={content.title} contentText={content.text} />
        ))}
      </DecorationSection>
      <GreySection>
        <SectionWrap>
          <SimpleSection
            iconUrl={CyanEye}
            iconAlt="Un oeil cyan"
            titleText="Le principe Coopératif"
            buttonUrl="https://drive.pop.eu.com/s/e4NBnYNLwkZbto3"
            buttonText="Télécharger la plaquette"
            imageUrl={Mouse}
            imageAlt="Image de souris"
          >
            Devenir sociétaire consiste à souscrire une ou plusieurs parts
            sociales de la SCIC.<br></br>1 associé = 1 voix dans la gouvernance,
            quel que soit le nombre de parts souscrites.
          </SimpleSection>
        </SectionWrap>
        <SectionWrap>
          <SimpleSection
            iconUrl={ArrowDown}
            iconAlt="Une flèche vers le bas"
            titleText="Qu'est-ce que le sociétariat ?"
          >
            <RoundCard
              backgroundColor="white"
              titleText="Devenir sociétaire c'est ..."
            >
              {societaireContent.map((content) => (
                <ListElement contentText={content.text} />
              ))}
            </RoundCard>
          </SimpleSection>
        </SectionWrap>
      </GreySection>
      <SectionWrap>
        <SimpleSection
          iconUrl={QuestionMark}
          iconAlt="Un point d'interrogation"
          titleText="Comment devenir sociétaire ?"
          buttonUrl="https://tally.so/#tally-open=wzx59q&tally-emoji-text=👋&tally-emoji-animation=wave"
          buttonText="Télécharger l'archive"
        >
          Si vous souhaitez uniquement adhérer au réseau, contactez-nous à{" "}
          <Link to="mailto:bonjour@assembleurs.co">bonjour@assembleurs.co</Link>
        </SimpleSection>
        <div style={{ margin: "75px" }}></div>
        <ThreeColumns>
          <SocietaireCard>
            <img src={NumberOne} alt="" style={{ width: "50px" }}></img>
            <h3 style={{ textAlign: "center" }}>Bulletin de souscription</h3>
            <p style={{ textAlign: "center" }}>
              Vous téléchargez le bulletin de souscription et nous le renvoyez
              rempli à{" "}
              <Link to="mailto:bonjour@assembleurs.co">
                bonjour@assembleurs.co
              </Link>
            </p>
          </SocietaireCard>
          <SocietaireCard>
            <img src={NumberTwo} alt="" style={{ width: "50px" }}></img>
            <h3 style={{ textAlign: "center" }}>Validation administrative</h3>
            <p style={{ textAlign: "center" }}>
              Votre souscription est présentée au Conseil d’Adminisitration
            </p>
          </SocietaireCard>
          <SocietaireCard>
            <img src={NumberThree} alt="" style={{ width: "50px" }}></img>
            <h3 style={{ textAlign: "center" }}>Prise de sociétariat</h3>
            <p style={{ textAlign: "center" }}>
              Vous versez les fonds relatifs à votre souscription sur le compte
              des Assembleurs
            </p>
          </SocietaireCard>
        </ThreeColumns>
      </SectionWrap>
      <ContactCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Societaire;
