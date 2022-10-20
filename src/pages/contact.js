import React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

/*Components*/
import Navbar from "../components/sections/navbar";
import Header from "../components/sections/header";
import SectionWrap from "../components/sections/section-wrap";
import Footer from "../components/sections/footer";

/*Images*/
import LogoAssembleurs from "../images/icons/Icone_logo_Assembleurs.png";
import Enveloppe from "../images/illustrations/Picto_mail.png";

/*Styles*/
const MailCTA = styled.div`
  background-color: #e0f3f9;
  padding: 10px 0px;
  text-align: center;
`;

const MailText = styled.p`
  font-family: "Big Shoulders Display", cursive;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1.8em;
`;

const MailNumber = styled.span`
  color: #00bee6;
  text-decoration: none;
`;

const Mail = styled.a`
  color: inherit;
`;

const ContactSection = styled.div``;
const TopContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 250px;
  margin: 0px 25px;
`;

const Adresse = styled.div`
  margin: 0px 25px;
`;

const Icon = styled.img`
  width: 50px;
`;

const Title = styled.h3`
  margin: 10px 0px;
`;

const Content = styled.p`
  margin: 5px 0px;
`;

const FormContact = styled.div``;

const Contact = () => {
  const contact = useStaticQuery(graphql`
  query {
    strapiContact {
      mailAdress
      title
      bandeau
      adress
      accroche
    }
  }
`);
  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Assembleurs - Contact</title>
        <link rel="canonical" href="https://assembleurs.co/contact" />
        <meta
          name="title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          name="description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assembleurs.co/contact" />
        <meta
          property="og:title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          property="og:description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dgnptaxm4/image/upload/v1666271732/illustration-assembleurs_l9rl5h.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://assembleurs.co/contact" />
        <meta
          property="twitter:title"
          content="Les Assembleurs - Agir collectivement pour que chacun trouve sa place dans la société numérique."
        />
        <meta
          property="twitter:description"
          content="Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dgnptaxm4/image/upload/v1666271732/illustration-assembleurs_l9rl5h.png"
        ></meta>
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Header
        iconUrl={LogoAssembleurs}
        iconAlt="Icone du logo des Assembleurs"
        titleText={contact.strapiContact.title}
        contentText={contact.strapiContact.accroche}
      ></Header>
      <MailCTA>
        <MailText>
          {contact.strapiContact.bandeau}
          <MailNumber>
            <Mail href={`mailto:` + contact.strapiContact.mailAdress}>
              &nbsp;{contact.strapiContact.mailAdress}
            </Mail>
          </MailNumber>
        </MailText>
      </MailCTA>
      <SectionWrap>
        <ContactSection>
          <TopContact>
            <Image src={Enveloppe} alt="Illustration d'une enveloppe"></Image>
            <Adresse>
              <Icon src={LogoAssembleurs} alt="Logo des Assembleurs"></Icon>
              <Title>Les Assembleurs</Title>
              <Content>{contact.strapiContact.adress}</Content>
            </Adresse>
          </TopContact>
          <FormContact></FormContact>
        </ContactSection>
      </SectionWrap>
      <Footer />
    </body>
  );
};

export default Contact;
