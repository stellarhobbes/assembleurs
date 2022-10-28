import React from "react";
import GlobalStyle from "../globalStyles";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "../components/seo";

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

const Societaire = () => {
  const SocietaireContent = useStaticQuery(graphql`
    query {
      strapiSocietaire {
        title
        accroche
        numberSection {
          numberCard {
            number {
              url
            }
            title
            content
          }
        }
        valeursSection {
          title
          valeurUnit {
            title
            content
          }
        }
        principeBloc {
          title
          content
          buttonText
          buttonUrl
        }
        whatBloc {
          title
          subtitle
          bulletText {
            content
          }
        }
        howBloc {
          title
          content
          buttonText
          buttonUrl
        }
        numberSectionEnd {
          numberCard {
            number {
              url
            }
            title
            content
          }
        }
      }
    }
  `);
  return (
    <body>
      <GlobalStyle />
      <Navbar />
      <TopNav />
      <Header
        isChildren="yes"
        iconUrl={LogoAssembleurs}
        iconAlt="Logo des Assembleurs"
        titleText={SocietaireContent.strapiSocietaire.title}
        contentText={SocietaireContent.strapiSocietaire.accroche}
      >
        <ThreeColumns>
          {SocietaireContent.strapiSocietaire.numberSection.numberCard.map(
            (content) => (
              <DarkCard
                iconUrl={content.number.url}
                titleText={content.title}
                contentText={content.content}
              />
            )
          )}
        </ThreeColumns>
      </Header>
      <DecorationSection>
        <Subtitle
          subtitleText={SocietaireContent.strapiSocietaire.valeursSection.title}
        />
        {SocietaireContent.strapiSocietaire.valeursSection.valeurUnit.map(
          (content) => (
            <ListElement
              titleText={content.title}
              contentText={content.content}
            />
          )
        )}
      </DecorationSection>
      <GreySection>
        <SectionWrap>
          <SimpleSection
            iconUrl={CyanEye}
            iconAlt="Un oeil cyan"
            titleText={SocietaireContent.strapiSocietaire.principeBloc.title}
            buttonUrl={SocietaireContent.strapiSocietaire.principeBloc.buttonUrl}
            buttonText={SocietaireContent.strapiSocietaire.principeBloc.buttonText}
            imageUrl={Mouse}
            imageAlt="Image de souris"
          >
            {SocietaireContent.strapiSocietaire.principeBloc.content}
          </SimpleSection>
        </SectionWrap>
        <SectionWrap>
          <SimpleSection
            iconUrl={ArrowDown}
            iconAlt="Une flèche vers le bas"
            titleText={SocietaireContent.strapiSocietaire.whatBloc.title}
          >
            <RoundCard
              backgroundColor="white"
              titleText={SocietaireContent.strapiSocietaire.whatBloc.subtitle}
            >
              {SocietaireContent.strapiSocietaire.whatBloc.bulletText.map((content) => (
                <ListElement contentText={content.content} />
              ))}
            </RoundCard>
          </SimpleSection>
        </SectionWrap>
      </GreySection>
      <SectionWrap>
        <SimpleSection
          iconUrl={QuestionMark}
          iconAlt="Un point d'interrogation"
          titleText={SocietaireContent.strapiSocietaire.howBloc.title}
          buttonUrl={SocietaireContent.strapiSocietaire.howBloc.buttonUrl}
          buttonText={SocietaireContent.strapiSocietaire.howBloc.buttonText}
        >
          {SocietaireContent.strapiSocietaire.howBloc.content}
        </SimpleSection>
        <div style={{ margin: "75px" }}></div>
        <ThreeColumns>
          {SocietaireContent.strapiSocietaire.numberSectionEnd.numberCard.map((content) => (
            <SocietaireCard>
            <img src={content.number.url} alt="" style={{ width: "50px" }}></img>
            <h3 style={{ textAlign: "center" }}>{content.title}</h3>
            <p style={{ textAlign: "center" }}>
              {content.content}
            </p>
          </SocietaireCard>
          ))}
        </ThreeColumns>
      </SectionWrap>
      <ContactCTA backgroundColor="lightblue" />
      <Footer />
    </body>
  );
};

export default Societaire;

export const Head = () => (
  <Seo title="Les Assembleurs - Devenir sociétaire" pathname="/societaire">
    <script async src="https://tally.so/widgets/embed.js"></script>
  </Seo>
);
